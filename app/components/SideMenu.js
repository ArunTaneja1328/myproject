import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { styles } from '../config/styles.js';
import { NavigationActions, StackActions } from 'react-navigation';
import { Text, View, Image, Alert, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../config/colors';
import { strings } from '../../src/i18n';
import AsyncStorage from '@react-native-community/async-storage'
import constants from '../config/constants.js';
import ApiActionNames from '../actions/ApiActionNames.js';
import AsyncCall from '../actions/AsynCall';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loader from '../utility/Loader.js';
import moment from 'moment';

class SideMenu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userName: '',
			userPic: '',
			userType: '',
			accreditationStatus: 0,
			accreditationStatusText: '',
			loading: false,
			subscriptionStatus: "false",
			subscriptionEndDate: '',
			subscriptionId: '',
			rating: "N/A",
			totalReviews: '',
		}
	};

	navigateToScreen = (route) => () => {
		// this.props.navigation.toggleDrawer();
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	}

	componentWillMount = () => {
		// Name
		AsyncStorage.getItem(constants.name).then((name) => {
			if (name) {
				this.setState({
					userName: name
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		//Coachee or Coach
		AsyncStorage.getItem(constants.userType).then((role) => {
			if (role) {
				this.setState({
					userType: role
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		//Profile Picture
		AsyncStorage.getItem(constants.picture).then((profilePic) => {
			if (profilePic) {
				this.setState({
					userPic: profilePic
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		// Accreditation Status
		AsyncStorage.getItem(constants.accreditationStatus).then((acc) => {
			if (acc) {
				var status = ""
				if (acc == 0) {
					status = strings('AccreditationScreen.notAvailable')
				} else if (acc == 1) {
					status = strings('AccreditationScreen.pending')
				} else if (acc == 2) {
					status = strings('AccreditationScreen.approved')
				} else if (acc == 3) {
					status = strings('AccreditationScreen.disapproved')
				}
				this.setState({
					accreditationStatus: acc,
					accreditationStatusText: status
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		// Subscribed or Not
		AsyncStorage.getItem(constants.subscriptionStatus).then((sub) => {
			if (sub) {
				this.setState({
					subscriptionStatus: sub
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		// Subscription End Date
		AsyncStorage.getItem(constants.subscriptionEndDate).then((subDate) => {
			if (subDate) {
				this.setState({
					subscriptionEndDate: subDate
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		// Subscription Type
		AsyncStorage.getItem(constants.subscriptionId).then((subId) => {
			if (subId) {
				this.setState({
					subscriptionId: subId
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		//Rating
		AsyncStorage.getItem(constants.rating).then((rating) => {
			if (rating) {
				this.setState({
					rating: rating
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		//Rating
		AsyncStorage.getItem(constants.totalReviews).then((total) => {
			if (total) {
				this.setState({
					totalReviews: total
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})
	}

	componentDidUpdate() {
		AsyncStorage.getItem(constants.name).then((name) => {
			if (name !== this.state.userName) {
				this.setState({
					userName: name
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})
		AsyncStorage.getItem(constants.picture).then((profilePic) => {
			if (profilePic !== this.state.userPic) {
				this.setState({
					userPic: profilePic
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		AsyncStorage.getItem(constants.subscriptionStatus).then((sub) => {
			if (sub != this.state.subscriptionStatus) {
				this.setState({
					subscriptionStatus: sub
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		AsyncStorage.getItem(constants.subscriptionEndDate).then((sub) => {
			if (sub !== this.state.subscriptionEndDate) {
				this.setState({
					subscriptionEndDate: sub
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		// Subscription Type
		AsyncStorage.getItem(constants.subscriptionId).then((subId) => {
			if (subId !== this.state.subscriptionId) {
				this.setState({
					subscriptionId: subId
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		AsyncStorage.getItem(constants.accreditationStatus).then((acc) => {
			if (acc !== this.state.accreditationStatus) {
				var status = ""
				if (acc == 0) {
					status = strings('AccreditationScreen.notAvailable')
				} else if (acc == 1) {
					status = strings('AccreditationScreen.pending')
				} else if (acc == 2) {
					status = strings('AccreditationScreen.approved')
				} else if (acc == 3) {
					status = strings('AccreditationScreen.disapproved')
				}
				this.setState({
					accreditationStatus: acc,
					accreditationStatusText: status
				})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})

		// //Rating
		// AsyncStorage.getItem(constants.rating).then((rating) => {
		//   if (rating !== this.state.rating) {
		//     this.setState({
		//       rating: rating
		//     })
		//   }
		// })
		//   .catch((error) => {
		//     this.setState({ loading: false })
		//   })

		//   //Rating
		// AsyncStorage.getItem(constants.totalReviews).then((reviews) => {
		//   if (reviews !== this.state.totalReviews) {
		//     this.setState({
		//       totalReviews: reviews
		//     })
		//   }
		// })
		//   .catch((error) => {
		//     this.setState({ loading: false })
		//   })
	}

	checkIfDisapproved = () => {
		if (this.state.accreditationStatusText == strings('AccreditationScreen.disapproved')) {
			const navigateAction = NavigationActions.navigate({
				routeName: "DisapprovalReasonScreen"
			});
			this.props.navigation.dispatch(navigateAction);
		}
	}

	async removeItemValue(key) {
		try {
			await AsyncStorage.removeItem(key);
			return true;
		}
		catch (exception) {
			return false;
		}
	}

	askForConfirmation = () => {
		Alert.alert(
			strings('Utility.appName'),
			strings('Confirmation.logoutConfirm'),
			[
				{
					text: strings('AccreditationScreen.yes'),
					onPress: () => this.logoutRequest(),

				},
				{
					text: strings('ForgotScreen.cancel'), onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
			],
			{ cancelable: false },
		);
	}

	logoutSucceed = () => {
		this.removeItemValue(constants.authorization)
		this.removeItemValue(constants.userType)
		this.removeItemValue(constants.firstLoginKey)
		this.removeItemValue(constants.picture)
		this.removeItemValue(constants.name)
		this.removeItemValue(constants.accreditationStatus)
		this.removeItemValue(constants.subscriptionStatus)
		this.removeItemValue(constants.subscriptionEndDate)
		this.removeItemValue(constants.subscriptionId)
		this.removeItemValue(constants.rating)
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
		})
		this.props.navigation.dispatch(resetAction)
	}

	logoutRequest = () => {
		this.setState({ loading: true })
		const logoutRequest = {
		}
		AsyncStorage.getItem(constants.authorization).then((token) => {
			if (token) {
				AsyncCall.fetchCall(ApiActionNames.LOGOUT, constants.post, logoutRequest, token, this.props.navigation)
					.then((res) => {
						this.setState({ loading: false })
						if (res.success == true) {
							this.logoutSucceed()
						} else {
							Alert.alert(
								strings('Utility.appName'),
								strings('APIMessages.somethingWentWrong'),
							)
						}

					})
					.catch((error) => {
					})
			}
		})
			.catch((error) => {
				this.setState({ loading: false })
			})
	}

	render() {
		var ratingString = "N/A"
		if (this.state.rating == "N/A") {

		} else {
			ratingString = this.state.rating + ' ' + strings('Misc.star') + '/(5)' + ' ' + this.state.totalReviews + ' ' + strings('Misc.rated')
		}
		return (
			<View style={styles.container}>
				<Loader loading={this.state.loading} />
				<View style={styles.drawerHeaderView}>
					<LinearGradient
						colors={[colors.linearStart, colors.linearEnd]}
						style={{ width: '100%', height: '100%', flexDirection: 'row', paddingTop: 30, alignItems: 'center' }}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<Image style={styles.profileImageDrawer} source={this.state.userPic == "" || this.state.userPic == null ? require('../assets/images/home/profilePic.png') : { uri: this.state.userPic + '' }} />
						{this.state.userType == 2 ?
							<View style={{ flexDirection: 'column' }}>
								<Text style={[styles.drawerHeaderText]}> {this.state.userName} </Text>
								<Text style={[styles.robotoRegular10]}> {strings('Misc.ratingSideBar')} {ratingString} </Text>
							</View>
							:
							<View style={{ flexDirection: 'column' }}><Text style={styles.drawerHeaderText}> {this.state.userName} </Text></View>
						}
					</LinearGradient>
				</View>
				{this.state.userType == 2 ?
					<View style={[styles.drawerStatusView, { backgroundColor: colors.veryLightGrey }]}>
						<TouchableOpacity onPress={this.checkIfDisapproved}>
							<Text style={[styles.drawerItemText, { marginLeft: '10%', marginTop: 10, marginBottom: 10 }]}> {strings('Misc.statusSideBar')} {this.state.accreditationStatusText} </Text>
						</TouchableOpacity>
					</View>
					:
					<View>
					</View>
				}
				<View style={styles.drawerItemView}>
					<TouchableOpacity onPress={this.state.userType == 2 ? this.navigateToScreen('CoachProfile') : this.navigateToScreen('Profile')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
						<Image style={styles.drawerIcon} source={require('../assets/images/drawer/profile.png')} />
						<Text style={styles.drawerItemText} > {strings('Drawer.profile')} </Text>
					</TouchableOpacity>
				</View>
				{this.state.userType == 2 ?
					<View style={styles.drawerItemView}>
						{this.state.subscriptionStatus === "true" && this.state.subscriptionId != "2" ?
							<TouchableOpacity onPress={this.navigateToScreen('SubscriptionPlansScreen')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
								<Image style={styles.drawerIcon} source={require('../assets/images/drawer/vouchers.png')} />
								<Text style={styles.drawerItemText}> {strings('Drawer.subscriptionEndsOn')}{moment(this.state.subscriptionEndDate, "YYYY-MM-DD").format("DD.MM.YYYY")}</Text>
							</TouchableOpacity>
							: this.state.subscriptionStatus === "true" && this.state.subscriptionId === "2" ?
								<TouchableOpacity onPress={this.navigateToScreen('SubscriptionPlansScreen')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
									<Image style={styles.drawerIcon} source={require('../assets/images/drawer/vouchers.png')} />
									<Text style={styles.drawerItemText}> {strings('Drawer.subscriptionEndsOn')}{moment(this.state.subscriptionEndDate, "YYYY-MM-DD").format("DD.MM.YYYY")}</Text>
								</TouchableOpacity>
								:
								<TouchableOpacity onPress={this.navigateToScreen('SubscriptionPlansScreen')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
									<Image style={styles.drawerIcon} source={require('../assets/images/drawer/vouchers.png')} />
									<Text style={styles.drawerItemText}> {strings('Drawer.buySubscription')} </Text>
								</TouchableOpacity>
						}
					</View>
					:
					<View>
						<View style={styles.drawerItemView}>
							<TouchableOpacity onPress={this.navigateToScreen('AccountManagement')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
								<Image style={styles.drawerIcon} source={require('../assets/images/drawer/account.png')} />
								<Text style={styles.drawerItemText} > {strings('Drawer.accountManagement')} </Text>
							</TouchableOpacity>
						</View>
						<View style={styles.drawerItemView}>
							<TouchableOpacity onPress={this.navigateToScreen('VoucherManagement')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
								<Image style={styles.drawerIcon} source={require('../assets/images/drawer/vouchers.png')} />
								<Text style={styles.drawerItemText} > {strings('Drawer.voucherManagement')} </Text>
							</TouchableOpacity>
						</View>
					</View>
				}

				<View style={styles.drawerItemView}>
					<TouchableOpacity onPress={this.navigateToScreen('Settings')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
						<Image style={styles.drawerIcon} source={require('../assets/images/drawer/settings.png')} />
						<Text style={styles.drawerItemText} > {strings('Drawer.settings')} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.drawerItemView}>
					<TouchableOpacity onPress={this.navigateToScreen('AGBScreen')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
						<Image style={styles.drawerIcon} source={require('../assets/images/drawer/agb.png')} />
						<Text style={styles.drawerItemText} > {strings('SignupScreen.agb')} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.drawerItemView}>
					<TouchableOpacity onPress={this.navigateToScreen('PrivacyPolicyScreen')} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
						<Image style={styles.drawerIcon} source={require('../assets/images/drawer/agb.png')} />
						<Text style={styles.drawerItemText} > {strings('SignupScreen.privacyPolicySideBar')} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.drawerItemView}>
					<TouchableOpacity onPress={this.askForConfirmation} style={{ width: Dimensions.get('window').width * 0.75, height: 25, flexDirection: 'row', alignItems: 'center' }}>
						<Image style={styles.drawerIcon} source={require('../assets/images/drawer/logout.png')} />
						<Text style={styles.drawerItemText}> {strings('Drawer.logout')} </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

SideMenu.propTypes = {
	navigation: PropTypes.object
};

export default SideMenu;
