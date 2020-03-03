import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { strings } from '../../../src/i18n';
import { styles } from '../../config/styles.js';
import colors from '../../config/colors.js';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import constants from '../../config/constants';



export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props) 
  };

  goBackToLogin = () => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
    })
    this.props.navigation.dispatch(resetAction)
}

goToSignup = (type) => {
  AsyncStorage.setItem(constants.userType, type)
  this.props.navigation.navigate('SignupScreen', { signupType: parseInt(type) })
}

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ImageBackground resizeMode='stretch' style={[styles.imageContainer, { backgroundColor: '#fff' }]}
          source={require('../../assets/images/login/bgtop1.png')}>
        </ImageBackground>
        <View style={styles.centerContainer}>
          <Text style={styles.welcomeText}> {strings('WelcomeScreen.welcomeTitle')}
          </Text>
          <Text style={styles.welcomeSubText}> {strings('WelcomeScreen.welcomeSubTitle')}
          </Text>
        </View>
        <View style={styles.bottomContainerWelcome}>
          <Text style={styles.createAsText}> {strings('WelcomeScreen.createAs')}
          </Text>
          <TouchableOpacity style={styles.gradientContainer} onPress={() =>
            this.goToSignup("3")
          }>
            <LinearGradient
              colors={[colors.linearStart, colors.linearEnd]}
              style={styles.gradientView}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.text}>{strings('WelcomeScreen.coachee')}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.regularButton}
            onPress={() =>
              this.goToSignup("2")
            }
          >
            <Text style={styles.regularButtonText}>{strings('WelcomeScreen.coach')}</Text>
          </TouchableOpacity>
          <View style = {styles.bottom}>
          <TouchableOpacity
            onPress={() =>
              this.goBackToLogin()
            }
          >
            <Text style={styles.regularButtonText}>{strings('SignupScreen.haveAnExistingAccount')}</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}