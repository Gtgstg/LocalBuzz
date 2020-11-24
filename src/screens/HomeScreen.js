import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Text } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions/index';
import {LinearGradient} from 'expo-linear-gradient';
const HomeScreen =({ navigation }) => {
    const dispatch = useDispatch();
    
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
                        onPress={() => navigation.navigate('Car')}
                    >
                        <Text style={{top:52,alignSelf:'center',color:'white'}}>Cars</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#9EDCFF','#915DFF']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{height:72,width:103,borderRadius:10}}
                    >
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('Car')}
                    >
                        <Text style={{top:52,alignSelf:'center',color:'white'}}>Real Estate</Text>
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
            <Text style={{top:48,left:16,fontSize:15,fontWeight:'bold'}}>Local Buzz</Text>
            <TouchableOpacity
                        onPress={() => navigation.navigate('ComingSoon')}
                        // style={{ top: 60, left: 16, width: '90%', height: 120}}
                    >
            <Image style={{top: 60, left: 16, width: '90%', height: 120,overflow: 'hidden', borderRadius: 10}} resizeMode="contain" source={require('../../assets/Images/Home/Gold_Banner.png')} />
            </TouchableOpacity><TouchableOpacity
                        onPress={() => navigation.navigate('Car')}
                        // style={{ top: 60, left: 16, width: '90%', height: 120}}
                    >
            <Image style={{top: 60, left: 16, width: '90%', height: 120, overflow: 'hidden', borderRadius: 10}} resizeMode="contain" source={require('../../assets/Images/Home/Cars_Banner.png')} />
            </TouchableOpacity><TouchableOpacity
                        onPress={() => navigation.navigate('ComingSoon')}
                        // style={{ top: 60, left: 16, width: '90%', height: 120}}
                    >
            <Image style={{ top: 60, left: 16, width: '90%', height: 120, overflow: 'hidden', borderRadius: 10}} resizeMode="contain" source={require('../../assets/Images/Home/Real_Estate_Banner.png')} />
            </TouchableOpacity>
        </View>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        headerStyle: { height: 88 },
        headerTitleAlign: 'center',
        headerLeft: () =>
            <View>
                <TouchableOpacity>
                    <Image style={{ left:16,width: 32, height: 32 }} resizeMode="contain" source={require('../../assets/Images/Home/hamburger_menu.png')} />
                </TouchableOpacity>
            </View>
        ,
        headerTitle: () => <Image style={{ width: 101, height: 35 }} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
    };
};

const styles = StyleSheet.create({});

export default HomeScreen;