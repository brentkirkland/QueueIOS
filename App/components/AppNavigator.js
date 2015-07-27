/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FrontPage = require('./FrontPage.js');
var PlacePage = require('./PlacePage.js');
var SignUpPage = require('./SignUpPage.js')

var {
  StyleSheet,
  Navigator,
  StatusBarIOS,
} = React;

var AppNavigator = React.createClass({

  _renderScene: function(route, nav) {
    switch (route.name) {
      case 'PlacePage':
        return <PlacePage navigator={nav}
                merchant={route.passProps.merchant}
                percentage={route.passProps.percentage}
                data={this.props.data}/>
      case 'SignUpPage':
          return <SignUpPage navigator={nav}
                  onBack={() => { console.log('pop called'); nav.pop(); }}/>
      default:
        return (
          <FrontPage navigator={nav}
          data={this.props.data}/>
        );
    }
  },
  render: function() {
    return (
      <Navigator
        style={styles.nav}
        initialRoute={{
          name: 'FrontPage',
        }}
        renderScene={this._renderScene}
        configureScene={(route) => {return Navigator.SceneConfigs.FloatFromBottom; }}
      />
    );
  },
});

var styles = StyleSheet.create({
  nav: {
    flex: 1,
    backgroundColor: '#9AC1BF',
  },
});

module.exports = AppNavigator;
