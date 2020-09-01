import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
const Title = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
        // <LinearTextGradient 
        // style={styles.title}
        // locations={[0, 1]}
        // colors={["#8D58FF", "5A40FF"]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 0 }}
        // >
        //     {title}
        // </LinearTextGradient>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#8D58FF',
        left: 20,
        fontSize: 35,
        height: 42,
        fontWeight: 'bold'
    }
});

export default Title;