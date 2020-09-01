import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title='Car'
                onPress={() => navigation.navigate('Car')}
            />
        </View>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        headerStyle: { height: 88 },
        headerTitleAlign: 'center',
        headerTitle: () => <Image style={{ width: 101, height: 35 }} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
    };
};

const styles = StyleSheet.create({});

export default HomeScreen;