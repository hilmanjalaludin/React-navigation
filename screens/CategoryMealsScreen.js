import React from 'react';
import {View,Text,StyleSheet,Button,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import color from '../constants/color';

const CategoriesMealsScreen = props => {
    const catid =props.navigation.getParam('CategoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catid)
    return(
        <View style={styles.screen}>
            <Text>The CategoriesMealsScreen Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="GO to Detail"  onPress={() => {
                   props.navigation.navigate({routeName:'MealDetail'})
            }} />

         <Button title="GO Back"  onPress={() =>{
             props.navigation.goBack()
             //props.navigate.pop()
         }} />

        </View>
    )

}

CategoriesMealsScreen.navigationOptions = (navigationData) =>{
   //console.log(navigationData)
   const catid = navigationData.navigation.getParam('CategoryId')
   const selectedCategory = CATEGORIES.find(cat => cat.id === catid)

   return {
       headerTitle : selectedCategory.title,
       headerStyle:{
        backgroundColor:Platform.OS === 'android' ? color.primaryColor : 'white'
      },
       headerTintColor:Platform.OS === 'android' ? 'white' : color.primaryColor
   }
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CategoriesMealsScreen;