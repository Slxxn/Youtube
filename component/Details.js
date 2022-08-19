import { StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native'
import React from 'react'
import { Image, Icon } from "@rneui/themed";
import Header from './Header';
import {commentaires} from '../constantes/commentaires'
import Commentaires from './Commentaires'
import Arrow from "react-native-vector-icons/MaterialIcons"




const Details = ({route,navigation}) => {

    const {item} = route.params;

  return (

    <View style={{flex:1, backgroundColor:"#404243"}}>

        <Header/>

        <View style={styles.MediaPlayerView}>
            <Image style={styles.MediaPlayer} 
                    source={item.image}
                    resizeMode={'cover'}
                    PlaceholderContent={<ActivityIndicator/>}                  
            />
        </View> 

        <View style={styles.ContentView}>

            <View style={styles.ContentIcons}>
                    <Icon size={30} style={styles.iconStyle} name="thumb-up-off-alt" color={"#C4C5C6"}/>
                    <Icon size={30} style={styles.iconStyle} name="thumb-down-off-alt" color={"#C4C5C6"}/>
                    <Icon size={30} style={styles.iconStyle} name="ios-share" color={"#C4C5C6"}/>
                    <Icon size={30} style={styles.iconStyle} name="file-download" color={"#C4C5C6"}/>
            </View>

            <View>
                <Text style={styles.ContentTitle}>{item.titre}</Text>
                <Text style={styles.ContentDescription}>{item.description}</Text>
            </View>
            
            <View style={styles.Coments}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginRight:10}}>

                    <Text style={styles.ComentsSectionTitle}>COMMENTAIRES</Text>
                    <View>
                        <Arrow size={15} style={styles.iconStyle} name="keyboard-arrow-up" color={"#C4C5C6"}/>
                        <Arrow size={15} style={styles.iconStyle} name="keyboard-arrow-down" color={"#C4C5C6"}/>
                    </View>

                </View>

                <FlatList
                    style={styles.ComentsFlatList}
                    data={commentaires}
                    renderItem={ ({item}) => <Commentaires item={item}/>  }                                                                               
                    keyExtractor={item => item.id}       
                />

            </View>
        
        </View>
 
    </View>

  )
}

export default Details

const styles = StyleSheet.create({

    MediaPlayerView:{
        flex:1,
        borderStyle:'solid',
        borderColor:'black',
        borderBottomWidth:5,

    },

    MediaPlayer:{
      
        height:'100%',
        width:'100%',

    },

    ContentView:{
     flex:2,
     paddingHorizontal:10,
     paddingTop:5
    },

    ContentIcons:{
        height:50,
        paddingHorizontal:40,
        paddingVertical:5,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },

    iconStyle:{    
        justifyContent:'center',
        alignItems:'center' ,
        
    },

    ContentTitle:{
        marginVertical:5,
        paddingHorizontal:30,
        paddingTop:10,
        fontSize:22,
        color:'white',
        textTransform:'uppercase',
        fontWeight:'400',
        alignSelf:'center',
        borderStyle:'solid',
        borderColor:'red',
        borderTopWidth:1,
    },

    ContentDescription:{
        paddingHorizontal:5,
        marginVertical:5,
        fontSize:15,
        color:'white',
        alignSelf:'flex-start'
    },

    ComentsSectionTitle:{
        color:'white',
        marginRight:10,

    },

    ComentsFlatList:{


    },

    
    Coments:{
        marginTop:15,
        marginLeft:5,
    },
})