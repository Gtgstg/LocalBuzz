import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Form from '../../constants/CarForm'
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';

const Type = ({ counter }) => {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.tag);
    // const {default:image} = import('../../assets/Images/Cartype/SUV.png');
    return (
        <View>
            <FlatList
                data={Form[counter].data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={async () => {
                                await dispatch(allActions.tag.push(item.name));
                                await dispatch(allActions.counter.increment());
                            }}
                        >
                            <Image style={{ top: 14.24, left: 20, width: 91, height: 31.53 }} resizeMode="contain" source={require('../../../assets/Images/Cartype/SUV.png')} />
                            {/* <Image style={{ top: 14.24, left: 20, width: 91, height: 31.53 }} resizeMode="contain" source={{uri:Image.resolveAssetSource(image).uri}} /> */}
                            <View style={{ top: 12, left: 33 }}>
                                <Text style={styles.menu}>{item.name}</Text>
                                <FlatList
                                    horizontal
                                    data={item.features}
                                    keyExtractor={(feature, index) => index.toString()}
                                    renderItem={({ item }) => {
                                        return (
                                            <Text style={styles.features}>{item}, </Text>
                                        );
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
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
    }
});

export default Type;