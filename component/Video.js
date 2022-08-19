import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { videos } from '../constantes/videos'
import MaxiCards from './MaxiCards'

const Videos = () => {
  return (
    <View style={styles.VideoFlatlist}>

        <Text style={styles.VideoSectionTitle}>Vidéos</Text>

        <FlatList
            style={styles.VideoFlatlist}
            data={videos}
            renderItem={ ({item}) => <MaxiCards item={item} /> }
            keyExtractor={item => item.id}       
        />

    </View>
  )
}

export default Videos

const styles = StyleSheet.create({

    VideoSection:{
        marginTop:15,
    },

    VideoFlatlist:{
        marginTop:15,
        alignSelf:'center'
    },

    VideoSectionTitle:{
        fontSize:20,
        fontWeight:'600',
        color:"#fff"
        
    }
})