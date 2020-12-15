import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Form from '../../constants/CarForm'
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';
// import SearchBar from '../../commons/SearchBar';
import { SearchBar } from 'react-native-elements';
const Brand = ({ counter }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(Form[counter].data);
    console.log(Form[counter].data);
    const [masterDataSource, setMasterDataSource] = useState(Form[counter].data);
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.name
              ? item.name.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
      const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
          </Text>
        );
      };
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    
      const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
      };
    return (
        <View style={{ backgroundColor: 'white',flex:1 }}>
            {/* <SearchBar /> */}
            <View style={{backgroundColor:'grey',alignSelf:'center',width:'90%'}}>
                <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Search"
                value={search}
                platform="android"
                />
            </View>
            <FlatList
                data={filteredDataSource}
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
                            <Image style={{ top: 8, left: 20, width: 28, height: 29 }} resizeMode="contain" source={require('../../../assets/Images/Brands/notsure.png')} />
                            <Text style={styles.menu}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 20,
        left: 74,
        top: 13,
        fontSize: 17,
        textAlign: 'center',
    },
    touchStyle: {
        height: 44,
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
        flexDirection: 'row'
    }
});

export default Brand;