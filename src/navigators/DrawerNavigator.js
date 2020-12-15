
import React,{useState} from "react";
import { Image,SafeAreaView,StyleSheet,View,Text,Modal,TouchableHighlight } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import Account from "../screens/Account";
import * as Linking from 'expo-linking';
import {LinearGradient} from 'expo-linear-gradient'
// import { useDispatch,useSelector } from 'react-redux';
// import allActions from '../actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      {/* <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      /> */}
      <LinearGradient style={{width:67,height:67,borderRadius:67/2.0,top:40,left:20}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Image style={{top:5, width:67,height:50, overflow: 'hidden',tintColor:'white'}} resizeMode="contain" source={require('../../assets/acc.png')} />
      </LinearGradient>
      <DrawerContentScrollView {...props} style={{top:30}}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://localbuzz247.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://localbuzz247.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
        <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Do you want to Logout?:</Text>
                        <View flexDirection="row">
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#754EFF" }}
                        onPress={async () => {
                          await AsyncStorage.removeItem("user")
                          await props.navigation.navigate('Logsign');
                            setModalVisible(!modalVisible);
                        }}
                        >
                        <Text style={styles.textStyle}>Logout</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#754EFF",left:10 }}
                                onPress={async () => {
                                    setModalVisible(!modalVisible);
                                }}
                                >
                                <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableHighlight>
                                </View>
                    </View>
                    </View>
                </Modal>
          <DrawerItem
            label="Logout"
            onPress={async() => {
              await setModalVisible(true);
              // await dispatch(allActions.counter.auth());
            }
            }
          />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.localbuzz247.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top:15
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
tag: {
    height: 92,
    backgroundColor: "#F2F2F6",
    left: 0,
    top: 0

},
flatList: {
    marginLeft: 16
},
header: {
    height: 88,
    backgroundColor:"#F2F2F6",
    flexDirection:'row'
},
heading:{
    height:20,
    width:97,
    top:51,
    left:'150%'
},
new:{
    width: 74,
    height: 15,
    left: 285,
    top: 33,
    fontFamily: "Roboto",
    fontSize: 13,
    textAlign: "right",
    color: "#754EFF",
},
menu: {
    left: 25,
    top: 13,
    height: 22,
    // fontWeight: "bold",
    fontSize: 17,
},
touchStyle: {
    height: 52,
    flexDirection:"row",
    backgroundColor: 'white',
    borderBottomWidth: .7,
    borderBottomColor: 'gray',
},
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#754EFF',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator}
      options={
        {headerShown: false}
        }
          // options={{
          //       headerStyle: { height: 88 },
          //       headerTitleAlign: 'center',
          //       headerTitle: () => <Image style={{ width: 101, height: 35 }} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
          //   }}
      />
      <Drawer.Screen name="My Account" component={Account} 
      options={
          {headerShown: false}
          }/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;