import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

const Header = (props, {navigation}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
            <TouchableOpacity style={styles.buttonUser}>
                    <Ionicons name="md-person" size={25} color="white"/>
            </TouchableOpacity>
        </View>
    );
}

export default Header;
