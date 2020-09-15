import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Tag from './Tag';
import { useSelector, useDispatch } from 'react-redux';
import Form from './../constants/CarForm';
import Title from './Title';
import ProgressBar from './ProgressBar';
const Header = ({ type }) => {
    const title = Form[type].title;
    const percentage = Math.floor((type * 100) / (Form.length - 1));
    const tags = useSelector((state) => state.tag);

    return (
        <View style={styles.header}>
            {
                type<6 &&
            <FlatList style={styles.flatList}
                horizontal
                data={tags.slice(1)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Tag title={item} />
                    );
                }}
            />
            }
            {
                type == 6 && 
                <View style={styles.overview}/>
            }
            <Title title={title} />
            <ProgressBar percentage={percentage} />
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 147,
        backgroundColor: "#F2F2F6",
        left: 0,
        top: 0

    },
    flatList: {
        marginLeft: 16
    },
    overview:{
        height:85
    }
});

export default Header;