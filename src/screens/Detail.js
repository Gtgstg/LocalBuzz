import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-community/masked-view';
import {ProgressBar} from './../commons/ProgressBar'
import { useDispatch,useSelector } from 'react-redux';
const Detail = ({ navigation }) => {
      const user = useSelector((state)=>state.user).payload;
    //   console.log(user);
    return (
        <View>
            <TouchableOpacity
                    style={{top:40,left:16,width:20,height:30}}
                    onPress={
                        ()=>{
                            navigation.navigate('My Account');
                        }
                    }
                >
                    <Image style={{ width: 30, height: 30, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../assets/back.png')} />
            </TouchableOpacity>
            
            <LinearGradient style={{width:119,height:119,borderRadius:119/2.0,top:54,alignSelf:'center'}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Image style={{top:10, width:119,height:98, overflow: 'hidden',tintColor:'white'}} resizeMode="contain" source={require('../../assets/acc.png')} />
            </LinearGradient>
            <View style={{top:65,alignSelf:'center'}}>
                <Text style={{fontSize:31,fontWeight:'bold'}}>{user[0].user_name}</Text>
                {/* <ProgressBar percentage={75}/> */}
            </View>
            <TouchableOpacity
                style={{top:101,alignSelf:'flex-end',flexDirection:'row',right:10}}
                onPress={
                    ()=>{
                        navigation.navigate("Edit")
                    }
                }
            >
                <LinearGradient style={{width:15,height:15,borderRadius:20/2.0,alignSelf:'center'}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Image style={{top:2,width:8,height:10,tintColor:'white', overflow: 'hidden',alignSelf:'center'}} resizeMode="contain" source={require('../../assets/pen.png')} />
                </LinearGradient>
                <Text style={{fontSize:17,color:'#744DFF'}}> EDIT</Text>
            </TouchableOpacity>
            <View style={{backgroundColor:'white',top:105,height:204}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/calender.png')} />
                    <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{(!user[0].dob || user[0].dob.length==0)?"DD/MM/YYYY":new Date(user[0].dob).getDate()+"/"+new Date(user[0].dob).getMonth()+"/"+new Date(user[0].dob).getFullYear()}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/gender.png')} />
                <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{(!user[0].gender || user[0].gender.length==0)?"Male":((user[0].gender==0)?"Male":(user[0].gender==1)?"Female":"Other")}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/loc.png')} />
                    <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{(!user[0].location || user[0].location.length==0)?"Hyderabad":user[0].location}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/brief.png')} />
                <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{(!user[0].designation || user[0].designation.length==0)?"Designer":user[0].designation}</Text>
                </View>
                {/* <Text style={{fontSize:18,left:50,borderBottomWidth:.7,height:52,textAlignVertical:'center'}}>Facebook</Text>
                <Text style={{fontSize:18,left:50,height:52,textAlignVertical:'center'}}>Google</Text> */}
                <Text style={{left:18,color:'gray',width:'60%',fontSize:12}}>Your privacy is our utmost priority. We use this data to find the best matches for you</Text>
            </View>
        </View>
    );
}


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

export default Detail;