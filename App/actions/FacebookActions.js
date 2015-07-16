var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var FacebookLoginManager = require('NativeModules').FacebookLoginManager;
var AlertIOS = require('react-native').AlertIOS;
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var FacebookActions = {

  newFacebookSession: function() {
    FacebookLoginManager.newSession((error, info) => {
      this.handleLogin(info);
    });
  },
  handleLogin: function(credentials) {
    if (credentials !== null) {
      let authData = {
        id: credentials.userId,
        access_token: credentials.token,
        expiration_date: {
          __type: "Date",
          iso: credentials.tokenExpirationDate
        }
      };

      Parse.FacebookUtils.logIn(authData, {
        success: () => {
          this.fetchFacebookUserData(authData.id, authData.access_token);
        },
        error: (user, error) => {
          switch (error.code) {
            case Parse.Error.INVALID_SESSION_TOKEN:
            Parse.User.logOut().then(() => {
              this.handleLogin(credentials);
            });
            break;
            default:
            alert(error.message);
          }
        }
      });
    }
  },
  fetchFacebookUserData: function(userId, token){
    fetch('https://graph.facebook.com/v2.4/' + userId + '?access_token=' + token + '&fields=age_range,gender,name&format=json')
        .then((response) => response.text())
        .then((responseText) => {
          var jsonResponse = JSON.parse(responseText);
          var currentUser = Parse.User.current();
          currentUser.set("name", jsonResponse.name);
          if (jsonResponse.age_range.min !== null){
            currentUser.set("age_range", jsonResponse.age_range.min);
          }
          if (jsonResponse.gender !== null){
            currentUser.set("gender", jsonResponse.gender);
          }
          // if (jsonResponse.education !== null){
          //   currentUser.set("education", jsonResponse.education);
          // }
          // if (jsonResponse.birthday !== null){
          //   currentUser.set("birthday", jsonResponse.birthday);
          // }
          currentUser.save(null, {
            success: function(currentUser) {
              return
            },
            error: function(currentUser, error) {
              console.log('Error: ' + error);
            }
          });
        })
        .catch((error) => {
          console.warn(error);
        });
  },
};

module.exports = FacebookActions;
