import React, { useEffect } from 'react';
import { View,Text, StyleSheet,TouchableOpacity,BackHandler,Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions/index';
const Logsign =  (props) => {
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     AsyncStorage.getItem("user")
    //     .then(async (e)=>{
    //         console.log("hii"+e);
    //         if(e){
    //             const y=JSON.parse(e);
    //             // console.log(navigation.navigate("Home"));
    //             await dispatch(allActions.counter.logSign(y));
    //             await dispatch(allActions.counter.getAsyncData(y[0].id));
    //             await navigation.navigate('Home');
    //         }
    //     })
    //     .catch((err)=>
    //         console.log(hii+" "+err)
    //     )
    // },[]);
    // const backAction = () => {
    //     console.log(props.route.name);
    //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //       {
    //         text: "Cancel",
    //         onPress: () => null,
    //         style: "cancel"
    //       },
    //       { text: "YES", onPress: () => {
    //           if(props.route.name==="Home"|| props.route.name==='Login')
    //             return true;
    //         else return BackHandler.exitApp()
    //          }}
    //     ]);
    //     return true;
    //   };
    //   useEffect(()=>{
    //     BackHandler.addEventListener("hardwareBackPress", backAction);

    //     return () =>
    //     BackHandler.removeEventListener("hardwareBackPress", backAction);
    //   },[])
    return (
        <View style={{flexDirection:"column",justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <LinearGradient
                colors={['#8C58FF','#5C41FF']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{height: '100%',width:"100%"}}
            >
                <Text style={styles.text}>Find what's buzzing in your locality</Text>
                <TouchableOpacity
                    style={styles.sign}
                    onPress={() => props.navigation.navigate('Sign')}
                >
                    <Text style={{color:'#6847FF',fontSize:17}}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.login}
                    onPress={async () => {
                        console.log('hii');
                            await props.navigation.navigate('Email',{page:false});
                        }
                    }
                >
                    <Text style={{color:'white',fontSize:17}}>Log in</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

Logsign.navigationOptions = () => {
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
        textAlign:'center',
        width:'90%'
    },
    sign:{
        width:295,
        height:44,
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'70%'
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

export default Logsign;