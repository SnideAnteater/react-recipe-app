import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import HomeScreen from '../screens/Home/Home'

const Stack = createStackNavigator();

function MainNavigator() {
    return(
      <Stack.Navigator
        screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
            }
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    )
  } 

const Drawer = createDrawerNavigator();

function DrawerStack() {
  console.log("DrawerStack")
    return(
      <Drawer.Navigator
        drawerPosition='left'
        initialRouteName='Main'
        drawerStyle={{
          width: 250
        }}
        screenOptions={{headerShown: false}}
        drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
      >
        <Drawer.Screen name='Main' component={MainNavigator} />
      </Drawer.Navigator>
    )
  }

  export default function AppContainer() {
    return(
      <NavigationContainer>
        <DrawerStack/>
      </NavigationContainer>
    )
  }