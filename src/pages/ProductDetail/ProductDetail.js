import React from 'react'
import { View, Text,ActivityIndicator } from 'react-native'
import useFetch from "../../hooks/useFetch";

const URL = "https://fakestoreapi.com/products/";

export default function ProductDetail({route}) {
    const id = route.params.id;


    const {data,loading,error} = useFetch(URL+id);



    if (loading) {

        return <ActivityIndicator size="large" color="#FCA311" />;
    }

    if (error) {

        return <Text>{error}</Text>
    }


    return (
        <View>
            <Text>{data.title}</Text>
        </View>
    )
}
