import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import { useDispatch } from 'react-redux';
import allActions from '../actions/index';
import * as Linking from 'expo-linking';
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
const Email = ({ route,navigation }) => {
    const [location,SetLocation] = useState(null);
    const dispatch = useDispatch();
    const {page,name,number} = route.params;
    const [email,setEmail]=(page)?useState(''):useState('+91');
    // if(!page) setEmail('+91');
    const recaptchaVerifier = React.useRef(null);
    const [verificationId, setVerificationId] = React.useState();
    const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
        ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
        : undefined);
    const errors = "Invalid Input."
    const link = Linking.makeUrl('Mail/');
    console.log(link);
    const FIREBASE_LINK_PROXY = 'https://wt-6e2a5f000b93f69e1b65cf98021e1945-0.sandbox.auth0-extend.com/firebase-authentication-link-redirect';
    const proxyUrl = `${FIREBASE_LINK_PROXY}?redirectUrl=${encodeURIComponent(link)}`;
    // console.log(proxyUrl);
    const Validate=(type)=>{
        // let re;
        if(type=="number"){
            // re = /^\+\d{1,3}\d{9,10}$/
            if(email.length!=13) throw "Invalid";
        }
        else{
            let re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)) throw "Invalid";
        }
        
    }
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            {/* <Image style={{ width: 247, height: 86.29}} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} /> */}
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                attemptInvisibleVerification={true}
            />
            {page &&
            <Text style={{fontSize:10,top:"78.5%",left:"15%",color:'#98989B'}}>Email</Text> &&
            <TextInput
                style={{width:'70%',fontSize:17,top:"80%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                onChangeText={text => setEmail(text)}
                value={email}
            ></TextInput>
            }
            {!page && 
                <Text style={{fontSize:10,top:"78.5%",left:"15%",color:'#98989B'}}>Email/Number</Text> &&
                <TextInput
                style={{width:'70%',fontSize:17,top:"80%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                onChangeText={text => setEmail(text)}
                keyboardType={'phone-pad'}
                value={email}
            ></TextInput>
            }
            {/* <TextInput
                style={{width:'70%',fontSize:17,top:"80%",left:"15%",borderColor:'#98989B',borderBottomWidth:1}}
                onChangeText={text => setEmail(text)}
                keyboardType={'phone-pad'}
                value={email}
            ></TextInput> */}
            {/* <TouchableOpacity
                    style={styles.button1}
                    onPress={async () => {
                        await navigation.navigate('OTP',{number:email,page:false});

                        }
                    }
            >
                <Text style={{color:'#000000',fontSize:17}}>CONTINUE WITH FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button2}
                    onPress={async () => {
                        }
                    }
            >
                <Text style={{color:'#000000',fontSize:17}}>CONTINUE WITH GOOGLE</Text>
            </TouchableOpacity> */}
            {
            page &&
            <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        try{
                            await Validate("email");
                            await firebase.auth().sendSignInLinkToEmail(email, {
                                handleCodeInApp: true,
                                url: proxyUrl
                            })
                            .then(async ()=>{
                                await navigator.geolocation.getCurrentPosition(
                                    (position) =>{ 
                                        console.log(position);
                                        SetLocation(position);
                                    },
                                    (err) => console.log(err),
                                    { enableHighAccuracy: false, timeout: 8000, maximumAge: 10000 }
                                  );
                                await dispatch(allActions.counter.signup([name,number,email,location]));
                                // await dispatch(allActions.counter.getAsyncUser(number));
                                await dispatch(allActions.tag.push(number));
                                await dispatch(allActions.counter.getAsyncData(email));
                                
                                await navigation.navigate('Home');
                            })
                            .catch(err=>{
                                console.log(err);
                                
                            })
                        }
                        catch(err){
                            showMessage({ text: `${errors}`, color: "red" });
                        }
                        }
                    }
            >
                <Text style={{color:'#744DFF',fontSize:17}}>CONTINUE WITH MAIL</Text>
            </TouchableOpacity>
            }
            {
                !page &&
                <TouchableOpacity
                    style={{
                        width:295,
                        height:44,
                        alignSelf:'center',
                        justifyContent:'center',
                        alignItems:'center',
                        top:'85%'
                    }}
                    onPress={async () => {
                            try {
                                await Validate("number");
                                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                                const verificationId = await phoneProvider.verifyPhoneNumber(
                                email,
                                recaptchaVerifier.current
                                );
                                setVerificationId(verificationId);
                                showMessage({
                                text: "Verification code has been sent to your phone.",
                                });
                                await dispatch(allActions.counter.getAsyncUser(email));
                                await navigation.navigate('Otp',{number:email,verificationId});
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
                <Text style={{color:'white',fontSize:17,textAlignVertical:'center',justifyContent:'center'}}>GENERATE OTP</Text>
                </LinearGradient>
            </TouchableOpacity>
            }
            {/* {message ? (
            <TouchableOpacity
                style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
                onPress={() => showMessage(undefined)}
            >
                <Text style={{color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
                    {message.text}
                </Text>
            </TouchableOpacity>
        ) : undefined} */}
        {message ? (
            // <TouchableOpacity
            //     style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
            //     onPress={() => showMessage(undefined)}
            // >
                <Text style={{color: message.color || "blue", fontSize: 15,top:"74.8%",left:"15%", }}>
                    {message.text}
                </Text>
            // </TouchableOpacity>
        ) : undefined}
        </View>
    );
}

Email.navigationOptions = () => {
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
        top:'85%'
    },
    button3:{
        borderRadius:10,
        width:'100%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    button1:{
        width:295,
        height:44,
        alignSelf:'center',
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'50%'
    },
    button2:{
        width:295,
        height:44,
        alignSelf:'center',
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'52%'
    }
});

export default Email;