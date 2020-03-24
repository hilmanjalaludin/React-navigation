import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoriesMealsScreen = props => {

   
    const catId = props.navigation.getParam('CategoryId');

    const displayedMeals = MEALS.filter(
         meal => meal.categoryIds.indexOf(catId) >= 0
     );
     
    return <MealList listData={displayedMeals} navigation={props.navigation} />

}

CategoriesMealsScreen.navigationOptions = (navigationData) =>{
   //console.log(navigationData)
   const catid = navigationData.navigation.getParam('CategoryId')
   const selectedCategory = CATEGORIES.find(cat => cat.id === catid)
   return {
       headerTitle : selectedCategory.title,
   }
}


export default CategoriesMealsScreen;