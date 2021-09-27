import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./Products.style";

import ProductCard from "../../components/ProductCard";

const URL = "https://fakestoreapi.com/products";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: productData } = await axios.get(URL);
      setProducts(productData);
      setLoading(false);
       }
    catch (error){
      setLoading(false);
      setError(error.message);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const onPress = () => {
    props.navigation.navigate("ProductDetail");
  };

  if (loading) {

    return <ActivityIndicator size="large" color="#FCA311" />;
  }

  if (error) {

    return <Text>{error}</Text>
  }

  return (
    <View>
        <FlatList
          data={products}
          renderItem={(item) => (
            <ProductCard 
              product={item} 
              onPress={onPress} 
              />

              )}
        />
    </View>
  );
};

export default Products;
