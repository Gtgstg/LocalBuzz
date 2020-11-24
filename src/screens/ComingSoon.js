import React,{useState} from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import allActions from '../actions/index';

const ComingSoon = ({ navigation }) => {
    const [email,setEmail]=useState('');
    const dispatch = useDispatch();
    return (
        <View style={{flexDirection:"column",justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <LinearGradient
                colors={['#8C58FF','#5C41FF']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{height: '100%',width:"100%"}}
            >
                <Text style={styles.text}>Buzzzzzing Very Soon</Text>
                <TextInput
                    onChangeText={text=>setEmail(text)}
                    placeholder={"Email Address"}
                    value={email}
                    style={{backgroundColor:'white',top:'45%',left:'10%',width:"80%",height:"5%",borderRadius:5}}
                />
                <TouchableOpacity
                    style={styles.sign}

                    onPress={async () => {
                        await dispatch(allActions.counter.coming(email));
                        await navigation.navigate('Home')}}
                >
                    <Text style={{color:'#6847FF',fontSize:17}}>Notify Me</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

ComingSoon.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:32,
        color:'white',
        top:"40%",
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

export default ComingSoon;