var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var UserStore= require('./UserStore.js')

var CHANGE_EVENT = 'main';

data = {};

function gatherData(){
  data.account = UserStore.getAll();
  MainStore.emitChange();
}

var MainStore = assign({}, EventEmitter.prototype, {

  getAll: function(){
    return data;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
    UserStore.addChangeListener(this._onChange);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
    UserStore.removeListener(this._onChange);
  },
  _onChange: function() {
    gatherData();
  },
})

module.exports = MainStore;
