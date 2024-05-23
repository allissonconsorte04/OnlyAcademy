/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Profile from './src/pages/profile/Profile';
import {SafeAreaView} from 'react-native';
import Camera from './src/pages/camera/Camera';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Camera /> */}
      <Profile />
    </SafeAreaView>
  );
}

export default App;
