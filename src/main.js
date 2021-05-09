import React, { Component } from 'react';
import {
    StyleSheet, 
    Dimensions, 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import FirstPage from "./components/FirstPage";
import HappyDiaryPage from "./components/HappyDiaryPage";
import SadDiaryPage from "./components/SadDiaryPage";
import SettingPage from "./components/SettingPage";
import SocialPage from "./components/SocialPage";
import AddDiaryPage from "./components/AddDiaryPage";
import DetailPage from "./components/DetailPage";
import HappyPage from "./components/HappyPage";
import SadPage from "./components/SadPage";

const Stack = createStackNavigator();
class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen 
                        name='HomePage'
                        component={HomePage}
                    />
                    <Stack.Screen 
                        name='LoginPage'
                        component={LoginPage}
                    />
                    <Stack.Screen 
                        name='FirstPage'
                        component={FirstPage}
                    />
                    <Stack.Screen 
                        name='RegisterPage'
                        component={RegisterPage}
                    />
                    <Stack.Screen 
                        name='HappyDiaryPage'
                        component={HappyDiaryPage}
                    />
                    <Stack.Screen 
                        name='SadDiaryPage'
                        component={SadDiaryPage}
                    />
                    <Stack.Screen 
                        name='SettingPage'
                        component={SettingPage}
                    />
                    <Stack.Screen 
                        name='SocialPage'
                        component={SocialPage}
                    />
                    <Stack.Screen
                        name='AddDiaryPage'
                        component={AddDiaryPage}
                    />
                    <Stack.Screen
                        name='DetailPage'
                        component={DetailPage}
                    />
                    <Stack.Screen
                        name='HappyPage'
                        component={HappyPage}
                    />
                    <Stack.Screen
                        name='SadPage'
                        component={SadPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Main;