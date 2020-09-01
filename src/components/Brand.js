import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Form from './../constants/CarForm'
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../commons/SearchBar';
const Brand = ({ counter }) => {
    const dispatch = useDispatch();
    return (
        <View style={{ backgroundColor: 'white' }}>
            <SearchBar />
            <FlatList
                data={Form[counter].menu}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={async () => {
                                await dispatch(allActions.tag.push(item.name));
                                await dispatch(allActions.counter.increment());
                            }}
                        >
                            <Image style={{ top: 8, left: 20, width: 28, height: 29 }} resizeMode="contain" source={require('../../assets/Images/Brands/notsure.png')} />
                            <Text style={styles.menu}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 20,
        left: 74,
        top: 13,
        fontSize: 17,
        textAlign: 'center',
    },
    touchStyle: {
        height: 44,
        backgroundColor: 'white',
        borderBottomWidth: .2,
        borderBottomColor: 'gray',
        flexDirection: 'row'
    }
});

export default Brand;