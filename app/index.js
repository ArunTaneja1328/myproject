import React, { Component } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Routes from '.route/routes'

export default class Index extends Component<Props> {

  state = {
    isLoading: this.props.isLoading ? this.props.isLoading : false,
  }    
  render() {
    return (
      <View style={styles.container}> 
        <Routes />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
