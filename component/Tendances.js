import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { videos } from '../constantes/videos'
import MiniCards from './MiniCards'

const Tendances = () => {
  return (
    <View style={styles.TendancesSection}>

        <Text style={styles.TendancesSectionTitle}>Tendances 🔥</Text>

        <FlatList
            style={styles.TendancesFlatlist}
            horizontal
            data={videos}
            renderItem={ ({item}) => <MiniCards item={item} /> }
            keyExtractor={item => item.id}       
        />

    </View>
  )
}

export default Tendances

const styles = StyleSheet.create({

    TendancesSection:{
        marginTop:15,
        
    },

    TendancesFlatlist:{
        marginTop:15,
    },

    TendancesSectionTitle:{
        marginLeft:30,
        fontSize:20,
        fontWeight:'600',
        color:"#fff"
    }
})