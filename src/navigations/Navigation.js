import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/homeScreen/HomeScreen';
import MyPoing from './MyPoing';
import Search from './Search';
import Tiket from './Tiket';
import SearchPage from '../screens/SearchPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === '홈') {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
          }
          if (route.name === '검색') {
            return <AntDesign name="search1" size={size} color={color} />;
          }
          if (route.name === '티켓') {
            return (
              <Ionicons
                name={focused ? 'md-fast-food-sharp' : 'md-fast-food-outline'}
                size={size}
                color={color}
              />
            );
          }
          if (route.name === '마이포잉') {
            return (
              <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="티켓" component={Tiket} />
      <Tab.Screen name="마이포잉" component={MyPoing} options={{ tabBarBadge: 5 }} />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigator} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  calander: {
    marginRight: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
