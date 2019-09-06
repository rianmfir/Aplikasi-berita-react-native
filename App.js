import React from 'react';
import { } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';

import HomeBerita from './screens/HomeBerita';
import DetailBerita from './screens/DetailBerita';

const AppNavigator = createStackNavigator(
  {
    HomeBerita: HomeBerita,
    DetailBerita: DetailBerita,
  },
  {
    initialRouteName: 'HomeBerita',
  }
);

export default createAppContainer(AppNavigator);