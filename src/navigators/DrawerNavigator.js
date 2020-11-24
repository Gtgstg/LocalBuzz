
import React from "react";
import { Image,SafeAreaView,StyleSheet,View,Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import Account from "../screens/Account";
import * as Linking from 'expo-linking';
import {LinearGradient} from 'expo-linear-gradient'

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      {/* <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      /> */}
      <LinearGradient style={{top:300,width:67,height:67,borderRadius:67/2.0,top:6,left:20}} colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Image></Image>
                </LinearGradient>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
        <DrawerItem
          label="Logout"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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