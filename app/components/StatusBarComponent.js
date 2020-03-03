import React, { Component } from 'react'
import { SafeAreaView, StatusBar,Platform ,StyleSheet} from 'react-native'
import colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';


export default class StatusBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient
          colors={[colors.linearStart, colors.linearEnd]}
          style={styles.statusBar}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
            <SafeAreaView style={styles.statusBar}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" {...this.props} />
            </SafeAreaView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS === 'ios' ? 40 : 0,
        backgroundColor: "transparent"
    },
  });
  