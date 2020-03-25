import React from 'react';
import {View,Text,StyleSheet, FlatList ,Button,TouchableOpacity,Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButtom'
import {CATEGORIES} from '../data/dummy-data';
import CategorisGridTile from '../components/CategorisGrid';
import color from '../constants/color';

const CategoriesScreen = props => {
    
   const renderGridItem = (itemData) =>{
          //console.log(itemData)
           return <CategorisGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() =>{
                props.navigation.navigate({
                    routeName: 'CategoryMels',
                    params:{
                        CategoryId: itemData.item.id 
                    }
                })
           }} /> 
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


CategoriesScreen.navigationOptions = navData => {
    return { 
    headerTitle: 'Meal Categoris',
    headerLeft: () =>{
            return <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu' onPress={() =>{
                            navData.navigation.toggleDrawer();
                        }} />
              </HeaderButtons>
    }
  }
     
}

const styles = StyleSheet.create({
   screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        overflow:'hidden'
    }
});

export default CategoriesScreen;