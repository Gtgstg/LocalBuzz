import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Header from './../commons/Header';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import allActions from '../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import Find from './../components/Find';
import Brand from './../components/Brand';
import Type from './../components/Type';
import Overview from './../components/Overview';
import Done from './../components/Done';

const CarScreen = () => {
    // const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const [formData, setFormData] = useState(null);
    useEffect(() => {
        switch (counter) {
            case 0:
                setFormData(<Find counter={counter} />)
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
                setFormData(<Find counter={counter} search={true} />)
                break;
            case 6:
                setFormData(<Overview />)
                break;
            case 7:
                setFormData(<Done/>)
            default:
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
                counter<7 &&
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