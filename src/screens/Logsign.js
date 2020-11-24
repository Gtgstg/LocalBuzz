import React from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

const Logsign = ({ navigation }) => {
    return (
        <View style={{flexDirection:"column",justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <LinearGradient
                colors={['#8C58FF','#5C41FF']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{height: '100%',width:"100%"}}
            >
                <Text style={styles.text}>Find what's buzzing in your locality</Text>
                <TouchableOpacity
                    style={styles.sign}
                    onPress={() => navigation.navigate('Sign')}
                >
                    <Text style={{color:'#6847FF',fontSize:17}}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.login}
                    onPress={async () => {
                            await navigation.navigate('Email',{page:false});
                        }
                    }
                >
                    <Text style={{color:'white',fontSize:17}}>Log in</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

Logsign.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:32,
        color:'white',
        top:"40%",
        textAlign:'center'
    },
    sign:{
        width:295,
        height:44,
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'70%'
    },
    login:{
        width:295,
        height:44,
        alignSelf:'center',
        borderColor:"white",
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'72%'
    }
});

export default Logsign;