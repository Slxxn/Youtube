import {StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import {useNavigation} from '@react-navigation/native'
import YoutubeLogo from "react-native-vector-icons/Fontisto"

const Header = () => {

    const navigation = useNavigation();

  return (


        <View style={styles.header} >

            <View style={styles.left}>
                <YoutubeLogo
                    size= {35}
                    style={styles.iconStyle}
                    name="youtube-play"
                    onPress={() => navigation.navigate('Home')}
                />
                <Text style={styles.youtubeText}>YouTube</Text>
            </View>
            

            <Icon
                size= {40}
                style={styles.iconStyle}
                name="search"
                color={"red"}
                onPress={() => Alert.alert('Boutton de recherche')}
        
            />

        </View>

    
  )
}

export default Header

const styles = StyleSheet.create({

    header:{
        height:50,
        backgroundColor:'#000',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },

    iconStyle:{
        paddingHorizontal:10,
        color:'red'
    },

    left:{
        flexDirection:'row',
        alignItems:'center'
    },

    youtubeText:{
        fontSize:25,
        color:'red',
        fontWeight:'600'

    }
})