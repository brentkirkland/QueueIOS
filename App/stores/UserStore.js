var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstants = require('../constants/AppConstants.js');


var CHANGE_EVENT = 'change';

var account = {};

function addBank(data){
  account.bank = data;
  UserStore.emitChange();
}

function cancelBank(){
  account = {};
  UserStore.emitChange();
}

function claim(objectId){
  console.log('objid', objectId);
  account = {objectId: objectId, time: (new Date()).getTime()}
  UserStore.emitChange();
}

function create(name, email, token, step){
  account.name = name;
  account.email = email;
  account.token = token;
  account.step = step;
}

var UserStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return account;
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
      case AppConstants.CREATE_ACCOUNT:
        create(payload.action.name, payload.action.email,
          payload.action.token, payload.action.step);
        break;
    }
    return true;
  })

});

module.exports = UserStore;
