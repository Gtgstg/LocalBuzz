import React,{useCallback,useEffect,useState} from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-community/masked-view';
const Slider = () => {
    const names = [
        'Together is saving', 'Together is fun', 'Together is efficient','Together is powerful'
    ]
    const [newName, setnewName] = useState(names[0]);
    const content = [
        'Meeting Like minded is always fun, and our unique AI algorithm ensures you fnd them 💰',
        'Meeting Like minded is always fun, and our unique AI algorithm ensures you fnd them 🔍',
         'Instead of one person looking for best prices, you can unleash the team potential ⚡',
         'Have you notices how sellers entice you with offers if you buy in bulk 😀'
    ]
    const [newContent, setnewContent] = useState(content[0]);
    let index = 1;
    const shuffle = useCallback(() => {
        setnewName(names[index]);
        setnewContent(content[index]);
        index=(index+1)%4;
    }, []);
    const GradientText = props => (
        <MaskedView style={{top:'100%'}}maskElement={<Text {...props} />}>
          <LinearGradient colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedView>
      );
    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <View>
            <LinearGradient style={{width:67,height:67,borderRadius:67/2.0,top:64,left:40}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Image></Image>
            </LinearGradient>
            <GradientText style={{color:'#744DFF',fontSize:35,fontWeight:'bold',alignSelf:'center'}}>{newName}</GradientText>
            <Text style={{color:'grey',fontStyle:'italic',alignSelf:'center',width:'80%',fontSize:16,top:'105%'}}>{newContent}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
});

export default Slider;