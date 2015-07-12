/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FrontPage = require('./App/components/FrontPage.js')
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS,
} = React;

var QueueIOS = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.nav}
        titleTextColor={'#fff'}
        barTintColor={'#001D39'}
        translucent={false}
        shadowHidden={true}
        initialRoute={{
          component: FrontPage,
          title:'Queue',
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  nav: {
    flex: 1,
  },
});

AppRegistry.registerComponent('QueueIOS', () => QueueIOS);
