import React from 'react'
import { Alert } from 'react-native'

export default class AlertDialog {
    static AlertFunction(title,message) {
        setTimeout(() => {
            Alert.alert(
                title,
                message
            )
          }, 100);
    }
}