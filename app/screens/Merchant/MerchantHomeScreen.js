import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import constants from '../../config/constants'


export default class MerchantHomeScreen extends Component {

	gotoScreen = (screenname, params) => {
		if (screenname == null) {
			const resetAction = StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
			})
			this.props.navigation.dispatch(resetAction)
		} else {
			const resetAction = StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: screenname, params })],
			})
			this.props.navigation.dispatch(resetAction)
		}
	}

	componentDidMount() {
		AsyncStorage.getItem(constants.firstLoginKey).then((value) => {
			if (value != null) {
				AsyncStorage.getItem(constants.authorization).then((alreadyLoggedIn) => {
					if (alreadyLoggedIn != null) {
						AsyncStorage.getItem(constants.userType).then((userType) => {
							if (userType == 2) {
								setTimeout(() => this.gotoScreen('OfferScreen', { shouldShowAd: true }), 2000)
							} else if (userType == 3) {
								setTimeout(() => this.gotoScreen('AvatarScreen', {}), 2000)
							}
						}).catch((error) => {
							this.setState({ loading: false })
						})
					} else {
						setTimeout(() => this.gotoScreen, 2000)
					}
				}).catch((error) => {
					this.setState({ loading: false })
				})
			} else {
				setTimeout(() => this.gotoScreen('ChooseUserScreen', {}), 2000)
			}
		}).catch((error) => {
			this.setState({ loading: false })
		})
	}

	render() {
		return (
			<ImageBackground
				style={styles.container}
				source={require('../../assets/images/splash/Splash_Screen.png')}
			>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});