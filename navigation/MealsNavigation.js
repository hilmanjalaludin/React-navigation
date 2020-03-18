import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from  'react-navigation'
import   CategoriesScreen   from '../screens/CategoriesScreen';
import   CategoriesMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen   from '../screens/MealDetailScreen'


const mealsnavigator = createStackNavigator({
        Categories: CategoriesScreen,
        CategoryMels:{
           screen : CategoriesMealScreen
        },
        MealDetail: MealDetailScreen     
});

export default createAppContainer(mealsnavigator)