import React from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';

import styles from './ProductCard.style';

export default function ProductCard({product,onPress}) {
    return (

        
            <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.img_container}>

                <Image
                    style={styles.image}
                    source={{
                    uri: product.image,
                    }}
                /> 

            </View>

            <View style={styles.content}>
                <View  style={styles.content_top}>
                    <Text style={styles.title}>{product.title}</Text>
                </View>
                <View  style={styles.content_bottom}>
                    <Text style={styles.price}>${product.price}</Text>
                </View>
            </View>
            </TouchableOpacity>
    )
}
