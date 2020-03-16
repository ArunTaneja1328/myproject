import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import ReactNavigation from 'react-navigation';
import SplashScreen from '../screens/Common/SplashScreen';
import WelcomeScreen from '../screens/Common/WelcomeScreen';
import DriverHomeScreen from '../screens/Driver/DriverHomeScreen';
import MerchantHomeScreen from '../screens/Merchant/MerchantHomeScreen';
import SideMenu from '../components/SideMenu';
import LoginScreen from '../screens/Common/LoginScreen';
import SignupScreen from '../screens/Common/SignupScreen';
import DriverProfile from '../screens/Driver/DriverProfile';
import MerchantProfile from '../screens/Merchant/MerchantProfile';
import OtpVerifyScreen from '../screens/Common/OtpVerifyScreen' 

// const DriverDrawerNavigator = createDrawerNavigator(
// 	{
// 		Home: { screen: DriverHomeScreen },
// 	},
// 	{
// 		contentComponent: SideMenu,
// 		drawerWidth: Dimensions.get('window').width * 0.75
// 	}
// )

// const MerchantDrawerNavigator = createDrawerNavigator(
// 	{
// 		HomeCoach: { screen: MerchantHomeScreen },
// 	},
// 	{
// 		contentComponent: SideMenu,
// 		drawerWidth: Dimensions.get('window').width * 0.75
// 	}
// )

const RootStack = createStackNavigator({
	SplashScreen: {
		screen: SplashScreen,
		navigationOptions: {
			header: null,
		},
	},
	WelcomeScreen: {
		screen: WelcomeScreen,
		navigationOptions: {
			header: null,
		},
	},
	LoginScreen: {
		screen: LoginScreen,
		navigationOptions: {
			header: null,
		},
	},
	SignupScreen: {
		screen: SignupScreen,
		navigationOptions: {
			header: null,
		},
	},
	OtpVerifyScreen: {
		screen: OtpVerifyScreen,
		navigationOptions: {
			header: null,
		},
	},
	DriverHomeScreen: {
		screen: DriverHomeScreen,
		navigationOptions: {
			header: null,
		},
	},
	MerchantHomeScreen: {
		screen: MerchantHomeScreen,
		navigationOptions: {
			header: null,
		},
	},
	DriverProfile: {
		screen: DriverProfile,
		navigationOptions: {
			header: null,
		},
	},
	MerchantProfile: {
		screen: MerchantProfile,
		navigationOptions: {
			header: null,
		},
	}
},

	{
		initialRouteName: "SplashScreen",
		transitionConfig: () => ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS
	}
);

export default createAppContainer(RootStack); 