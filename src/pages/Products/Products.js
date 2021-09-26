import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./Products.style";

import ProductCard from "../../components/ProductCard";

const URL = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await axios.get(URL);
    setLoading(false);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#FCA311" />
      ) : (
        <FlatList data={products} renderItem={(item) => <ProductCard product={item}/>}/>
      )}
    </View>
  );
};

export default Products;
