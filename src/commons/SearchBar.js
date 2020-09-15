import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';
const SearchBar = () => {
    return (
        <View style={styles.search}>
            <Image style={{ top: 8, left: 12, width: 20, height: 20 }}
                resizeMode="contain"
                source={require('../../assets/Images/Overview/New.png')}
            />
            <TextInput style={{ left: 10,width:335 }} placeholder='Search'></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        top: 11,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#E3E3E8',
        width: 335,
        height: 36,
        marginBottom: 13

    }
});

export default SearchBar;
