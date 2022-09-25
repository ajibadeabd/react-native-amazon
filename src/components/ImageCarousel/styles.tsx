import {
    StyleSheet  } from 'react-native';
    
    
    const styles = StyleSheet.create({
        root:{
            backgroundColor:"#e47911",
            margin:10,
            height:35,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:3.5,
            borderColor: "#a15e1b",
            borderWidth: 1
        },
        image:{
            resizeMode:'contain',
        },
        dotContainer:{
            flexDirection:"row",
            justifyContent:"center",
        },
        dot:{
            backgroundColor: "#ededed",
            borderColor: "#c9c9c9",
            borderWidth:1,
            height: 10,
            width: 10,
            margin:5,
            borderRadius:10
        },
        text:{
            fontSize:16
        },
    })
    
    export default styles