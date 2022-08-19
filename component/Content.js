import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Categories from './Categories'
import Videos from './Video'




const Content = () => {
  return (
    <View style={styles.Content}>

        <Categories/>

        <Videos/>

    </View>
  )
}

export default Content

const styles = StyleSheet.create({

    Content:{
        marginTop:20
    },

})