import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Form from './../constants/CarForm'
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../commons/SearchBar';
const Find = ({ counter, search }) => {
    const dispatch = useDispatch();
    // const [touchStyle,setTouchStyle] =useState({
    //     backgroundColor:'white',
    //     borderBottomWidth:.2,
    //     borderBottomColor: 'gray',
    // });
    const searchBar = () => {
        if (search === true) {
            return (
                <SearchBar />
            );
        }
    }
    return (
        <View>
            {searchBar()}
            <FlatList
                data={Form[counter].menu}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={async () => {
                                // setTouchStyle({backgroundColor:'#8D58FF'})
                                await dispatch(allActions.tag.push(item));
                                await dispatch(allActions.counter.increment());
                            }}
                        >
                            <Text style={styles.menu}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        left: 21,
        top: 10,
        fontSize: 17,
        height: 20,
        bottom: 11
    },
    touchStyle: {
        height: 44,
        backgroundColor: 'white',
        borderBottomWidth: .2,
        borderBottomColor: 'gray',
    }
});

export default Find;