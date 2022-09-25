/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React , { useState } from 'react';
 import {  Text, Image, View, useWindowDimensions,FlatList }  from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import styles from './styles';


 interface ImageCarouselType {
     images: string[]
 }
 
 const ImageCarousel = ({images}:ImageCarouselType ) => {
     const [dot,setDot] = useState(0)
   const windowWidth = useWindowDimensions().width
   const windowHeigth= useWindowDimensions().height
    return (
            <View>
                <FlatList
                 data={images}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 snapToInterval={windowWidth - 20}
                 snapToAlignment={"center"}
                 decelerationRate={"fast"}
                 viewabilityConfig={{
                     viewAreaCoveragePercentageThreshold:50
                 }}
                //  onViewableItemsChanged={({viewableItems})=>{
                //      console.warn(viewableItems)
                //  }}
                 renderItem={({item})=>
                 <Image
                 style={[styles.image,{width:windowWidth-20, height:windowHeigth/4.5}]} 
                 source={{uri:item}}
                 />}
                 />
                 <View style={styles.dotContainer}>
                     
                 {images.map((image,index)=>
                 <View 
                 key={index} style={[styles.dot,{
                    backgroundColor: index == dot ? "#c9c9c9":"#ededed"
                 }]}>
                 </View>)}
                 </View>

                 
            </View>
    );
 };

 export default ImageCarousel;
 