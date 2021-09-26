import React from 'react';
import { View, Text,TextInput } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import  styles  from './Header.style';

export default function Header() {
    return (
        <View style={styles.container}>
                <Text style={styles.store_text}>STORE</Text>
        </View>
    )
}
