import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { categories } from '../constantes/categories'
import Bouton from './Bouton'

const Categories = () => {

    const filtreVideo = (id) => { console.log("bonjour",id) }

  return (
    <View>

        <Text style={styles.ContentSectionTitle}>Categories</Text>  
        
        <FlatList
            horizontal
            style={styles.ContentFlatlist}
            data={categories}
            renderItem={ ({item}) => <Bouton item={item} filtreVideo={filtreVideo}/>  }                                                                               
            keyExtractor={item => item.id}       
        />

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

    CategoriesButton:{
        marginHorizontal:10,
        width:140,
        height:44,
        backgroundColor:'black',
        borderRadius:25,
        borderWidth:1.5,
        borderColor:'#ff000b',
        
        

    },

    ContentSectionTitle:{
        marginLeft:30,
        fontSize:20,
        fontWeight:'600',
        color:"#fff",
    },

    ContentFlatlist:{
        marginTop:15
    }

})