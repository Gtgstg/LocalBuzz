import React, { useState } from 'react';
import { View,Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { useDispatch } from 'react-redux';
import allActions from '../actions/index';

const Something = ({ navigation }) => {
    const [suggestion,setSuggestion]=useState('');
    const dispatch = useDispatch();
    return (
        <View style={{flexDirection:"column",justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <LinearGradient
                colors={['#8C58FF','#5C41FF']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{height: '100%',width:"100%"}}
            >
                <Text style={styles.text}>We are listening...</Text>
                <TextInput
                    onChangeText={text=>setSuggestion(text)}
                    value={suggestion}
                    placeholder={"What you are planning to buy?"}
                    multiline={true}
                    numberOfLines={10}
                    style={{backgroundColor:'white',top:'40%',left:'20%',width:"60%",borderRadius:5}}
                />
                <TouchableOpacity
                    style={styles.sign}
                    onPress={async () => {
                        await dispatch(allActions.counter.suggest(suggestion));
                        await navigation.navigate('Home')}}
                >
                    <Text style={{color:'#6847FF',fontSize:17}}>Submit</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

Something.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:32,
        color:'white',
        top:"30%",
        textAlign:'center'
    },
    sign:{
        width:295,
        height:44,
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'50%'
    },
    login:{
        width:295,
        height:44,
        alignSelf:'center',
        borderColor:"white",
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'72%'
    }
});

export default Something;