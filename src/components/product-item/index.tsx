import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, Image, View} from 'react-native';


interface ProductItemsType {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    },
  }

const ProductItem = ({item}: ProductItemsType)=>{
    return (
        <View>
            <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri:item.image
             }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
         {item.title}
          </Text>
          <View style={styles.ratingsContainer}>
            
            {[...Array(5).keys()].map((star,index)=>
            <FontAwesome 
            key={`${index}+${item.id}`}
            style={styles.star}
             name={index<Math.floor(item.avgRating)?"star":"star-o"}
             size={18}
             color="#e47911"  
             />)}
            
            <Text>
              {item.ratings}
              </Text>
          </View>
          <Text style={styles.price}>
            from  ${item.price}
           { item.oldPrice && <Text style={styles.oldPrice}> {item.oldPrice}</Text>}
            
            </Text>
        </View>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      borderRadius: 10,
      borderWidth: 1,
      color: "red",
      borderColor: '#d1d1d1',
      backgroundColor: '#fff',
      margin: 5,

    },
    page: {
      padding: 10,
    },
    image: {
      resizeMode: 'contain',
      height: 150,
      flex: 2,
    },
    rightContainer: {
      padding: 10,
      flex: 3,
  
    },
    title: {
      fontSize: 18,
    },
    rating: {},
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    oldPrice:{
      fontSize: 12,
      color:"red",
      fontWeight:"normal",
      textDecorationLine:"line-through"
    },
    ratingsContainer: {
      flexDirection:"row",
      alignItems:"center",
      marginVertical:5
    },
    star:{
      margin:2
    }
  });
export default ProductItem;