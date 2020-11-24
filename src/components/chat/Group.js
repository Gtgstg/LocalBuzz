import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import { chatsRef } from './Firebase';

const Group = () => {
    const dispatch = useDispatch();
    const groups = useSelector((state)=>state.groups).payload;
    const [last,setLast] = useState({});
    useEffect(()=>{
        const unsubscribe = chatsRef
        .onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    return message;
                })
            let dict = {}    
            messagesFirestore.forEach(element => {
                if(!(element["user"]["group"] in dict))
                    dict[element["user"]["group"]] = element
                else if(element["createdAt"]>dict[element["user"]["group"]]["createdAt"]){
                    dict[element["user"]["group"]] = element
                }
            });
            setLast(dict)
        })
        return () => unsubscribe()
    },[]);
    // const showLastMessage =()=>{
    //     console.log(groups);
    //     for(let i=0;i<groups.length;i++){
    //         let group = groups[i]["id"]
    //         const unsubscribe = chatsRef
    //         .where('user.group','==',group)
    //         .orderBy('createdAt','desc')
    //         .limit(1)
    //         .onSnapshot((querySnapshot) => {
    //             const messagesFirestore = querySnapshot
    //                 .docChanges()
    //                 .filter(({ type }) => type === 'added')
    //                 .map(({ doc }) => {
    //                     const message = doc.data();
    //                     return message;
    //                 })
    //             let x = last;
    //             if(messagesFirestore.length){
    //                 x[groups]=messagesFirestore[0];
    //             }
    //             else{
    //                 x[groups]={"text":""};
    //             }
    //             // console.log(x);
    //             setLast(x);
    //         })
    //         return () => unsubscribe();
    //     }
    // }
    return (
        <View >
            <View style={styles.header}>
                <Text style = {styles.heading}>Groups</Text>
                <TouchableOpacity
                    style = {styles.new}
                    onPress={async() => {
                        // await dispatch(allActions.counter.getAsyncUser());
                        await dispatch(allActions.counter.dec());
                    }}
                >
                    <Text style={{fontFamily: "Roboto",fontSize: 13,textAlign: "right",color: "#754EFF"}}>New Group</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white' }}>
                <FlatList
                    data={groups}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            !item.invite && <TouchableOpacity
                                style={styles.touchStyle}
                                onPress={async() => {
                                    // setTouchStyle({backgroundColor:'#8D58FF'})
                                    await dispatch(allActions.counter.add(item));
                                    // console.log(useSelector((state)=>state.chatRoom).payload);
                                    await dispatch(allActions.counter.inc());
                                }}
                            >

                                <Image style={{ top: 13, left: 16, width: 56, height: 56, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../../assets/Images/Cartype/SUV.png')} />
                                <View>
                                    <Text style={styles.menu}>{item["group_name"]}</Text>
                                    <View style={{flexDirection:"row", left:25, top:14, fontSize:15}}>
                                        <Text style={{fontWeight:"bold",fontSize:15}}>{last[item["id"]]?last[item["id"]]["user"]["name"]+": ":""}</Text>
                                        <Text style={{fontSize:15}}>{last[item["id"]]?last[item["id"]]["text"]:""}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 102,
        backgroundColor:"#F2F2F6"
    },
    heading:{
        height:42,
        width:117,
        top:53,
        left:20,
        fontWeight:"bold",
        fontSize:35,
        color: "#8D58FF"
    },
    new:{
        width: 74,
        height: 15,
        left: '80%',
        top: 33
    },
    menu: {
        left: 25,
        top: 13,
        height: 22,
        fontWeight: "bold",
        fontSize: 17,
    },
    touchStyle: {
        height: 81,
        flexDirection:"row",
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
    }
});

export default Group;