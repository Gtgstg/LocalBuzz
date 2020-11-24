import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Tag = ({ title,top }) => {
    const label= {
        top: (top)?23:52,
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
        height: 24

    }
    return <Text style={label}>{title}</Text>;
}

export default Tag;