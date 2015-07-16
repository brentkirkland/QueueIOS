var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var UserStore= require('./UserStore.js')

var CHANGE_EVENT = 'main';

data = {'user': undefined};

function gatherData(){
  data.user = UserStore.getAll();
  MainStore.emitChange();
}

var MainStore = assign({}, EventEmitter.prototype, {

  getAll: function(){
    return data;
  },
  emitChange: function() {
    console.log('hello');
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
    UserStore.addChangeListener(this._onChange);
  },
  removeChangeListener: function(callback) {
    console.log('hello mommmmmm');
    this.removeListener(CHANGE_EVENT, callback);
    UserStore.removeListener(this._onChange);
  },
  _onChange: function() {
    gatherData();
  },
})

module.exports = MainStore;
