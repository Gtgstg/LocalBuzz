import React, { useEffect, useState } from 'react';
import { TextInput,Image, Text, View, StyleSheet, TouchableOpacity,Modal,TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import { chatsRef } from './Firebase';
import Tag from '../../commons/Tag';

const Info = ({ navigation }) => {
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [leaveVisible, setLeaveVisible] = useState(false);
    const groups = useSelector((state)=>state.groups).payload;
    const user = useSelector((state)=>state.user).payload;
    const users = useSelector((state)=>state.groupUser).payload;
    const [name,setName] =useState('');
    const [len,setLen] = useState(0);
    const group = useSelector((state)=>state.chatRoom).payload;
    // console.log(group);
    const chatTag = useSelector((state)=>state.chatTag).payload;
    useEffect(()=>{
        if(users) setLen(users.length);
        // const unsubscribe = chatsRef
        // .where('user.group','==',group.id)
        // .onSnapshot((querySnapshot) => {
        //     const messagesFirestore = querySnapshot
        //         .docChanges()
        //         .filter(({ type }) => type === 'added')
        //         .map(({ doc }) => {
        //             const message = doc.data()
        //             return message["user"]["name"];
        //         })
        //     setUsers(messagesFirestore)
        // })
        // return () => unsubscribe()
        // dispatch(allActions.counter.getUsers(group.id));
    },[users]);
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{left:16,width:35,height:80}}
                    onPress={
                        ()=>{dispatch(allActions.counter.dec())}
                    }
                >
                    <Image style={{ top:40,width: 35, height: 35, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../../assets/back.png')} />
                </TouchableOpacity>
                <View style = {styles.heading}>
                    <Text style={{fontWeight:"bold",fontSize:17,color: "#000000"}}>{group.group_name}</Text>
                </View>
            </View>
            <View>
            <Image style={{ height: 180}} resizeMode="stretch" source={{uri:'https://i.pinimg.com/originals/d7/83/b9/d783b97190faf629752fd50003061755.jpg'}} />
            <View style={styles.tag}>
                <FlatList style={styles.flatList}
                    horizontal
                    data={chatTag}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Tag title={item} top={true} />
                        );
                    }}
                />
                <View style = {{flexDirection:'row'}}>
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
                            onChangeText={text => setName(text)}
                            value={name}
                        ></TextInput>
                        <View flexDirection="row">
                            <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#754EFF" }}
                            onPress={async () => {
                                await dispatch(allActions.counter.sendMail([name,group,user[0].id]));
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={leaveVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Are you sure you want to leave?</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#754EFF" }}
                                onPress={async () => {
                                    await dispatch(allActions.counter.leave([group.id,user[0].id]));
                                    await navigation.navigate('Home');
                                    setLeaveVisible(!leaveVisible);
                                }}
                                >
                                    <Text style={styles.textStyle}>Yes</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#754EFF",left:10 }}
                                onPress={async () => {
                                    setLeaveVisible(!leaveVisible);
                                }}
                                >
                                <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
                    <Text style={{left:17,bottom:6,color:'#86868C'}}>{len} MEMBERS</Text>
                    <TouchableOpacity 
                        style={{left:'57%',backgroundColor:'#754EFF',borderRadius:4,width:73,height:19,bottom:6,flexDirection:'row'}}
                        onPress={
                            async ()=>{
                                await 
                                setModalVisible(true);
                            }
                        }
                    >
                        <Image style={{width: 18, height: 16, overflow: 'hidden',left:5}} resizeMode="contain" source={require('../../../assets/Images/Group/invite.png')} />
                        <Text style={{color:"white",fontSize:13}}>   INVITE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'white' }}>
            <FlatList
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.touchStyle}>
                                <Image style={{ top: 6, left: 16, width: 40, height: 40, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../../assets/Images/Cartype/SUV.png')} />
                                <Text style={styles.menu}>{item.user_name}</Text>
                            </View>
                        )
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={
                    async ()=>{
                        await setLeaveVisible(true);
                    }
                }
            >
                <Text style={{color:"red",left:"87%"}}>LEAVE</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
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
    header: {
        height: 88,
        backgroundColor:"#F2F2F6",
        flexDirection:'row'
    },
    heading:{
        height:20,
        top:51,
        left:'150%'
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
});

export default Info;