import React, { useEffect, useState } from 'react';
import { Button,Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import Form from '../../constants/CarForm';
import Group from './Group';
import DatePicker from 'react-native-datepicker';

const Newgroup = ({ navigation }) => {
    console.log(navigation);
    // const dispatch = useDispatch();
    // const groups = useSelector((state) => state.groups).payload;
    // const [name, setName] = useState("");
    // const [group, setGroup] = useState("");
    // const [tags, setTags] = useState([]);
    // const user = useSelector((state) => state.user).payload;
    // const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const [value,setValue] = React.useState('');
    const [date,setDate] = React.useState('');
    return (
        // <View style={{ backgroundColor: "white", flex: 1 }}>
        //     <Text>New Group Name:</Text>
        //     <TextInput
        //         onChangeText={text => setName(text)}
        //         value={name}
        //     ></TextInput>
        //     <Text>Tags:</Text>
        //     <SafeAreaView style={{ backgroundColor: "grey", height: 200 }}>
        //             <FlatList
        //                 data={Form}
        //                 keyExtractor={(item, index) => index.toString()}
        //                 renderItem={({ item }) => {
        //                     const curr = item.title
        //                     return (
        //                         <View>
        //                             <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        //                             <FlatList
        //                                 data={item.data}
        //                                 keyExtractor={(feature, index) => index.toString()}
        //                                 renderItem={({ item }) => {
        //                                     return (
        //                                         <TouchableOpacity
        //                                             onPress={() => {
        //                                                 const newtag = [...tags]
        //                                                 if (curr === 'Find your right car') {
        //                                                     newtag[0] = item
        //                                                 }
        //                                                 else if (curr === 'Car Type') {
        //                                                     newtag[1] = item.name
        //                                                 }
        //                                                 else if (curr === 'Brands') {
        //                                                     newtag[2] = item.name
        //                                                 }
        //                                                 else if (curr === 'Price Range') {
        //                                                     newtag[3] = item
        //                                                 }
        //                                                 else if (curr === 'How Soon?') {
        //                                                     newtag[4] = item
        //                                                 }
        //                                                 else if (curr === 'Location') {
        //                                                     newtag[5] = item
        //                                                 }
        //                                                 setTags(newtag);
        //                                             }}
        //                                         >
        //                                             {typeof (item) == "string" &&
        //                                                 <Text>{item}</Text>
        //                                             }
        //                                             {typeof (item) != "string" &&
        //                                                 <Text >{item.name}</Text>
        //                                             }
        //                                         </TouchableOpacity>
        //                                     );
        //                                 }}
        //                             />
        //                         </View>
        //                     )
        //                 }}
        //             />
        //         <View style={{backgroundColor:"yellow"}}>
        //             <Text>Selected Tags:</Text>
        //             <FlatList
        //                 style={{ height: 50 }}
        //                 horizontal
        //                 data={tags}
        //                 keyExtractor={(item, index) => index.toString()}
        //                 renderItem={({ item }) => {
        //                     return (
        //                         <Text>{item}, </Text>
        //                     )
        //                 }}
        //             />
        //         </View>
        //     </SafeAreaView>
        //     <TouchableOpacity
        //         style={styles.done}
        //         onPress ={async ()=>{
        //                 await dispatch(allActions.counter.postAsyncCreateData({name,tags}));
        //             }
        //         }
        //     >
        //         <Text style={styles.doneText}>Submit</Text>
        //     </TouchableOpacity>
        //     <Text>Assign Members To group</Text>
        //     <SafeAreaView style={{ backgroundColor: 'grey', height: 140 }}>
        //             <FlatList
        //                 data={groups}
        //                 keyExtractor={(item, index) => index.toString()}
        //                 renderItem={({ item }) => {
        //                     return (
        //                         <TouchableOpacity
        //                             onPress={() => {
        //                                 setGroup(item)
        //                             }}
        //                         >
        //                             <Text>{item.group_name}</Text>
        //                         </TouchableOpacity>
        //                     )
        //                 }}
        //             />
        //         <View style={{backgroundColor:"yellow"}}>
        //             <Text>Selected Group: {group.group_name}</Text>
        //         </View>
        //     </SafeAreaView>
        //     <SafeAreaView style={{ backgroundColor: 'grey', height: 140 }}>
        //             <FlatList
        //                 data={user}
        //                 keyExtractor={(item, index) => index.toString()}
        //                 renderItem={({ item }) => {
        //                     return (
        //                         <TouchableOpacity
        //                             onPress={() => {
        //                                 if (users.indexOf(item) !== -1) {
        //                                     setUsers(users.filter((x) => (x !== item)))
        //                                 }
        //                                 else {
        //                                     setUsers([...users, item])
        //                                 }
        //                             }}
        //                         >
        //                             <Text>{item.user_name}</Text>
        //                         </TouchableOpacity>
        //                     )
        //                 }}
        //             />
        //         <View style={{backgroundColor:"yellow"}}>
        //         <Text>Selected Users</Text>
        //             <FlatList
        //                 horizontal
        //                 data={users}
        //                 keyExtractor={(item, index) => index.toString()}
        //                 renderItem={({ item }) => {
        //                     return (
        //                         <Text>{item.user_name} </Text>
        //                     )
        //                 }}
        //             />
        //         </View>
        //     </SafeAreaView>
        //     <TouchableOpacity
        //     style={styles.done}
        //     onPress ={async ()=>{
        //         await dispatch(allActions.counter.postAsyncAddData({group,users}));
        //     }

        //     }
        //     >
        //         <Text style={styles.doneText}>Submit</Text>
        //     </TouchableOpacity>
        // </View >
        <View>
            <Text>Name:</Text>
            <TextInput
                onChangeText={text => setValue(text)}
                value={value}
            ></TextInput>
            <Text>Expected Date:</Text>
            <DatePicker
            style={{width: 200}}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2121-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
            },
            dateInput: {
                marginLeft: 36
            }
            // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {setDate(date)}}
      />
            <Button
                title='Submit'
                onPress={async () =>{
                    await dispatch(allActions.tag.push(value));
                    await dispatch(allActions.tag.push(date));
                    await navigation.navigate('Car');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 102,
        backgroundColor: "#F2F2F6"
    },
    heading: {
        height: 42,
        width: 117,
        top: 53,
        left: 20,
        fontWeight: "bold",
        fontSize: 35,
        color: "#8D58FF"
    },
    new: {
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
        fontWeight: "bold",
        fontSize: 17,
    },
    touchStyle: {
        height: 81,
        flexDirection: "row",
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
    },
    done: {
        // top:380,
        backgroundColor: "#8D58FF",
        width: 295,
        height: 44,
        alignSelf: 'center',
        borderRadius: 10
    },
    doneText: {
        textAlign: 'center',
        color: 'white',
        height: 20,
        top: 12
    }
});

export default Newgroup;