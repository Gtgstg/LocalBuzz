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
    },[]);
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <Text style = {styles.heading}>{group.group_name}</Text>
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
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#98989B" }}
                        onPress={async () => {
                            await dispatch(allActions.counter.sendMail([name,group,user[0].id]));
                            setModalVisible(!modalVisible);
                        }}
                        >
                        <Text style={styles.textStyle}>Send</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>
                    <Text style={{left:17,bottom:6,color:'#86868C'}}>{len} MEMBERS</Text>
                    <TouchableOpacity 
                        style={{left:270,backgroundColor:'#754EFF',borderRadius:4,width:73,height:19,bottom:6}}
                        onPress={
                            async ()=>{
                                await 
                                setModalVisible(true);
                            }
                        }
                    >
                        <Text style={{color:"white",left:27,fontSize:13}}>INVITE</Text>
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
                        await dispatch(allActions.counter.leave([group.id,user[0].id]));
                        await navigation.navigate('Home');
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
        backgroundColor:"#F2F2F6"
    },
    heading:{
        height:20,
        width:97,
        top:51,
        alignSelf:'center',
        fontWeight:"bold",
        fontSize:17,
        color: "#000000"
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