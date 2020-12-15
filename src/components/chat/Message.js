// @refresh reset

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View,Text,TouchableOpacity,Image, ImageBackground,Modal,TextInput,TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GiftedChat, Bubble,Send } from 'react-native-gifted-chat';
import { chatsRef} from './Firebase';
import allActions from '../../actions/index';

export default function App() {
    const [user, setUser] = useState(null);
    const [names,setNames] =useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    // const name = useSelector((state)=>state.tag)[0];
    const group = useSelector((state)=>state.chatRoom).payload;
    const users = useSelector((state)=>state.user).payload;
    const dispatch = useDispatch();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const date = new Date(group.expected);
    const ex = date.getDate()+'th '+monthNames[date.getMonth()];
    // console.log(date.getMonth());
    // const [_id,setId]=useState(0);
    // const _id = useSelector((state)=>state.id);
    useEffect(() => {
        // const _id = Math.random().toString(36).substring(7);
        // console.log(users);
        const _id = users[0].id;
        const name = users[0].phonenumber;
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
                        <Image style={{ right:10,bottom:10,width: 25, height: 25, overflow: 'hidden'}} resizeMode="contain" source={require('../../../assets/Images/Group/send.png')} />
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
        <View style={{flex:1}} >
            <View style={styles.header}>
                <TouchableOpacity
                    style={{left:16,width:35,height:80}}
                    onPress={
                        ()=>{dispatch(allActions.counter.dec())}
                    }
                >
                    <Image style={{ top:40,width: 35, height: 35, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../../assets/back.png')} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{left:'110%'}}
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Email id:</Text>
                        <TextInput
                            style={{width:150,fontSize:17,borderColor:'#98989B',borderBottomWidth:1}}
                            onChangeText={text => setNames(text)}
                            value={names}
                        ></TextInput>
                        <View flexDirection="row">
                            <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#98989B" }}
                            onPress={async () => {
                                await dispatch(allActions.counter.sendMail([names,group,users[0].id]));
                                setModalVisible(!modalVisible);
                            }}
                            >
                            <Text style={styles.textStyle}>Send</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#754EFF",left:10 }}
                                onPress={async () => {
                                    setModalVisible(!modalVisible);
                                }}
                                >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{top:40,width: 29, height: 25,left:'190%'}} 
                    onPress={
                        async ()=>{
                            await 
                            setModalVisible(true);
                        }
                    }
                >
                    <Image style={{width: 35, height: 35, overflow: 'hidden'}} resizeMode="contain" source={require('../../../assets/Images/Group/active.png')} />

                </TouchableOpacity>
            </View>
            <ImageBackground style={{flex:1}} source={require('../../../assets/chat_background.png')}>
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
        backgroundColor:"#F2F2F6",
        flexDirection:'row'
    },
    heading:{
        height:20,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
    openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top:15
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    tag: {
        height: 92,
        backgroundColor: "#F2F2F6",
        left: 0,
        top: 0
    },
    flatList: {
        marginLeft: 16
    },
    new:{
        width: 74,
        height: 15,
        left: 285,
        top: 33,
        fontFamily: "Roboto",
        fontSize: 13,
        textAlign: "right",
        color: "#754EFF",
    },
    menu: {
        left: 25,
        top: 13,
        height: 22,
        // fontWeight: "bold",
        fontSize: 17,
    },
    touchStyle: {
        height: 52,
        flexDirection:"row",
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
    }
})
