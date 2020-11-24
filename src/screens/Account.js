import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-community/masked-view';
import {ProgressBar} from './../commons/ProgressBar'
const Account = ({ navigation }) => {
    const GradientText = props => (
        <MaskedView style={{top:78,left:32}} maskElement={<Text {...props} />}>
          <LinearGradient colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedView>
      );
      
    return (
        <View>
            <GradientText style={styles.title}>Account</GradientText>
            <View style={{flexDirection:'row',backgroundColor:'white',height:75,top:128}}>
                <LinearGradient style={{width:67,height:67,borderRadius:67/2.0,top:6,left:20}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Image></Image>
                </LinearGradient>
                <View>
                    <Text style={{fontSize:24,left:50}}>Harshit Beniwal</Text>
                    {/* <ProgressBar percentage={75}/> */}
                </View>


            </View>
            <View style={{backgroundColor:'white',top:180,height:208}}>
            <Text style={{fontSize:24,left:50,borderBottomWidth:.5,height:52}}>harshitbeniwal.design@gmail.com</Text>
            <Text style={{fontSize:24,left:50,borderBottomWidth:1,height:52}}>+919876543210</Text>
            <Text style={{fontSize:24,left:50,borderBottomWidth:.7,height:52}}>Facebook</Text>
            <Text style={{fontSize:24,left:50,height:52}}>Google</Text>
            </View>
        </View>
    );
}

Account.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    title:{
        fontSize:35,
        fontWeight:'bold'
    },
    button:{
        width:295,
        height:44,
        alignSelf:'center',
        borderColor:"#744DFF",
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'80%'
    },
    button3:{
        borderRadius:10,
        width:'100%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Account;