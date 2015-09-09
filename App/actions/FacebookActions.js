var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var FacebookLoginManager = require('NativeModules').FacebookLoginManager;
var AlertIOS = require('react-native').AlertIOS;
var Parse = require('parse').Parse;

var FacebookActions = {

  newFacebookSession: function(nav) {
    FacebookLoginManager.newSession((error, info) => {
      this.handleLogin(info, nav);
    });
  },
  handleLogin: function(credentials, nav) {
    if (credentials !== null) {
      let authData = {
        id: credentials.userId,
        access_token: credentials.token,
        expiration_date: {
          __type: "Date",
          iso: credentials.tokenExpirationDate
        }
      };

      this.fetchFacebookUserData(authData.id, authData.access_token, nav);

      /*Parse.FacebookUtils.logIn(authData, {
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
      });*/
    }
  },
  fetchFacebookUserData: function(userId, token, nav){
    fetch('https://graph.facebook.com/v2.4/' + userId + '?access_token=' + token + '&fields=email,age_range,gender,name&format=json')
        .then((response) => response.text())
        .then((responseText) => {
          var jsonResponse = JSON.parse(responseText);
          //var currentUser = Parse.User.current();
          //currentUser.set("name", jsonResponse.name);
          // if (jsonResponse.age_range.min !== null){
          //   currentUser.set("age_range", jsonResponse.age_range.min);
          // }
          // if (jsonResponse.gender !== null){
          //   currentUser.set("gender", jsonResponse.gender);
          // }
          // currentUser.save(null, {
          //   success: function(currentUser) {
          //     return;
          //   },
          //   error: function(currentUser, error) {
          //     console.log('Error: ' + error);
          //   }
          // });

          //contact server
          //see if theyre already logged in with fb

          //update stores inside of server request

          AppDispatcher.handleViewAction({
            actionType: AppConstants.CREATE_ACCOUNT,
            name: jsonResponse.name,
            email: jsonResponse.email,
            token: jsonResponse.id,
            step: 'Bank Select',
          });

          if (nav.getCurrentRoutes().length === 2){
              nav.pop();
          }
          setTimeout(function(){
              nav.push({name: 'BankSelectPage'});
          }, 1000);
        })
        .catch((error) => {
          console.warn(error);
        });
  },
};

module.exports = FacebookActions;
