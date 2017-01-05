import Exponent from 'exponent';
import React from 'react';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  Ionicons,
} from '@exponent/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./screens/img/bob.png'),
          require('./screens/img/cookiemonster.jpeg'),
          require('./screens/img/elmo.jpg'),
          require('./screens/img/me.png'),
          require('./screens/img/1.jpg'),
          require('./screens/img/2.jpg'),
          require('./screens/img/3.jpg'),
          require('./screens/img/4.jpg'),
          require('./screens/img/5.jpg'),
        ],
        fonts: [
            Ionicons.font,
        ]
      });
    } catch(e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
        return (
            <View style={styles.container}>
              <NavigationProvider router={Router}>
                <StackNavigation id="root" initialRoute={Router.getRoute('rootNavigation')} />
              </NavigationProvider>

                {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
                {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            </View>
        );
    } else {
      return (
        <Exponent.Components.AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Exponent.registerRootComponent(AppContainer);
