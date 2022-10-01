/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React , { useCallback, useState } from 'react';
 import {  Text, Image, View, useWindowDimensions,FlatList }  from 'react-native';
 import styles from './styles';


 interface ImageCarouselType {
     images: string[]
 }
 
 const ImageCarousel = ({images}:ImageCarouselType ) => {
     const [dot,setDot] = useState(0)
   const windowWidth = useWindowDimensions().width
   const windowHeigth= useWindowDimensions().height
   const onFlatListUpdate  = useCallback(({viewableItems}:any)=>{
    // const onFlatList  =({viewableItems}:{viewableItems:{index:number}[]})=>{
    if(viewableItems.length>0){
     setDot(viewableItems[0].index || 0)
    }
    console.log(viewableItems)
 },[])
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
                     viewAreaCoveragePercentThreshold: 50,
                 }} 
                 onViewableItemsChanged={onFlatListUpdate}
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
 