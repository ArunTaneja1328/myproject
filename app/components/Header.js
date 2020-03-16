import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import { strings } from '../../src/i18n'
import { styles } from '../config/styles.js';

export default class Header extends Component {

  state = {
    back: this.props.back ? this.props.back : false,
    drawer: this.props.drawer ? this.props.drawer : false,
    filter: this.props.filter ? this.props.filter : false,
    reset: this.props.reset ? this.props.reset : false,
    edit: this.props.edit ? this.props.edit : false,
    save: this.props.save ? this.props.save : false,
    add: this.props.add ? this.props.add : false,
    isOnline: this.props.isOnline ? this.props.isOnline : false,
    endChat: this.props.endChat ? this.props.endChat : false,
  }

  backPress = () => {
    if (this.props.backPress) {
      this.props.backPress()
    } else {
      this.props.navigation.dispatch(NavigationActions.back())
    }
  }

  drawerPress = () => {
    if (this.props.drawerPress) {
      this.props.drawerPress()
    }
  }

  filterPress = () => {
    if (this.props.filterPress) {
      this.props.filterPress()
    }
  }

  resetPress = () => {
    if (this.props.resetPress) {
      this.props.resetPress()
    }
  }

  editPress = () => {
    if (this.props.editPress) {
      this.props.editPress()
    }
  }

  savePress = () => {
    if (this.props.savePress) {
      this.props.savePress()
    }
  }

  addPress = () => {
    if (this.props.addPress) {
      this.props.addPress()
    }
  }

  endChatPress = () => {
    if (this.props.endChatPress) {
      this.props.endChatPress()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      back: nextProps.back ? nextProps.back : false,
      drawer: nextProps.drawer ? nextProps.drawer : false,
      filter: nextProps.filter ? nextProps.filter : false,
      reset: nextProps.reset ? nextProps.reset : false,
      edit: nextProps.edit ? nextProps.edit : false,
      save: nextProps.save ? nextProps.save : false,
      add: nextProps.add ? nextProps.add : false,
      isOnline: nextProps.isOnline ? nextProps.isOnline : false,
      endChat: nextProps.endChat ? nextProps.endChat : false,
    })
  }

  render() {
    return (
      <View style={styles.headerView}>
        <LinearGradient
          colors={[colors.linearStart, colors.linearEnd]}
          style={{ width: '100%', height: '100%', flexDirection: 'column', paddingTop: 28 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={[styles.text, { alignSelf: 'center', paddingTop: 15 }]}>{this.props.text ? this.props.text.toUpperCase() : 'enter text in props'}</Text>

          {this.state.back &&
            <TouchableOpacity
            style={{ position: 'absolute', left: 10, marginTop: 35, height:30, width: 30, justifyContent:'center', alignItems:'center'}}
            onPress={this.backPress}
            >
              <Image style={{ width: 16, height: 16 }}
                source={require('../assets/images/home/backarrow.png')}
              />
            </TouchableOpacity>
          }

          {this.state.drawer &&
            <TouchableOpacity
              style={{ position: 'absolute', left: 10, marginTop: 35, height:30, width: 30, justifyContent:'center', alignItems:'center'}}
              onPress={this.drawerPress}
            >
              <Image style={{ width: 16, height: 16 }}
                source={require('../assets/images/home/menu.png')}
              />
            </TouchableOpacity>
          }

          {this.state.filter &&
            <TouchableOpacity
            style={{ position: 'absolute', right: 10, marginTop: 35, height:30, width: 30, justifyContent:'center', alignItems:'center'}}
              onPress={this.filterPress}
            >
              <Image style={{ width: 16, height: 16 }}
                source={require('../assets/images/home/filter.png')}
              />
            </TouchableOpacity>
          }

          {this.state.reset &&
            <TouchableOpacity
            style={{ position: 'absolute', right: 15, paddingTop: 45 }}
              onPress={this.resetPress}
            >
              <Text style={styles.text}>{strings('HeaderBarButtons.reset')}</Text>
            </TouchableOpacity>
          }

          {this.state.edit &&
            <TouchableOpacity
            style={{ position: 'absolute', right: 15, paddingTop: 45 }}
              onPress={this.editPress}
            >
              <Text style={styles.text}>{strings('HeaderBarButtons.edit')}</Text>
            </TouchableOpacity>
          }
          {this.state.save &&
            <TouchableOpacity
              style={{ position: 'absolute', right: 15, paddingTop: 45 }}
              onPress={this.savePress}
            >
              <Text style={styles.text}>{strings('HeaderBarButtons.save')}</Text>
            </TouchableOpacity>
          }
          {this.state.add &&
            <TouchableOpacity
              style={{ position: 'absolute', right: 15, paddingTop: 45 }}
              onPress={this.addPress}
            >
              <Text style={styles.text}>{strings('HeaderBarButtons.add')}</Text>
            </TouchableOpacity>
          }
          {this.state.endChat &&
            <TouchableOpacity
              style={{ position: 'absolute', right: 15, paddingTop: 45 }}
              onPress={this.endChatPress}
            >
              <Text style={styles.text}>{strings('HeaderBarButtons.endChat')}</Text>
            </TouchableOpacity>
          }

        </LinearGradient>
      </View>
    )
  }
}
