import React, { Component } from 'react'
import {
    ActivityIndicator,
    Modal,
    StyleSheet,
    View,
} from 'react-native'
import colors from '../config/colors'

const Loader = props => {
  const {
        loading,
    } = props

  return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => { console.log('close modal') }}
      >
        <View style={styles.modalBackground}>
            <ActivityIndicator
                animating={loading}
                color={colors.primaryColor}
                size='large' 
            />
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})

export default Loader
