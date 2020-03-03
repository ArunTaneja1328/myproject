import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from '../config/colors.js';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "../config/styles.js";

const S = StyleSheet.create({
    container: { flexDirection: "row", height: 64 },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
    tabButtonText: { fontSize: 12, color: colors.white, fontFamily: "Roboto-Light" },
});



const BottomTabBar = props => {
    this.child = React.createRef();
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={S.container}>
            <LinearGradient
                colors={[colors.linearStart, colors.linearEnd]}
                style={{ width: '100%', height: '100%', flexDirection: "row" }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                {routes.map((route, routeIndex) => {
                    const isRouteActive = routeIndex === activeRouteIndex;
                    const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                    return (
                        <TouchableOpacity
                            key={routeIndex}
                            style={S.tabButton}
                            onPress={() => {
                                onTabPress({ route });
                            }}
                            onLongPress={() => {
                                onTabLongPress({ route });
                            }}
                            accessibilityLabel={getAccessibilityLabel({ route })}
                        >
                            {renderIcon({ route, focused: isRouteActive, tintColor })}

                            <Text style={[styles.bottomTabTitleText, { color: tintColor }]}>{getLabelText({ route })}</Text>
                        </TouchableOpacity>
                    );
                })}

            </LinearGradient>
        </View>
    );
};

export default BottomTabBar;