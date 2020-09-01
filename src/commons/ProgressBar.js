import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Dimensions } from "react-native";
const ProgressBar = ({ percentage }) => {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const progressStyle = {
        top: 2,
        width: (percentage * screenWidth) / 100,
        height: 20
    }
    const bar = {
        height: 2,
        backgroundColor: '#8D58FF'
    }
    return (
        <View style={progressStyle}>
            <Text style={styles.percent}>{percentage} %</Text>
            <View style={bar} />
        </View>
    );
}
const styles = StyleSheet.create({
    percent: {
        alignSelf: 'flex-end',
        color: '#8555FF',
        fontSize: 12,
        width: 22,
        height: 14
    }
});
export default ProgressBar;