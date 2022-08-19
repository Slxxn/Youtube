import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed';   
import {useNavigation} from '@react-navigation/native'


const MaxiCards = ({item}) => {

    const navigation = useNavigation();
  return (
    
        
    <View style={styles.MaxiCardsStyle} >
        
        <View style={styles.MaxiCardImageView} >

            <Image style={styles.MaxiCardImage} 
                source={item.image}
                resizeMode={'cover'}
                PlaceholderContent={<ActivityIndicator/>}
                onPress={() => {navigation.navigate('Details', {item})}}
            />
        </View>

        <View style={styles.MaxiCardTitleView} >
            <Text style={styles.MaxiCardTitle}>{item.titre}</Text>
        </View>
        
    </View>
        

    
  )
}

export default MaxiCards

const styles = StyleSheet.create({

    MaxiCardsStyle:{
        width:360,
        height:240,

        borderStyle:'solid',
        borderWidth:3,
        borderRadius:5,
        
        marginVertical:15,
       
        
    },

    MaxiCardTitleView:{
        flex:.6,
        borderStyle:'solid',
        borderTopWidth:1,
        borderColor:"#ff000b",
        backgroundColor:"#181818",
        
    },

    MaxiCardTitle:{
        textAlign:'left',
        justifyContent:'center',
        color:'white',
        fontSize:22,
        fontWeight:'900',
        marginLeft:4

    },

    MaxiCardImageView:{
        flex:4,
        
    },

    MaxiCardImage:{
        height:'100%',
        width:'100%',
    }
    
})