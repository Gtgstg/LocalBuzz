import React,{useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions/index';
const Splash = ({ navigation }) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        setTimeout(async ()=>{
            await AsyncStorage.getItem("user")
            .then(async (e)=>{
                console.log("hii"+e);
                if(e){
                    const y=await JSON.parse(e);
                    await dispatch(allActions.counter.logSign(y));
                    await dispatch(allActions.counter.getAsyncData(y[0].id));
                    await navigation.navigate('Home');
                    // return "Home"
                }
                else{
                    navigation.navigate('Logsign');
                }
            })
            .catch((err)=>
                console.log(err)
            )
            // console.log(res);
            // return res;
            
        },1000);
    },[]);
    return (
        // <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'column',height: '100%',backgroundColor:"white"}}>
        //     <Image style={{ width: 247, height: 86.29}} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
        // </View>
        <></>
    );
}

Splash.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({

});

export default Splash;