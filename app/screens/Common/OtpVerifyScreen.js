import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { strings } from '../../../src/i18n';
import { styles } from '../../config/styles.js';
import colors from '../../config/colors.js';
import Header from '../../components/Header';
import Loader from '../../utility/Loader';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import constants from '../../config/constants';



export default class OtpVerifyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            phoneNumber: ''
        }
    };

    componentWillMount = () => {
        this.setState({
            phoneNumber: this.props.navigation.state.params.phoneNumber
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Loader loading={this.state.loading} />
                <Header text={strings('SignupScreen.signupTitle')} back='true' backPress={this.backPress} navigation={this.props.navigation} />
                
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.otpContainer}>
                    <Text style={styles.otpText}>OTP Verification</Text>
                    <Text>Enter the 4 digit code sent to you at {this.state.phoneNumber}</Text>
                    <OTPInputView
                        style={{ width: '80%', height: 100 }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                    <TouchableOpacity style={styles.gradientContainer} onPress={() =>
                        this.goToSignup()
                    }>
                        <LinearGradient
                            colors={[colors.linearStart, colors.linearEnd]}
                            style={styles.gradientView}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.text}>{strings('ChangePasswordScreen.submit')}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.gradientContainer, {marginTop: 20}]} onPress={() =>
                        this.goToSignup()
                    }>
                            <Text style={styles.regularButtonText}>{strings('ChangePasswordScreen.resendCode')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        );
    }
}