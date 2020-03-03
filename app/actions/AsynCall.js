import React from 'react'
import { Alert } from 'react-native' 
import constants from '../config/constants'
import AsyncStorage from '@react-native-community/async-storage'
import ApiActionNames from '../actions/ApiActionNames.js';
import { NavigationActions, StackActions } from 'react-navigation';
import { strings } from '../../src/i18n';
import firebase from 'react-native-firebase';

export default class AsynCall {

  static async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch (exception) {
      return false;
    }
  }

  static logoutSucceed = (navigation) => {
    firebase.notifications().removeAllDeliveredNotifications()
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
    navigation.dispatch(resetAction)
  }

  static fetchCall(apiName, method, request, authToken, navigation) {
    return fetch(constants.baseUrl + apiName, {
      method: method,
      body: JSON.stringify(request),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : authToken,
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.code === 912 && apiName != ApiActionNames.LOGIN && apiName != ApiActionNames.FORGOT_PASSWORD && 
        apiName != ApiActionNames.REGISTER) {
        this.logoutSucceed(navigation)
        setTimeout(() => {
        Alert.alert(
          strings('Utility.appName'),
          strings('APIMessages.accountInactive'),
        )
        }, 100);
      }else if(responseJson.message === 'Unauthenticated.') {
        this.logoutSucceed(navigation)
        setTimeout(() => {
        Alert.alert(
          strings('Utility.appName'),
          strings('APIMessages.accountDeleted'),
        )
        }, 100);
      }
        else{
        return responseJson;
      }
    }) 
    .catch((error) => {
      if(apiName != ApiActionNames.GET_MESSAGES) {
        Alert.alert(
          strings('Utility.appName'),
          strings('APIMessages.somethingWentWrong'),
        ) 
      throw (error)
        }
    },
    )
  }
}
