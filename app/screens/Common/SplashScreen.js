import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import constants from '../../config/constants'
import firebase from 'react-native-firebase';


export default class SplashScreen extends Component {

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
		firebase.notifications().getInitialNotification()
			.then((notificationOpen: NotificationOpen) => {
				if (notificationOpen) {
					// App was opened by a notification
					// Get the action triggered by the notification being opened
					const action = notificationOpen.action;
					// // Get information about the notification that was opened
					const notification: Notification = notificationOpen.notification;
					console.log("notification data ()()()", notification.data)
					if (parseInt(notification.data.type) === 1) {
						AsyncStorage.setItem(constants.accreditationStatus, notification.data.typeid)
					}
					// It will be triggered when you tapped onto the notification, write the code below what you want to do for all the types of notifications
					var typeOfNotification;
					typeOfNotification = parseInt(notification.data.type);

					if (typeOfNotification === 1 || typeOfNotification === 2 || typeOfNotification === 3 || typeOfNotification === 4 || typeOfNotification === 7 || typeOfNotification === 9) {
						setTimeout(() => this.gotoScreen('OfferScreen', {shouldShowAd: true}), 2000)
					} else if (typeOfNotification === 6 || typeOfNotification === 8) {
						setTimeout(() => this.gotoScreen('SeekCoachScreen',
                        {
                            shouldShowAd: true
                        }), 2000)
					} else {
					}
					firebase.notifications().removeDeliveredNotification(notification.notificationId);
				} else {
					AsyncStorage.getItem(constants.firstLoginKey).then((value) => {
						if (value != null) {
							AsyncStorage.getItem(constants.authorization).then((alreadyLoggedIn) => {
								if (alreadyLoggedIn != null) {
									AsyncStorage.getItem(constants.userType).then((userType) => {
										if (userType == 2) {
											setTimeout(() => this.gotoScreen('OfferScreen', {shouldShowAd: true}), 2000)
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
			});
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