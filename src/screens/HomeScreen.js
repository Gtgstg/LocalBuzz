import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Text, ImageBackground,BackHandler,Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions/index';
const HomeScreen =({ navigation,route }) => {
    // console.log(navigation)
    // const groups = useSelector((state)=>state.groups).payload;
    // const user = useSelector((state)=>state.user).payload;
    // console.log(user);
    // console.log(groups);
    const dispatch=useDispatch();
    const backAction = () => {
        if(route.name=='Home'){
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
        }
        return true;
      };
      useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      },[])
    return (
        <View style={{backgroundColor:"white",flex:1}}>
            <View style={{backgroundColor:"#F4F4F4",height:88,justifyContent:"center"}}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{width: 25, height: 25,top:"30%",left:"5%" }}
                >
                    <Image  style={{width: 25, height: 25}} resizeMode="contain" source={require('../../assets/Images/Home/hamburger_menu.png')} />
                </TouchableOpacity>
                <Image style={{ alignSelf:"center",width: 101, height: 35 }} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
            </View>
            <Text style={{top:24,left:16,fontSize:15,fontWeight:'bold'}}>Looking To Buy?</Text>
            <View style={{flexDirection:'row',top:34,justifyContent:'space-around'}}>
                <LinearGradient
                    colors={['#E63946','#F3722C']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{height:72,width:103,borderRadius:10}}
                    >
                    <TouchableOpacity
                        onPress={async () => {
                            await dispatch(allActions.counter.reset())
                            await navigation.navigate('Car')}}
                    >
                        <Image  style={{top:21,width: 67.1, height: 26.61,alignSelf:'center'}} resizeMode="contain" source={require('../../assets/Images/Home/Cars.png')} />
                        <Text style={{fontSize:13,top:24,alignSelf:'center',color:'white'}}>Cars</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#9EDCFF','#915DFF']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{height:72,width:103,borderRadius:10}}
                    >
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('ComingSoon')}
                    >
                        <Image  style={{top:7,width: 52, height: 40,alignSelf:'center'}} resizeMode="contain" source={require('../../assets/Images/Home/Real_Estate.png')} />
                        <Text style={{top:10,alignSelf:'center',color:'white'}}>Real Estate</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#FFD664','#FF6F1E']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{height:72,width:103,borderRadius:10}}
                    >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Something')}
                    >
                        <Text style={{alignSelf:'center',color:'white',fontSize:17,textAlign:'center',top:16}}>Something Else?</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{top:48,left:16}}
            >
            <Text style={{fontSize:15,fontWeight:'bold'}}>Local Buzz</Text>
            </View>
            <TouchableOpacity
                        onPress={() => navigation.navigate('ComingSoon')}
                        style={{ left:16,top: 56, width:'90%',height: 105,borderRadius: 10}}
                    >
                <View style={{top:10,backgroundColor:'rgba(255, 214, 100, 0.5)',height:'100%',width:'100%',borderRadius:10}}>
                    <ImageBackground style={{top:-11,width:'100%',height:'100%',overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Home/Gold_Banner.png')} >
                        <Text style={{color:'white',top:15,left:14,fontSize:17,fontWeight:"bold"}}>Gold</Text>
                    </ImageBackground>
                    <View style={{left:20,top:'-5%',flexDirection:'row'}}>
                    <Image style={{width: 15, height: 15, overflow: 'hidden',tintColor:'black'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Group.png')} />
                    <Text style={{fontSize:10,fontWeight:'bold'}}>  26</Text>
                    <Text style={{fontSize:10}}> Groups</Text>
                    <View style={{top:3,left:'150%',backgroundColor:'black',borderRadius:20,width:9,height:9}}></View>
                    <Text style={{fontSize:10,fontWeight:'bold',left:'180%'}}>3856</Text>
                    <Text style={{fontSize:10,left:'180%'}}> Online</Text>
                    <Text style={{fontSize:10,fontWeight:'bold',left:'1000%'}}>Discover ></Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={async () => {
                            await dispatch(allActions.counter.reset())
                            await navigation.navigate('Car')}}
                        style={{ left:16,top: 76, width:'90%',height: 105,borderRadius: 10}}
                    >
                        <View style={{top:10,backgroundColor:'#F1A39C',height:'100%',width:'100%',borderRadius:10}}>
                <ImageBackground style={{top:-11,width: '100%', height:'100%', overflow: 'hidden', borderRadius: 10}} resizeMode="contain" source={require('../../assets/Images/Home/Cars_Banner.png')} >
                    <Text style={{color:'white',top:15,left:14,fontSize:17,fontWeight:"bold"}}>Cars</Text>
                </ImageBackground>
                <View style={{left:20,top:'-5%',flexDirection:'row'}}>
                    <Image style={{width: 15, height: 15, overflow: 'hidden',tintColor:'black'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Group.png')} />
                    <Text style={{fontSize:10,fontWeight:'bold'}}>  26</Text>
                    <Text style={{fontSize:10}}> Groups</Text>
                    <View style={{top:3,left:'150%',backgroundColor:'black',borderRadius:20,width:9,height:9}}></View>
                    <Text style={{fontSize:10,fontWeight:'bold',left:'180%'}}>3856</Text>
                    <Text style={{fontSize:10,left:'180%'}}> Online</Text>
                    <Text style={{fontSize:10,fontWeight:'bold',left:'1000%'}}>Discover ></Text>
                </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={() => navigation.navigate('ComingSoon')}
                        style={{ left:16,top: 96, width:'90%',height: 105,borderRadius: 10}}
                    >
                <View style={{top:10,backgroundColor:'#ADC4FF',height:'100%',width:'100%',borderRadius:10}}>
                <ImageBackground style={{ top:-11,width: '100%', height: '100%', overflow: 'hidden', borderRadius: 10}} resizeMode="contain" source={require('../../assets/Images/Home/Real_Estate_Banner.png')} >
                    <Text style={{color:'white',top:15,left:14,fontSize:17,fontWeight:"bold"}}>Real Estate</Text>
                </ImageBackground>
                <View style={{left:20,top:'-5%',flexDirection:'row'}}>
                    <Image style={{width: 15, height: 15, overflow: 'hidden',tintColor:'black'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Group.png')} />
                    <Text style={{fontSize:10,fontWeight:'bold'}}>  26</Text>
                    <Text style={{fontSize:10}}> Groups</Text>
                    <View style={{top:3,left:'150%',backgroundColor:'black',borderRadius:20,width:9,height:9}}></View>
                    <Text style={{fontSize:10,fontWeight:'bold',left:'180%'}}>3856</Text>
                    <Text style={{fontSize:10,left:'180%'}}> Online</Text>
                    <Text style={{fontSize:10,fontWeight:'bold',left:'1000%'}}>Discover ></Text>
                </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export default HomeScreen;