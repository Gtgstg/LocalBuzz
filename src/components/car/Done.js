import React from 'react';
import { View, StyleSheet,Image,Text,TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
const Done = () => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const viewStyle = {
        backgroundColor:'white',
        height:screenHeight+45
    }
    return (
        <View style={viewStyle}>
            <Image style={{ top: 200, left: 35, width: 305, height: 232 }}
                resizeMode="contain"
                source={require('../../../assets/Images/Overview/Illustration.png')}
            />
            <Text style={styles.Text}>We are finding the perfect group for you! Will notify you soon.</Text>
            <TouchableOpacity
                // onPress={
                //     // async ()=> {
                //     //     await dispatch(allActions.counter.postAsyncData(tags));
                //     //     await dispatch(allActions.counter.increment());
                //     // }

                // }
                style={styles.done}
            >
                <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    Text:{
        width:250,
        height:36,
        left:69,
        top:220,
        textAlign:"center",
        fontSize:15,
        color:'rgba(0,0,0,0.6)'
    },
    done: {
        top:380,
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

export default Done;