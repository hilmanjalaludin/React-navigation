import React from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/Mealitem';


const CategoriesMealsScreen = props => {
    const renderMealItem = ItemData =>{
        return <MealItem title={ItemData.item.title}
        image={ItemData.item.imageUrl}
        onSelectMeal={() => {}} duration={ItemData.item.duration} 
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
         />
    }

    const catId = props.navigation.getParam('CategoryId');

    const displayedMeals = MEALS.filter(
         meal => meal.categoryIds.indexOf(catId) >= 0
     );
     
    return(
        <View style={styles.screen}>
           <FlatList data={displayedMeals} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} style={{width:'100%'}} />
        </View>
    )

}

CategoriesMealsScreen.navigationOptions = (navigationData) =>{
   //console.log(navigationData)
   const catid = navigationData.navigation.getParam('CategoryId')
   const selectedCategory = CATEGORIES.find(cat => cat.id === catid)

   return {
       headerTitle : selectedCategory.title,
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