import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home-screen';
import ShowDetailsScreen from '../screens/show-details-screen';

const HomeStackNavigator = StackNavigator(
  {
    Main: { screen: HomeScreen },
    ShowDetails: { screen: ShowDetailsScreen },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default HomeStackNavigator;