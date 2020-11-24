// @refresh reset

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View,Text,TouchableOpacity,Image, ImageBackground} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GiftedChat, Bubble,Send } from 'react-native-gifted-chat';
import { chatsRef} from './Firebase';
import allActions from '../../actions/index';

export default function App() {
    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState([]);
    const name = useSelector((state)=>state.tag)[0];
    const group = useSelector((state)=>state.chatRoom).payload;
    const users = useSelector((state)=>state.user).payload;
    const dispatch = useDispatch();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const date = new Date(group.expected);
    const ex = date.getDay()+'th '+monthNames[date.getMonth()];
    // console.log(date.getMonth());
    // const [_id,setId]=useState(0);
    // const _id = useSelector((state)=>state.id);
    useEffect(() => {
        // const _id = Math.random().toString(36).substring(7);
        // console.log(users);
        const _id = users[0].id;
        const user = {_id,name,group:group.id};
        setUser(user); 
        const unsubscribe = chatsRef
        .where('user.group','==',group.id)
        .onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    async function handleSend(messages) {
        // console.log(messages);
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }
    function renderSend(props) {
        return(
            // <View>
                <Send {...props}>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Image style={{ bottom:10,width: 27, height: 25, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../../assets/Images/Cartype/SUV.png')} />
                    </View>
                </Send>
            // </View>
        );
    }
    function renderBubble(props){
        // console.log(props);

        const ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        const textStyle = {
            color : ColorCode,
            fontWeight: 'bold'
        }
          return (
            <View style={{flexDirection:"row"}}>
              {/* <Text style={textStyle}>{props.currentMessage.user.name}</Text> */}
              <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                      // Here is the color change
                      backgroundColor: '#9481FF'
                    },
                    left:{
                      backgroundColor: '#F2F2F6'
                    }
                  }}
                  textStyle={{
                    right: {
                      color: '#fff'
                    }
                  }}
              />
            </View>
          );
    }

    return (
        <View style={{backgroundColor:'White',flex:1}}>
            <TouchableOpacity 
                style={styles.header}renderSystemMessage
                onPress={
                    async ()=>{
                        await dispatch(allActions.counter.postAsyncAddData(group.id));
                        await dispatch(allActions.counter.getUsers(group.id));
                        await dispatch(allActions.counter.inc());
                    }
                }
            
            >
                <Text style = {styles.heading}>{group.group_name}</Text>
                <Text style={{height:20,top:40,alignSelf:'center',fontSize:13,color: "grey"
    }}>expiring on {ex}</Text>
            </TouchableOpacity>
            <ImageBackground style={{flex:1}}  source={require('../../../assets/chat_background.png')}>
                <GiftedChat 
                    renderUsernameOnMessage={true} 
                    messages={messages} 
                    user={user} 
                    onSend={handleSend} 
                    renderBubble={renderBubble}
                    renderAvatar={() => null}
                    alwaysShowSend
                    renderSend={renderSend}
                    />    
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor:"#F2F2F6"
    },
    heading:{
        height:20,
        width:97,
        top:37,
        alignSelf:'center',
        fontWeight:"bold",
        fontSize:17,
        color: "#000000"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    }
})
