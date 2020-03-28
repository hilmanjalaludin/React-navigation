import React from 'react';

import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoriesMealsScreen = props => {

   
    const catId = props.navigation.getParam('CategoryId');

    const avaliableMelas = useSelector(state => state.meals.filterMeals)

    const displayedMeals = avaliableMelas.filter(
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