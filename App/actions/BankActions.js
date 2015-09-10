var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var client_id = 'test_id';
var secret = 'test_secret';

var BankActions = {
  checkStatus: function(response){
    if (response.status >= 200 && response.status < 300) {
      console.log('repsonse code', response.status)
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  },
  parseJSON(response){
    return response.json()
  },
  handleUsernameAndPassword: function(bank, username, password, nav){

    fetch('https://tartan.plaid.com/connect?client_id='
	    + client_id + '&secret=' + secret +  '&username=' + 'plaid_test'
	    + '&password=' + 'plaid_good' + '&type=' + bank
      + '&options={"list":true}', {method: 'post'})
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then(function(data) {
        console.log('repsonse data was: ', data)
        AppDispatcher.handleViewAction({
          actionType: AppConstants.PLAID,
          data: data,
        });

        if (data.type === 'list') {

          if (data.mfa.length === 1) {
            this.handleSecurityQuestion(data.mfa[0], bank, data.access_token, nav);
          } else {

          nav.push({name: 'BankMFACodeSelectPage',
                    bank: BankActions.unabreviate(bank),
                    list: data.mfa,
                    accessToken: data.access_token});
          }
        }
        else if (data.type === 'questions') {
          nav.push({name: 'BankMFAPage',
                    bank: BankActions.unabreviate(bank),
                    question: data.mfa[0].question,
                    accessToken: data.access_token});
        }
      }).catch(function(error) {
        console.log('request failed', error)
      })

  },
  handleSecurityQuestion: function(answer, bank, accessToken, nav){
    fetch('https://tartan.plaid.com/connect/step?client_id='
	    + client_id + '&secret=' + secret +  '&mfa=' + answer
	    + '&access_token=' + accessToken, {method: 'post'})
      .then(function(response) {
        var data = JSON.parse(response._bodyText);
        if (response.status === 201) {
          if (data.type === 'questions') {
            nav.push({name: 'BankMFAPage',
                      bank: bank,
                      question: data.mfa[0].question,
                      accessToken: data.access_token});
          }
        }
        if (response.status === 200) {
          console.log('bank sign in complete');

          //update store to show signed in

          nav.popToTop();
        } else if (!(response.status >= 200 && response.status < 300)){
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
        // AppDispatcher.handleViewAction({
        //   actionType: AppConstants.PLAID,
        //   data: data,
        // });
        //
        // if (data.type === 'questions') {
        //   nav.push({name: 'BankMFAPage',
        //             bank: BankActions.unabreviate(bank),
        //             question: data.mfa[0].question,
        //             accessToken: data.access_token});
        // }
      }).catch(function(error) {
        console.log('request failed', error)
      })
  },
  sendMethod: function(method, bank, accessToken, nav){
    fetch('https://tartan.plaid.com/connect/step?client_id='
	    + client_id + '&secret=' + secret
	    + '&access_token=' + accessToken
      + '&options={"send_method":{"type":"' + method.type + '"}}', {method: 'post'})
      .then(function(response) {
        var data = JSON.parse(response._bodyText);
        if (response.status === 201) {
          // if (data.type === 'questions') {
            nav.push({name: 'BankMFACodeEntryPage',
                      bank: bank,
                      method: method,
                      accessToken: accessToken});
          // }
          console.log('goog!')
        }
        else if (!(response.status >= 200 && response.status < 300)){
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
      }).catch(function(error) {
        console.log('request failed', error)
      })
  },
  unabreviate: function(bank){
    if (bank === 'amex') {
      return 'American Express';
    }
    else if (bank === 'bofa') {
      return 'Bank of America';
    }
    else if (bank === 'chase') {
      return 'Chase';
    }
    else if (bank === 'citi') {
      return 'Citi';
    }
    else if (bank === 'us') {
      return 'US Bank';
    }
    else {
      return 'Wells Fargo';
    }
  },
}

module.exports = BankActions;
