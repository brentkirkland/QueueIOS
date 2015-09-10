/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var FrontPage = require('./FrontPage.js');
var PlacePage = require('./PlacePage.js');
var SignUpPage = require('./SignUpPage.js');
var BankSelectPage = require('./BankSelectPage.js');
var BankLoginPage = require('./BankLoginPage.js');
var BankMFAPage = require('./BankMFAPage.js');
var BankMFACodeSelectPage = require('./BankMFACodeSelectPage.js');
var BankMFACodeEntryPage = require('./BankMFACodeEntryPage.js');

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
                  onBack={() => { nav.pop(); }}
                  data={this.props.data}/>
      case 'BankSelectPage':
          return <BankSelectPage navigator={nav}
                  onBack={() => {nav.popToTop()}}/>
      case 'BankLoginPage':
          return <BankLoginPage navigator={nav}
                  bank={route.bank}
                  onBack={() => { nav.pop(); }}/>
      case 'BankMFAPage':
          return <BankMFAPage navigator={nav}
                  bank={route.bank}
                  onBack={() => { nav.pop(); }}
                  question={route.question}
                  accessToken={route.accessToken}/>
      case 'BankMFACodeSelectPage':
          return <BankMFACodeSelectPage navigator={nav}
                  bank={route.bank}
                  onBack={() => { nav.pop(); }}
                  list={route.list}
                  accessToken={route.accessToken}/>
                case 'BankMFACodeEntryPage':
          return <BankMFACodeEntryPage navigator={nav}
                  bank={route.bank}
                  onBack={() => { nav.pop(); }}
                  method={route.method}
                  accessToken={route.accessToken}/>
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
    backgroundColor: '#fbfbfb',
  },
});

module.exports = AppNavigator;
