import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, StatusBar,BackHandler,Alert } from 'react-native';
import Header from './../commons/Header';
import { FlatList } from 'react-native-gesture-handler';
import Find from './../components/car/Find';
import Brand from './../components/car/Brand';
import Type from './../components/car/Type';
import Overview from './../components/car/Overview';
import Done from './../components/car/Done';
import Location from './../components/car/Location';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
const CarScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const tag = useSelector((state) => state.tag);
    const [formData, setFormData] = useState(null);
    const backAction = async () => {
        console.log("hii")
        await dispatch(allActions.tag.tag_pop());
        await dispatch(allActions.counter.decrement());
        // Alert.alert("Hold on!", "Are you sure you want to go back?", [
        //   {
        //     text: "Cancel",
        //     onPress: () => null,
        //     style: "cancel"
        //   },
        //   { text: "YES", onPress: () => BackHandler.exitApp() }
        // ]);
        return true;
      };
      useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      },[])
    useEffect(() => {
        switch (counter) {
            case 0:
                setFormData(<Find counter={counter} navigation={navigation}/>)
                break;
            case 1:
                setFormData(<Type counter={counter} />)
                break;
            case 2:
                setFormData(<Brand counter={counter} />)
                break;
            case 3:
                setFormData(<Find counter={counter} />)
                break;
            case 4:
                setFormData(<Find counter={counter} />)
                break;
            case 5:
                setFormData(<Location counter={counter} searches={true} />)
                break;
            case 6:
                setFormData(<Overview/>)
                break;
            case 7:
                setFormData(<Done navigation={navigation}/>)
                break;
            default:
                navigation.navigate("Home");
                break;
        }
        
    }, [counter])
    // const counter = useSelector((state)=>state.counter);
    // const customAsyncData = useSelector((state)=>state.customAsyncData).payload;
    // const {author,date,title}=customAsyncData &&
    // customAsyncData.slideshow &&
    // customAsyncData.slideshow.author ? customAsyncData.slideshow :{author:"",date:"",title:""};
    return (
        <View style={styles.view}>
            {
                counter>-1 && counter<7 &&
                <Header
                    type={counter}
                />
            }
            {formData}
            {/* <Text>{counter}</Text>
            <Text>{author}</Text>
            <Text>{date}</Text>
            <Text>{title}</Text>
            <Button 
                title="press"
                onPress = {()=>
                    dispatch(allActions.counter.increment())
                }
            />
            <Button 
                title="press down"
                onPress = {()=>
                    dispatch(allActions.counter.decrement())
                }
            />
            <Button 
                title="press new"
                onPress = {()=>
                    dispatch(allActions.counter.getAsyncData())
                }
            /> */}
        </View>
    );
}

CarScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    }
});

export default CarScreen;