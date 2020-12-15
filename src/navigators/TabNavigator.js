
import React from "react";
import { Image} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GroupScreen from "../screens/GroupScreen";
import ComingSoon from "../screens/ComingSoon";
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  const chatCounter = useSelector((state) => state.chatCounter);
  // const { navigation, route } = props;
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });
	const customTabBarStyle = {
    activeTintColor: '#754EFF',
    inactiveTintColor: 'grey',
    allowFontScaling: true,
    labelStyle: { fontSize: 12,top:8 },
    tabStyle: { paddingTop: 8,paddingBottom:34 },
    style: { height: 83, backgroundColor:'#F4F4F4'}
  }
  return (
    <Tab.Navigator initialRouteName='Home' 
    tabBarOptions={customTabBarStyle}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        // console.log(focused+" "+route.name)
        // console.log(route.name==='Home')
        if (route.name === 'Home') {
          return !focused
            ? <Image style={{ top:8,width: 37, height: 29, overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Home.png')} />
            : <Image style={{ top:8,width: 37, height: 29, overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Home_Active.png')} />;
        } else if (route.name === 'Groups') {
          return !focused ? <Image style={{ top:8,width: 51, height: 29, overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Group.png')} /> :
          <Image style={{ top:8,width: 51, height: 29, overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Group_active.png')} />;
        }
        return <Image style={{ top:8,width: 29, height: 29,overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Explore.png')} />;
        // You can return any component that you like here!
      },
    })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        // options={{
        //   tabBarIcon:({tintColor})=>{
        //     <Image style={{ width: 40, height: 40, overflow: 'hidden'}} resizeMode="contain" source={require('../../assets/Images/Tabicons/Home.png')} />
        //   }
        //     }}
      />
      <Tab.Screen name="Groups" component={GroupScreen} 
      options={{
        headerShown:false,
        tabBarVisible:(chatCounter==0) ?true:false
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