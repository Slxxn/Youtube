import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Tendances from './Tendances'
import Content from './Content'


const Home = () => {
  return (

    <View style={{flex:1 , backgroundColor:"#404243"}} >


          <Header/>
          <Tendances/>
          <Content/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})