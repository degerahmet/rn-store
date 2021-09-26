import React from 'react';

import {View,Text} from  'react-native';
import Products from '../Products';

import styles from './Home.style';

const Home = () =>{
    return(
        <View style={styles.container}>
            <Products/>
        </View>
    );
};

export default Home;