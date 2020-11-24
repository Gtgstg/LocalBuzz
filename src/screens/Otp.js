import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import * as firebase from "firebase";
import {LinearGradient} from 'expo-linear-gradient'
import { useDispatch,useSelector } from 'react-redux';
import allActions from '../actions/index';
    

const firebaseConfig = {
    apiKey: "AIzaSyD_9jCUDGxXKKyOeFu8fnYT8CLNwVo-zVo",
    authDomain: "react-native-chat-d49c8.firebaseapp.com",
    databaseURL: "https://react-native-chat-d49c8.firebaseio.com",
    projectId: "react-native-chat-d49c8",
    storageBucket: "react-native-chat-d49c8.appspot.com",
    messagingSenderId: "112042360706",
    appId: "1:112042360706:web:bf1c077f5135e704e7599b"
  };

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
const Otp = ({ route,navigation }) => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user).payload;
    const { name , number,verificationId} = route.params;
    const [otp,setOtp] = useState('');
    const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
        ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
        : undefined);
    const errors="Wrong OTP";
    console.log("hello");
    console.log(users);
    console.log("hello");
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            {/* <Image style={{ width: 247, height: 86.29}} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} /> */}
            {name && <Text style={{fontSize:10,top:"60%",left:"15%",color:'#98989B'}}>Name</Text> &&
            <Text
                style={{width:'70%',fontSize:17,top:"62.5%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                // onChangeText={text => setName(text)}
                // value={name}
            >{name}</Text>
            }
            <Text style={{fontSize:10,top:"65%",left:"15%",color:'#98989B'}}>Number</Text>
            <Text
                style={{width:'70%',fontSize:17,top:"67.5%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                // onChangeText={text => setNumber(text)}
                // value={number}
            >{number}</Text>
            <Text style={{fontSize:10,top:"70%",left:"15%",color:'#98989B'}}>OTP</Text>
            <TextInput
                style={{width:'70%',fontSize:17,top:"72.5%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                onChangeText={text => setOtp(text)}
                value={otp}
            ></TextInput>
            { name &&
                <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                                try {
                                    const credential = await firebase.auth.PhoneAuthProvider.credential(
                                    verificationId,
                                    otp
                                    );
                                    await firebase.auth().signInWithCredential(credential);
                                    await navigation.navigate('Email',{page:true,name,number});
                                    showMessage({ text: "Phone authentication successful 👍" });
                                } catch (err) {
                                    showMessage({ text: `${errors}`, color: "red" });
                                }
                                
                            }
                        }
                >
                    <Text style={{color:'#744DFF',fontSize:17}}>CONTINUE</Text>
                </TouchableOpacity>
            }
            {
                !name &&
                <TouchableOpacity
                    style={{
                        width:295,
                        height:44,
                        alignSelf:'center',
                        justifyContent:'center',
                        alignItems:'center',
                        top:'75%'
                    }}
                    onPress={async () => {
                        try {
                            const credential = await firebase.auth.PhoneAuthProvider.credential(
                            verificationId,
                            otp
                            );
                            await firebase.auth().signInWithCredential(credential);
                            await dispatch(allActions.tag.push(number));
                            await dispatch(allActions.counter.getAsyncData(users[0].id));
                            await navigation.navigate('Home');
                            showMessage({ text: "Phone authentication successful 👍" });
                        } catch (err) {
                            showMessage({ text: `${errors}`, color: "red" });
                        }
                        }
                    }
            >
                <LinearGradient
                colors={['#8C58FF','#5C41FF']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.button3}
            >
                <Text style={{color:'white',fontSize:17,textAlignVertical:'center',justifyContent:'center'}}>LOG IN</Text>
                </LinearGradient>
            </TouchableOpacity>
            }
            {message ? (
            // <TouchableOpacity
            //     style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
            //     onPress={() => showMessage(undefined)}
            // >
                <Text style={{color: message.color || "blue", fontSize: 15,top:"66.8%",left:"15%", }}>
                    {message.text}
                </Text>
            // </TouchableOpacity>
        ) : undefined}
        </View>
    );
}

Otp.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
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

export default Otp;