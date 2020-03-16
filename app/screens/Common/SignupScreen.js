import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, NativeModules } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Form, Item, Input, Label } from 'native-base';
import { styles } from '../../config/styles.js';
import { strings } from '../../../src/i18n.js';
import StatusBarComponent from '../../components/StatusBarComponent.js';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-community/async-storage';
import constants from '../../config/constants'
import Loader from '../../utility/Loader';
import CheckBox from 'react-native-check-box';
import colors from '../../config/colors.js';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-button';
import ApiActionNames from '../../actions/ApiActionNames.js';
import AsyncCall from '../../actions/AsynCall.js';


export default class SignupScreen extends Component {
	constructor(props) {
        super(props)

        this.state = {
            businessName: '',
            userName: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            isAGBAccepted: 1,
            loading: false,
            signupType: 1,
        }
	};
	
	backPress = () => {
        this.props.navigation.goBack()
    }
    
    goToOtp = () => {
        this.props.navigation.navigate('OtpVerifyScreen', {phoneNumber: this.state.phoneNumber})
    }
	
	registerRequest = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,22})+$/
        const { businessName, email, confirmEmail, password, confirmPassword, userName, lastName, phoneNumber, isAGBAccepted } = this.state
        if ((businessName.trim().length === 0 && this.state.signupType == 1) && email.trim().length === 0 && confirmEmail.trim().length === 0 && password.trim().length === 0 && confirmPassword.trim().length === 0 && userName.trim().length === 0
        	&& phoneNumber.trim().length === 0 && !isAGBAccepted) {
            Alert.alert('', strings('Error.allFieldsMandatory'))
        } else if (businessName.trim().length === 0 && this.state.signupType == 1) {
            Alert.alert('', strings('Error.pseudonymEmpty'))
        } else if (email.trim().length === 0) {
            Alert.alert('', strings('Error.emailAddressEmpty'))
        } else if (confirmEmail.trim().length === 0) {
            Alert.alert('', strings('Error.confirmEmailEmpty'))
        } else if (password.trim().length === 0) {
            Alert.alert('', strings('Error.passwordEmpty'))
        } else if (confirmPassword.trim().length === 0) {
            Alert.alert('', strings('Error.confirmPasswordEmpty'))
        } else if (userName.trim().length === 0) {
            Alert.alert('', strings('Error.firstNameEmpty'))
        } else if (phoneNumber.trim().length === 0) {
            Alert.alert('', strings('Error.placeEmpty'))
        } else if (!isAGBAccepted) {
            Alert.alert('', strings('Error.agbNotAgreed'))
        } else if (reg.test(email) === false) {
            Alert.alert('', strings('Error.emailFormatInvalid'))
        } else if (email != confirmEmail) {
            Alert.alert('', strings('Error.confirmEmailMismatch'))
        } else if (password != confirmPassword) {
            Alert.alert('', strings('Error.confirmPasswordMismatch'))
        } else if (password.trim().length < 6 || password.trim().length > 20 || /[a-zA-Z]/.test(password) === false || /[0-9]/.test(password) === false || /[!@#$%^&*()_+.-=~`€]/.test(password) === false) {
            Alert.alert('', strings('Error.passwordRules'))
        }
        else {
            this.setState({ loading: true })
            const registerRequest = {
                business_name: businessName,
                email: email,
                password: password,
                name: userName,
                mobile_number: phoneNumber,
                agb_status: isAGBAccepted,
                role: this.props.navigation.state.params.signupType,
                otp: "1234"
            }
            AsyncCall.fetchCall(ApiActionNames.REGISTER, constants.post, registerRequest, "", this.props.navigation)
                .then((res) => {
					this.setState({ loading: false })
					console.warn(res)
                    if (res.success == true) {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'SuccessScreen', params: { successMessage: strings('SignupScreen.verifyLinkSent') } })],
                        })
                        this.props.navigation.dispatch(resetAction)
                    } else if (res.code === 915) {
                        AlertDialog.AlertFunction(strings('Utility.appName'),
                            strings('APIMessages.emailAlreadyTaken'))
                    } else if (res.code == "HY000") {
                        AlertDialog.AlertFunction(strings('Utility.appName'),
                            strings('APIMessages.invalidDataEntry'))
                    } else {
                        AlertDialog.AlertFunction(strings('Utility.appName'),
                            strings('APIMessages.somethingWentWrong'))
                    }

                })
                .catch((error) => {
                    this.setState({ loading: false })
                })
        }
    }

	render() {
		var type_props = [
            { label: strings('SignupScreen.user'), value: '1' },
            { label: strings('SignupScreen.driver'), value: '2' },
        ];
		return (
			<View style={styles.container}>
                <StatusBarComponent />
                <Loader loading={this.state.loading} />
                <Header text={strings('SignupScreen.signupTitle')} back='true' backPress={this.backPress} navigation={this.props.navigation} />
                <ScrollView contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps="handled">
                    <Form>
						<Label style={styles.radio}>{strings('SignupScreen.signupAs')}</Label>
                        <RadioForm style={styles.radio}
                            radio_props={type_props}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            buttonColor={colors.darkGrey}
                            labelColor={colors.darkGrey}
                            buttonInnerColor={colors.darkGrey}
                            selectedButtonColor={colors.darkGrey}
                            animation={false}
                            buttonSize={12}
                            labelStyle={styles.radioLabelText}
                            onPress={(value) => { this.setState({ signupType: value }) }}
                        />
                        {this.state.signupType == 1 ?
                            <Item floatingLabel style={styles.floatingLabel}>
                                <Label style={styles.regularButtonText}>{strings('SignupScreen.businessName')}</Label>
                                <Input style={styles.inputText}
                                    keyboardType='visible-password'
                                    contextMenuHidden={true}
                                    onChangeText={text => this.setState({ businessName: text })} />
                            </Item>
                            :
                            <View>
                            </View>
                        }
                        <Item floatingLabel style={styles.floatingLabel}>
                            <Label style={styles.regularButtonText}>{strings('SignupScreen.userName')}</Label>
                            <Input style={styles.inputText}
                                keyboardType='visible-password'
                                contextMenuHidden={true}
                                onChangeText={text => this.setState({ userName: text })} />
                        </Item>
                        <Item floatingLabel style={styles.floatingLabel}>
                            <Label style={styles.regularButtonText}>{strings('SignupScreen.email')}</Label>
                            <Input style={styles.inputText}
                                keyboardType='visible-password'
                                contextMenuHidden={true}
                                autoCapitalize='none'
                                onChangeText={text => this.setState({ email: text })} />
                        </Item>
                        <Item floatingLabel style={styles.floatingLabel}>
                            <Label style={styles.regularButtonText}>{strings('SignupScreen.confirmEmail')}</Label>
                            <Input style={styles.inputText}
                                keyboardType='visible-password'
                                contextMenuHidden={true}
                                autoCapitalize='none'
                                onChangeText={text => this.setState({ confirmEmail: text })} />
                        </Item>
                        <Item floatingLabel style={styles.floatingLabel}>
                            <Label style={styles.regularButtonText}>{strings('SignupScreen.phoneNumber')}</Label>
                            <Input style={styles.inputText}
                                keyboardType='visible-password'
                                contextMenuHidden={true}
                                onChangeText={text => this.setState({ phoneNumber: text })} />
                        </Item>
                        <Item floatingLabel style={styles.floatingLabel}>
                            <Label style={styles.regularButtonText}>{strings('SignupScreen.password')}</Label>
                            <Input style={styles.inputText} secureTextEntry={true}
                                autoCapitalize='none'
                                contextMenuHidden={true}
                                onChangeText={text => this.setState({ password: text })} />
                        </Item>
                        <Item floatingLabel style={styles.floatingLabel}>
                            <Label style={styles.regularButtonText}>{strings('SignupScreen.confirmPassword')}</Label>
                            <Input style={styles.inputText} secureTextEntry={true}
                                autoCapitalize='none'
                                contextMenuHidden={true}
                                onChangeText={text => this.setState({ confirmPassword: text })} />
                        </Item>
                        <View style={styles.horizontalView}>
                            <CheckBox
                                style={styles.checkbox}
                                onClick={() => {
                                    this.setState({
                                        isAGBAccepted: !this.state.isAGBAccepted,
                                    })
                                }}
                                isChecked={this.state.isAGBAccepted}
                                rightText={strings('SignupScreen.iaccept')}
                                checkBoxColor={colors.darkGrey}
                            />
                        </View>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('AGBScreen')
                        }>
                            <Text style={[styles.agbText, { fontSize: 13, paddingLeft: '18%' }]}>{strings('SignupScreen.agb')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('PrivacyPolicyScreen')
                        }>
                            <Text style={[styles.agbText, { fontSize: 13, paddingLeft: '18%' }]}>& {strings('SignupScreen.privacyPolicy')}</Text>
                        </TouchableOpacity>
                    </Form>
                    <TouchableOpacity onPress={this.goToOtp}>
                        <LinearGradient
                            colors={[colors.linearStart, colors.linearEnd]}
                            style={styles.gradientView}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.text}>{strings('SignupScreen.signup')}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View>
		);
	}
}