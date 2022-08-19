import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";

const Bouton = ({item, filtreVideo}) => {

  return (
    <View style={{flex:1}}>

        <Button   
                buttonStyle={styles.CategoriesButton} 
                title={item.titre}
                onPress={() => filtreVideo(item.id)}
        />

    </View>
  )
}

export default Bouton

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

})