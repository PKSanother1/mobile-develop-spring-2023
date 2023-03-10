import React, {useState} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1 from './components/Lab1';

import spisok from './assets/spisok.png'

const Tab = createBottomTabNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Feed" backBehavior='history' screenOptions={{
                tabBarActiveTintColor: '#e91e63', 
                tabBarActiveBackgroundColor: '#F8EDE5',
                color: 'black', 
                fontSize: 12,
                tabBarLabelStyle: {fontSize: 12},
            }}>

                <Tab.Screen
                    name="To do list (useState, useEffect)"
                    component={Lab1}
                    options={{
                        tabBarLabel: 'Lab1',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={styles.tinyLogo} source={spisok}/>
                            
                        ) 
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  
});

export default Navigate;