import React from 'react';
import {View,Text,StyleSheet, FlatList ,Button,TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import color from '../constants/color';




const CategoriesScreen = props => {
    
   const renderGridItem = (itemData) =>{
          //console.log(itemData)
            return <TouchableOpacity 
                        style={styles.gridItem}
                        onPress={() =>{
                        props.navigation.navigate({
                            routeName: 'CategoryMels',
                            params:{
                                CategoryId: itemData.item.id 
                            }
                        })
                        }}>
                            <View>
                                    <Text>{itemData.item.title}</Text>
                                </View>
                            </TouchableOpacity>
                    }
    
    return(
        <FlatList keyExtractor={(item,index) => item.id} 
                  data={CATEGORIES} 
                  renderItem={renderGridItem} 
                  numColumns={2} />
        // <View style={styles.screen}>
        //     <Text>The Categories Screen</Tex t>
        //     <Button title="Go to Meals !" onPress={() => {
        //         props.navigation.navigate({routeName: "CategoryMels"})
        //     }}/>
        // </View>
    )
}


CategoriesScreen.navigationOptions = {
     
    headerTitle: 'Meal Categoris',
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? color.primaryColor : 'white'
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : color.primaryColor
     
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
});

export default CategoriesScreen;