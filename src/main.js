import React, { Component } from 'react';
import {
    StyleSheet, 
    Dimensions, 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./components/LoginPage";


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
                        name='LoginPage'
                        component={LoginPage}
                    
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