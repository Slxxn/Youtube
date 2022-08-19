import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Image, Icon } from '@rneui/themed'; 


const Commentaires = ({item}) => {
  return (

    <View style={styles.ComentCard}>
        
        <Image style={styles.ComentImage} 
                source={item.image}
                resizeMode={'cover'}
        />

        <Text style={styles.textStyle}>{item.texte}</Text>

        <View style={styles.ComentIconView}>
            <Icon size={13} style={styles.ComentIconStyle} name="favorite-border" color={"#C4C5C6"}/>
            <Icon size={13} style={styles.ComentIconStyle} name="message" color={"#C4C5C6"}/>
        </View> 
        
    </View>
  )
} 

export default Commentaires

const styles = StyleSheet.create({

    ComentCard:{
      
        marginVertical:5,

        borderStyle:'solid',
        borderColor:'black',
        borderBottomWidth:1,

        flexDirection:'row',
        alignItems:'center',
        paddingBottom:10,
        
    },

    ComentImage:{

        height:40,
        width:40,

        borderRadius:25,
        borderStyle:'solid',
        borderColor:'white',
        borderWidth:1,

        marginRight:10,
    },

    ComentIconStyle:{
        margin:5,
    },
    
    textStyle:{
        color:'#C4C5C6',
        fontSize:15,
        marginBottom:5,
        width:300
    },

    ComentIconView:{
        flexDirection:'column',
       

    },


})