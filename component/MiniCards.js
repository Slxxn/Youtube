import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed';  
import {useNavigation} from '@react-navigation/native'




const MiniCards = ({item}) => {

    const navigation = useNavigation();
    
  return (
    
        
    <View style={styles.MiniCardsStyle} >
        
        <View style={styles.MiniCardImageView} >

            <Image style={styles.MiniCardImage} 
                source={item.image}
                resizeMode={'cover'}
                onPress={() => {navigation.navigate('Details', {item})}}
            />  
        </View>
        
        <View style={styles.MiniCardTitleView} >
            <Text style={styles.MiniCardTitle}>{item.titre}</Text>
        </View>
        
    </View>
        

    
  )
}

export default MiniCards

const styles = StyleSheet.create({

    MiniCardsStyle:{
        width:160,
        height:120,

        borderStyle:'solid',
        borderWidth:3,
        borderRadius:5,
        
        marginHorizontal:15,
        flexDirection:'column',  
    },

    MiniCardImageView:{
        flex:4,
    },

    MiniCardImage:{
       height:'100%',
       width:'100%'
    },

    MiniCardTitleView:{
        width:'100%',
        flex:1,
        borderStyle:'solid',
        borderTopWidth:1,
        borderColor:"#ff000b",
        backgroundColor:"#181818",
    },

    MiniCardTitle:{
        textAlign:'left',
        color:'#e0e0e0',
        fontSize:16,
        fontWeight:'900',
        marginLeft:4
        

    }

   
    
})