import React,{useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity,TextInput,Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-community/masked-view';
import allActions from '../actions/index';
import moment from 'moment';
import { useDispatch,useSelector } from 'react-redux';
const Edit = ({ navigation }) => {
      const user = useSelector((state)=>state.user).payload;
      const dispatch = useDispatch();
      const GradientText = props => (
        <MaskedView style={{top:40,left:32}} maskElement={<Text {...props} />}>
          <LinearGradient colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedView>
      );
      const [dob,setDob]=useState(new Date(user[0].dob).getDate()+"/"+new Date(user[0].dob).getMonth()+"/"+new Date(user[0].dob).getFullYear());
      const [gender,setGender]=useState(1);
      const [location,setLocation]=useState(user[0].location);
      const [designation,setDesignation]=useState(user[0].designation);
    return (
        <View>
            <TouchableOpacity
                    style={{top:40,left:16,width:20,height:30}}
                    onPress={
                        async ()=>{
                            navigation.navigate('Detail');
                        }
                    }
                >
                    <Image style={{ width: 30, height: 30, overflow: 'hidden', borderRadius: 40}} resizeMode="contain" source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <GradientText style={styles.title}>Edit</GradientText>

            <TouchableOpacity
                style={{top:30,alignSelf:'flex-end',flexDirection:'row',right:10}}
                onPress={
                    async ()=>{
                        let parts = await dob.split("/");
                        let dt = await new Date(parseInt(parts[2], 10),
                                        parseInt(parts[1], 10),
                                        parseInt(parts[0], 10));
                        await dispatch(allActions.counter.edit([user[0].id,dt,gender,designation,location])); 
                        await navigation.navigate("Detail")
                    }
                }
            >
                <Text style={{fontSize:17,color:'#744DFF'}}> DONE</Text>
            </TouchableOpacity>
            <View style={{backgroundColor:'white',top:35,height:256}}>
                <View style={{flexDirection:"row"}}>
                <LinearGradient style={{width:25,height:25,borderRadius:29/2.0,top:12,left:13}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Image style={{top:2, width:24,height:20, overflow: 'hidden',tintColor:'white'}} resizeMode="contain" source={require('../../assets/acc.png')} />
                </LinearGradient>
                    <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{(!user[0].dob || user[0].dob.length==0)?"DD/MM/YYYY":new Date(user[0].dob).getDate()+"/"+new Date(user[0].dob).getMonth()+"/"+new Date(user[0].dob).getFullYear()}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row",height:52}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/calender.png')} />
                    <TextInput 
                            style={{fontSize:16,left:50,height:30,alignSelf:'center',width:102,borderBottomColor:"#744DFF",borderBottomWidth:1}}
                            placeholder={(!user[0].dob || user[0].dob.length==0)?"DD/MM/YYYY":new Date(user[0].dob).getDate()+"/"+new Date(user[0].dob).getMonth()+"/"+new Date(user[0].dob).getFullYear()}
                            value={dob}
                            onChangeText={(text)=>{
                                setDob(text);
                            }}
                        />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row",height:52}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/gender.png')} />
                    <TouchableOpacity
                        style={{height:24,width:59,left:50,top:12}}
                    >
                        <LinearGradient style={{width:59,height:24,borderRadius:5}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text style={{fontSize:16,textAlignVertical:'center',color:'white',textAlign:'center'}}>Male</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{height:24,width:59,left:70,top:12}}
                    >
                        <LinearGradient style={{width:59,height:24,borderRadius:5}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text style={{fontSize:16,textAlignVertical:'center',color:'white',textAlign:'center'}}>Female</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{height:24,width:59,left:90,top:12}}
                    >
                        <LinearGradient style={{width:59,height:24,borderRadius:5}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                            <Text style={{fontSize:16,textAlignVertical:'center',color:'white',textAlign:'center'}}>Others</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                {/* <Text style={{fontSize:16,left:50,height:52,textAlignVertical:'center'}}>{(!user[0].gender || user[0].gender.length==0)?"Male":((user[0].gender==0)?"Male":(user[0].gender==1)?"Female":"Other")}</Text> */}
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row",height:52}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/loc.png')} />
                    <TextInput 
                            style={{fontSize:16,left:50,height:30,alignSelf:'center',width:286,borderBottomColor:"#744DFF",borderBottomWidth:1}}
                            placeholder={(!user[0].location || user[0].location.length==0)?"Hyderabad":user[0].dob}
                            value={location}
                            onChangeText={(text)=>setLocation(text)}
                        />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        left:60,
                        borderBottomWidth: .5,
                    }}
                />
                <View style={{flexDirection:"row",height:52}}>
                    <Image style={{width:31,height:29, overflow: 'hidden',tintColor:'#744DFF',top:12,left:13}} resizeMode="contain" source={require('../../assets/brief.png')} />
                    <TextInput 
                            style={{fontSize:16,left:50,height:30,alignSelf:'center',width:286,borderBottomColor:"#744DFF",borderBottomWidth:1}}
                            placeholder={(!user[0].designation || user[0].designation.length==0)?"Designer":user[0].dob}
                            value={designation}
                            onChangeText={(text)=>setDesignation(text)}
                        />
                </View>
                {/* <Text style={{fontSize:18,left:50,borderBottomWidth:.7,height:52,textAlignVertical:'center'}}>Facebook</Text>
                <Text style={{fontSize:18,left:50,height:52,textAlignVertical:'center'}}>Google</Text> */}
                <Text style={{left:18,color:'gray',width:'60%',fontSize:12}}>Your privacy is our utmost priority. We use this data to find the best matches for you</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    title:{
        fontSize:35,
        fontWeight:'bold'
    },
    button:{
        width:295,
        height:44,
        alignSelf:'center',
        borderColor:"#744DFF",
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        top:'80%'
    },
    button3:{
        borderRadius:10,
        width:'100%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Edit;