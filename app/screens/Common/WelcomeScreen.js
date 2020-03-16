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

  goToLogin = () => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
    })
    this.props.navigation.dispatch(resetAction)
}

goToSignup = () => {
  this.props.navigation.navigate('SignupScreen')
}

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ImageBackground resizeMode='stretch' style={[styles.imageContainer, { backgroundColor: '#fff' }]}
          source={require('../../assets/images/splash/bgtop.png')}>
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
            this.goToLogin()
          }>
            <LinearGradient
              colors={[colors.linearStart, colors.linearEnd]}
              style={styles.gradientView}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.text}>{strings('WelcomeScreen.login')}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.regularButton}
            onPress={() =>
              this.goToSignup()
            }
          >
            <Text style={styles.regularButtonText}>{strings('WelcomeScreen.signup')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}