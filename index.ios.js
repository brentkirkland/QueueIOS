/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var AppNavigator = require('./App/components/AppNavigator.js');
var MainStore = require('./App/stores/MainStore.js');
var Parse = require('parse').Parse;
Parse.initialize("cRQxHQFx84ebmEN2sOic8e2cEDWDSKbi4kZHZ38i", "XpYVIvpt6Kuvs1luBjG0zFheMsr8mvi0NirxTvst");

var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var {
  AppRegistry,
} = React;

function getState(){
  return MainStore.getAll();
}

var QueueIOS = React.createClass({

  getInitialState: function(){
    return ({data: getState()});
  },
  componentDidMount: function() {
    MainStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    MainStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <AppNavigator data={this.state.data}/>
      );
  },
  _onChange: function() {
    getState();
  },
});
AppRegistry.registerComponent('QueueIOS', () => QueueIOS);
