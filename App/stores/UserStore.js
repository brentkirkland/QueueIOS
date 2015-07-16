var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstants = require('../constants/AppConstants.js');


var CHANGE_EVENT = 'change';

var loginData = {};

function addBank(data){
  loginData.bank = data;
  UserStore.emitChange();
}

function cancelBank(){
  loginData = {};
  UserStore.emitChange();
}

var UserStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return loginData;
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
      case AppConstants.SELECT_BANK:
        addBank(payload.action.bank);
        break;
      case AppConstants.CANCEL_BANK:
        cancelBank();
        break;
    }
    return true;
  })

});

module.exports = UserStore;
