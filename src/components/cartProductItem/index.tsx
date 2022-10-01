import React, { useState } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, Image, View} from 'react-native';
import QuantitySelector from '../QuantitySelector';
import Button from  '../button';


interface CartProductItemsType {
 
   cartItem:{
     id:string;
     quantity:number;
     option?:string;
     item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    },}
  }

const cartProductItem = ({cartItem}: CartProductItemsType)=>{
  const {item, quantity:quantityProp, id} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);

    return (
            <View style={styles.root}>
            <View style={styles.row}>
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
      <View style={styles.clipContainer}>
      <Button text="Clip & Save up to $10" onPress={()=>{}} containerStyle={ styles.button }/>
      </View >
      <View style={styles.row2}>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <View style={{
        flexDirection:"row",
        paddingLeft: 10,
        }}>

      <Button text="Delete" onPress={()=>{}} containerStyle={styles.button}/>
      <Button text="Save for later" onPress={()=>{}} containerStyle={styles.button}/>
      </View>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
  row2:{
    flexDirection: "row",
    alignItems: "center",
  },
  clipContainer:{
    marginLeft:106,
    width:289


  },
  button:{
    color: "grey",
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius:5,
    marginHorizontal: 11,
    paddingHorizontal: 17
  },
  row:{
    flexDirection: 'row',

  },
    root: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#d1d1d1',
      backgroundColor: '#fff',
      marginVertical: 5,
      padding: 10,

    },
    page: {
      padding: 10,
    },
    image: {
      resizeMode: 'contain',
      height: 150,
      flex: 1.6,
      paddingTop:0
    },
    rightContainer: {
      paddingHorizontal: 10,
      flex: 4.9,
  
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
export default cartProductItem