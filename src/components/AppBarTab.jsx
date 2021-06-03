import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text.jsx';

const styles = StyleSheet.create({
    appBar:{
        flexDirection: 'row',
        padding: 1
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF'
    }
});

const AppBarTab = () => {
    return(
        <View style = {styles.appBar}>
            <Pressable>
                <Link to = '/repositories'>
                    <Text style = {styles.textStyle}>Repositories</Text>
                </Link>
            </Pressable>
            <Pressable>
                <Link to = '/signin'>
                <Text style = {styles.textStyle}>Sign in</Text>
                </Link>
            </Pressable>
        </View>
    )
}

export default AppBarTab;