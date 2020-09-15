import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Form from './../constants/CarForm';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../commons/SearchBar';
// import GetLocation from 'react-native-get-location'
const Find = ({ counter, search }) => {
    const dispatch = useDispatch();
    // const [touchStyle,setTouchStyle] =useState({
    //     backgroundColor:'white',
    //     borderBottomWidth:.2,
    //     borderBottomColor: 'gray',
    // });
    const [location,SetLocation] = useState(null);
    const googleAPIKey = 'AIzaSyBgWBCPLur7RzrlXLSpGZQHdHel8c6umoA';
    const radius = 4 * 1000;
    useEffect(()=>{
        if(location){
            apiwork();
        }
    },[location]);
    const apiwork = () =>{
        const url =
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
        location["coords"]["latitude"] +
        ',' +
        location["coords"]['longitude']+"'" +
        '&radius=' +
        radius +
        '&type=cafe' +
        // placeType +
        '&key=' +
        googleAPIKey;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
            let places=[];
            for (let googlePlace of res.results) {
            var place = {};
            var myLat = googlePlace.geometry.location.lat;
            var myLong = googlePlace.geometry.location.lng;
            var coordinate = {
                latitude: myLat,
                longitude: myLong,
            };
            place['placeTypes'] = googlePlace.types;
            place['coordinate'] = coordinate;
            place['placeId'] = googlePlace.place_id;
            place['placeName'] = googlePlace.name;
            places.push(place);
            }
            // Show all the places around 4 km from San Francisco.
            console.log(
            'The places around you: ' +
            places.map(nearbyPlaces => nearbyPlaces.placeName),
            );
        })
        .catch(error => { 
            console.log(error);
        });
    }
    const searchBar = () => {
        if (search === true) {
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
                <SearchBar />
            );
        }
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            {searchBar()}
            <FlatList
                data={Form[counter].menu}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={async () => {
                                // setTouchStyle({backgroundColor:'#8D58FF'})
                                await dispatch(allActions.tag.push(item));
                                await dispatch(allActions.counter.increment());
                            }}
                        >
                            <Text style={styles.menu}>{item}</Text>
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

export default Find;