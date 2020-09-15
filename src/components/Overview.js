import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from "react-native";

const Overview = () => {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.tag);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const viewStyle = {
        backgroundColor:'white',
        height:screenHeight
    }
    return (
        <View style={viewStyle}>
            <FlatList
                data={tags.slice(1)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={styles.touchStyle}

                        >
                            <Image style={{ top: 14.24, left: 20, width: 91, height: 31.53 }} resizeMode="contain" source={require('../../assets/Images/Cartype/SUV.png')} />
                            <View style={{ top: 12, left: 33 }}>
                                <Text style={styles.menu}>{item}</Text>
                                {/* <FlatList
                                    horizontal
                                    data={item.features}
                                    keyExtractor={(feature, index) => index.toString()}
                                    renderItem={({item})=>{
                                        return ( 
                                            <Text style={styles.features}>{item}, </Text>
                                        );
                                    }}
                                /> */}
                            </View>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                onPress={
                    async ()=> {
                        await dispatch(allActions.counter.postAsyncData(tags));
                        await dispatch(allActions.counter.increment());
                    }

                }
                style={styles.register}
            >
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        fontSize: 17
    },
    touchStyle: {
        height: 62,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
    },
    features: {
        top: 4,
        color: "gray",
        fontSize: 12
    },
    register: {
        bottom: 180,
        backgroundColor: "#8D58FF",
        width: 295,
        height: 44,
        alignSelf: 'center',
        borderRadius: 10
    },
    registerText: {
        textAlign: 'center',
        color: 'white',
        height: 20,
        top: 12
    }
});

export default Overview;