import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from "react-native";
import Title from './../../commons/Title';

const Overview = (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user).payload;
    const invite_tag = props.invite_tag;
    const tags = props.invite_tag?[invite_tag.group_name,invite_tag.car_brand,invite_tag.car_expected_time,invite_tag.car_location,invite_tag.car_price,invite_tag.car_type,invite_tag.car_use]:useSelector((state) => state.tag);
    const screenHeight = Math.round(Dimensions.get('window').height);
    const viewStyle = {
        backgroundColor:'white',
        height:screenHeight
    }
    console.log(users);
    return (
        <View style={viewStyle}>
            {invite_tag &&
                <View style={{height:138}}>
                    <Text style={{fontWeight:"bold",fontSize:20,top:50,left:20,paddingBottom:50}}>{invite_tag.invitee} invited you to:</Text>
                    <Title title={tags[0]}/>
                </View>
            }
            <FlatList
                data={tags.slice(1)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={styles.touchStyle}

                        >
                            <Image style={{ top: 14.24, left: 20, width: 91, height: 31.53 }} resizeMode="contain" source={require('../../../assets/Images/Cartype/SUV.png')} />
                            <View style={{ top: 12, left: 33 }}>
                                <Text style={styles.menu}>{item}</Text>
                                {/* <FlatList
                                    horizontal
                                    data={item.features}
                                    keyExtractor={(feature, index) => index.toString()}
                                    renderItem={({item})=>{
                                        return ( 
                                            <Text style={styles.features}>{item}, </Text>
                                        );
                                    }}
                                /> */}
                            </View>
                        </View>
                    )
                }}
            />
            {invite_tag &&
            <View style={{top:"20%",flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity
                    onPress={
                        async ()=> {
                            await dispatch(allActions.counter.skip(users[0].id));
                            await dispatch(allActions.counter.pop());
                        }

                    }
                    style={styles.reg}
                >
                    
                        <Text style={styles.registerText}>Skip</Text>
                </TouchableOpacity>
                
                    <TouchableOpacity
                    onPress={
                        async ()=> {
                            await dispatch(allActions.counter.accept([users[0].id,invite_tag.id]));
                            await dispatch(allActions.counter.getAsyncData(users[0].id));
                        }

                    }
                    style={styles.reg}
                >
                     
                        <Text style={styles.registerText}>Accept</Text>
                </TouchableOpacity>
                </View>
            }
            {!invite_tag &&
                <TouchableOpacity
                    onPress={
                        async ()=> {
                            console.log(tags.length)
                            if(tags.length ==9){
                            
                                await dispatch(allActions.counter.postAsyncCreateData({tags}));
                            }
                            else{
                                await dispatch(allActions.counter.postAsyncData(tags));
                            }
                            await dispatch(allActions.counter.increment());
                        }

                    }
                    style={styles.register}
                >
                    
                        <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        fontSize: 17
    },
    touchStyle: {
        height: 62,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
    },
    features: {
        top: 4,
        color: "gray",
        fontSize: 12
    },
    register: {
        bottom: 180,
        backgroundColor: "#8D58FF",
        width: 295,
        height: 44,
        alignSelf: 'center',
        borderRadius: 10
    },
    registerText: {
        textAlign: 'center',
        color: 'white',
        height: 20,
        top: 12
    },
    reg: {
        bottom: 180,
        backgroundColor: "#8D58FF",
        width: '40%',
        height: 44,
        alignSelf: 'center',
        borderRadius: 10
    }
});

export default Overview;