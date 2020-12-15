import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import Slider from './../commons/Slider';
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
const Sign = ({ navigation }) => {
    const dispatch=useDispatch();
    const recaptchaVerifier = React.useRef(null);
    const user = useSelector((state)=>state.user).payload;
    const [verificationId, setVerificationId] = React.useState();
    const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
        ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
        : undefined);
    const [name,setName]=useState('');
    const [number,setNumber]=useState('+91');
    const errors = "Invalid Number"
    const Validate=()=>{
        let re = /^\+\d{1,3}\d{9,10}$/
        if(number.length!=13) throw "Invalid";
        if(!re.test(number)) throw "Invalid";
    }
    useEffect(()=>{
        // console.log(user)
        if(user!=undefined && user.length==0){
            const check = async() =>{
                try{
                    const phoneProvider = new firebase.auth.PhoneAuthProvider();
                    const verificationId = await phoneProvider.verifyPhoneNumber(
                    number,
                    recaptchaVerifier.current
                    );
                    setVerificationId(verificationId);
                    showMessage({
                    text: "Verification code has been sent to your phone.",
                    });
                    await navigation.navigate('Otp',{name,number,verificationId});
                }
                catch (err) {
                    showMessage({ text: `${errors}`, color: "red" });
                }
            }
            check();
        }
        else if(user!=undefined){
            showMessage({ text: `Already Exist`, color: "red" });
        }
    },[user]);
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Slider/>
            {/* <Image style={{ width: 247, height: 86.29}} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} /> */}
            <Text style={{fontSize:10,top:"46%",left:"15%",color:'#98989B'}}>Name</Text>
            <TextInput
                style={{width:'70%',fontSize:17,top:"47.5%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                onChangeText={text => setName(text)}
                value={name}
            ></TextInput>
            <Text style={{fontSize:10,top:"51%",left:"15%",color:'#98989B'}}>Number</Text>
            <TextInput
                style={{width:'70%',fontSize:17,top:"52.5%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                onChangeText={text => setNumber(text)}
                keyboardType={'phone-pad'}
                value={number}
            ></TextInput>
            <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                            try {
                                await Validate();
                                await dispatch(allActions.counter.getAsyncUser(number));
                            } catch (err) {
                                showMessage({ text: `${err}`, color: "red" });
                            }
                        }
                    }
            >
                <Text style={{color:'#744DFF',fontSize:17}}>GENERATE OTP</Text>
            </TouchableOpacity>
            {message ? (
            // <TouchableOpacity
            //     style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
            //     onPress={() => showMessage(undefined)}
            // >
                <Text style={{color: message.color || "blue", fontSize: 15,top:"46.8%",left:"15%" }}>
                    {message.text}
                </Text>
            // </TouchableOpacity>
        ) : undefined}
        </View>
    );
}

Sign.navigationOptions = () => {
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
        top:'58%'
    }
});

export default Sign;