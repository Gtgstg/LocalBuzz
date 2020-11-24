import * as firebase from 'firebase';
import 'firebase/firestore';
import {LogBox} from 'react-native'

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

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export {chatsRef};