import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./Products.style";

import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

const URL = "https://fakestoreapi.com/products";

const Products = (props) => {
  
  const {data,loading,error} = useFetch(URL);

  const onPress =  id => {
    props.navigation.navigate("ProductDetail",{id});
  };

  const renderProduct = ({item})=> {
    return(
    <ProductCard 
      product={item} 
      onPress={() => onPress(item.id)}
    />)
  }

  if (loading) {

    return <ActivityIndicator size="large" color="#FCA311" />;
  }

  if (error) {

    return <Text>{error}</Text>
  }

  return (
    <View>
        <FlatList
          data={data}
          renderItem={renderProduct}
        />
    </View>
  );
};

export default Products;
