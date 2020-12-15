import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-community/masked-view';
import {ProgressBar} from './../commons/ProgressBar'
import { useDispatch,useSelector } from 'react-redux';
const Account = ({ navigation }) => {
    const GradientText = props => (
        <MaskedView style={{top:40,left:32}} maskElement={<Text {...props} />}>
          <LinearGradient colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedView>
      );
      const user = useSelector((state)=>state.user).payload;
    return (
        <View>
            <TouchableOpacity
                    style={{top:40,left:16,width:20,height:30}}
                    onPress={
                        ()=>{
                            navigation.navigate('Home');
                        }
                    }
                >
                    <Image style={{ width: 30, height: 30, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../assets/back.png')} />
                </TouchableOpacity>
            <GradientText style={styles.title}>Account</GradientText>
            <TouchableOpacity
                style={{flexDirection:'row',backgroundColor:'white',height:75,top:50}}
                onPress={
                    ()=>{
                        navigation.navigate("Detail");
                    }
                }
            >
                <LinearGradient style={{width:60,height:60,borderRadius:67/2.0,top:6,left:20}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Image style={{top:10, width:60,height:40, overflow: 'hidden',tintColor:'white'}} resizeMode="contain" source={require('../../assets/acc.png')} />
                </LinearGradient>
                <View style={{top:15,left:40}}>
                    <Text style={{fontSize:24,fontWeight:'bold'}}>{user[0].user_name}</Text>
                    {/* <ProgressBar percentage={75}/> */}
                </View>
            </TouchableOpacity>
            <View style={{backgroundColor:'white',top:85,height:102}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/mail.png')} />
                    <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{user[0].email}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/call.png')} />
                <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{user[0].phonenumber}</Text>
                </View>
                {/* <Text style={{fontSize:18,left:50,borderBottomWidth:.7,height:52,textAlignVertical:'center'}}>Facebook</Text>
                <Text style={{fontSize:18,left:50,height:52,textAlignVertical:'center'}}>Google</Text> */}
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