
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GroupScreen from "../screens/GroupScreen";
import ComingSoon from "../screens/ComingSoon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  // const { navigation, route } = props;
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });
	const customTabBarStyle = {
    activeTintColor: '#754EFF',
    inactiveTintColor: 'grey',
    allowFontScaling: true,
    labelStyle: { fontSize: 12, paddingTop: 5 },
    tabStyle: { paddingTop: 8,paddingBottom:34 },
    style: { height: 83, backgroundColor:'#F4F4F4'},
  }
  return (
    <Tab.Navigator initialRouteName='Home' tabBarOptions={customTabBarStyle}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        // options={{
        //         headerStyle: { height: 88 },
        //         headerTitleAlign: 'center',
        //         headerTitle: () => <Image style={{ width: 101, height: 35 }} resizeMode="contain" source={require('../../assets/Logo/LOGOtransparent.png')} />
        //     }}
      />
      <Tab.Screen name="Group" component={GroupScreen} 
      options={{
        headerShown:false
      }}/>
      <Tab.Screen name="Explore" component={ComingSoon}
      options={{
        headerShown:false,
        tabBarVisible:false
      }}
       />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;