import React from 'react';
import { View, StyleSheet, Image, Button,TextInput,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../actions/index';
const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [value,setValue] = React.useState('');
    return (
        <View>
            <Text>Phone Number</Text>
            <TextInput
                onChangeText={text => setValue(text)}
                value={value}
            />
            <Text>Password</Text>
            <TextInput></TextInput>
            <Button
                title='Login'
                onPress={async () =>{
                    await dispatch(allActions.counter.getAsyncUser(value));
                    await dispatch(allActions.tag.push(value));
                    await navigation.navigate('Home');
                }}
            />
        </View>
    );
}

LoginScreen.navigationOptions = () => {
    return {
        headerStyle: { height: 88 },
        headerTitleAlign: 'center',
        headerTitle: () => <Image style={{ width: 101, height: 35 }} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
    };
};

const styles = StyleSheet.create({});

export default LoginScreen;