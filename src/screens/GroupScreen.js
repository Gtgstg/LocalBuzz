import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar,TouchableOpacity,Text } from 'react-native';
import { useSelector } from 'react-redux';
import Overview from './../components/car/Overview';
import Group from './../components/chat/Group';
import Message from '../components/chat/Message';
import Info from './../components/chat/Info';
import Newgroup from './../components/chat/Newgroup';

const GroupScreen = ({ navigation }) => {
    const chatCounter = useSelector((state) => state.chatCounter);
    const [screen, setScreen] = useState(null);
    const groups = useSelector((state)=>state.groups).payload;
    console.log(groups);
    useEffect(() => {
        switch (chatCounter) {
            case 0:
                setScreen(<Group/>)
                break;
            case 1:
                setScreen(<Message/>)
                break;
            case 2:
                setScreen(<Info navigation={navigation}/>)
                break;
            case -1:
                setScreen(<Newgroup navigation={navigation}/>)
                break;
            default:
                break;
        }
    }, [chatCounter]);
    return (
        <View style = {styles.view}>
            {groups.length>0 && groups[groups.length-1].invite ? (
                <Overview invite_tag={groups[groups.length-1].invite}/>
            ) : screen}
        </View>
    );
}

GroupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        // marginTop: StatusBar.currentHeight,
    }
});

export default GroupScreen;