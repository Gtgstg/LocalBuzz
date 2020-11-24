import React,{useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Logsign');
        },1000);
    },[]);
    return (
        <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'column',height: '100%',backgroundColor:"white"}}>
            <Image style={{ width: 247, height: 86.29}} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
        </View>
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