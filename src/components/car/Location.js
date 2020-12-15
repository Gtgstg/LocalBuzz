import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Form from '../../constants/CarForm';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
// import GetLocation from 'react-native-get-location'
const Location = ({ counter, searches }) => {
    const dispatch = useDispatch();
    // const [touchStyle,setTouchStyle] =useState({
    //     backgroundColor:'white',
    //     borderBottomWidth:.2,
    //     borderBottomColor: 'gray',
    // });
    const [location,SetLocation] = useState(null);
    const googleAPIKey = 'AIzaSyAYpqujUVaN1CnWXdcshgEX8OWRA4DGrXw';
    const radius = 4 * 1000;const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
            console.log(item);
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
    useEffect(()=>{
        if(filteredDataSource.length>0){
            console.log(filteredDataSource)
        }
        else if(location){
            apiwork();
        }
    },[location,filteredDataSource]);
    const apiwork = () =>{
        console.log(location);
        const url =
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
        location["coords"]["latitude"] +
        ',' +
        location["coords"]['longitude']+
        '&radius=' +
        radius +
        // '&type=cafe' +
        // placeType +
        '&key=' +
        googleAPIKey;
        console.log(url)
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then((res) => {
            console.log(res.results)
            setFilteredDataSource(res.results)
            setMasterDataSource(res.results)
            // console.log(res);
            // const places=[];
            // for (let googlePlace of res.results) {
            //     const place = {};
            //     const myLat = googlePlace.geometry.location.lat;
            //     const myLong = googlePlace.geometry.location.lng;
            //     const coordinate = {
            //         latitude: myLat,
            //         longitude: myLong,
            //     };
            //     place['placeTypes'] = googlePlace.types;
            //     place['coordinate'] = coordinate;
            //     place['placeId'] = googlePlace.place_id;
            //     place['placeName'] = googlePlace.name;
            //     places.push(place);
            // }
            // await console.log("pppp"+places);
            // await setFilteredDataSource(places);
            // await setMasterDataSource(places);
            // console.log("places are"+places.map(nearbyPlaces=>nearbyPlaces.placeName))
            // console.log(masterDataSource)
            // Show all the places around 4 km from San Francisco.
            // console.log(
            // 'The places around you: ' +
            // places.map(nearbyPlaces => nearbyPlaces.placeName),
            // );
        })
        .catch(error => { 
            console.log(error);
        });
    }
    const searchBar = () => {
        if (searches === true) {
            if(!location){
            navigator.geolocation.getCurrentPosition(
                (position) =>{ 
                    SetLocation(position);
                },
                (err) => console.log(err),
                { enableHighAccuracy: false, timeout: 8000, maximumAge: 10000 }
              );
            }
            return (
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
            );
        }
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            {searchBar()}
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    console.log(item);
                    return (
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={async () => {
                                // setTouchStyle({backgroundColor:'#8D58FF'})
                                await dispatch(allActions.tag.push(item.name));
                                await dispatch(allActions.counter.increment());
                            }}
                        >
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
        left: 21,
        top: 10,
        fontSize: 17,
        height: 20,
        bottom: 11
    },
    touchStyle: {
        height: 44,
        backgroundColor: 'white',
        borderBottomWidth: .7,
        borderBottomColor: 'gray',
    }
});

export default Location;