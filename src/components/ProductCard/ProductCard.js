import React from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';

import styles from './ProductCard.style';

export default function ProductCard(props) {
    return (

        
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.img_container}>

                <Image
                    style={styles.image}
                    source={{
                    uri: props.product.item.image,
                    }}
                /> 

            </View>

            <View style={styles.content}>
                <View  style={styles.content_top}>
                    <Text style={styles.title}>{props.product.item.title}</Text>
                </View>
                <View  style={styles.content_bottom}>
                    <Text style={styles.price}>${props.product.item.price}</Text>
                </View>
            </View>
            </TouchableOpacity>
    )
}
