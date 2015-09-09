var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstants = require('../constants/AppConstants.js');

var CHANGE_EVENT = 'change';

var bank = {};

function mfa(data){
  console.log('ddd', data)
  if (data.type === 'questions') {
    bank = {verified: false, mfa: data.mfa, type: data.type, access_token: data.access_token}
    BankStore.emitChange();
  }
}

var BankStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return bank;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: AppDispatcher.register(function(payload){
    switch(payload.action.actionType){
      case AppConstants.PLAID:
        mfa(payload.action.data);
        break;
    }
    return true;
  })

});

module.exports = BankStore;
