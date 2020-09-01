import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Tag = ({ title }) => {
    return <Text style={styles.label}>{title}</Text>;
}

const styles = StyleSheet.create({
    label: {
        top: 52,
        fontSize: 17,
        textAlign: "center",
        color: "#000000",
        backgroundColor: "#FFFFFF",
        paddingLeft: 12,
        paddingRight: 13,
        borderWidth: .5,
        borderRadius: 4,
        paddingBottom: 2,
        borderColor: "#9384E3",
        marginRight: 16,
        height: 20

    }
});

export default Tag;