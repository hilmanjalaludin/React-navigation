import {Platform} from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from  'react-navigation'
import   CategoriesScreen   from '../screens/CategoriesScreen';
import   CategoriesMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen   from '../screens/MealDetailScreen'
import color from '../constants/color';

const mealsnavigator = createStackNavigator({
        Categories: {
                screen:CategoriesScreen,
        },
        CategoryMels:{
           screen : CategoriesMealScreen,
          
        },
        MealDetail: MealDetailScreen     
},{
   //     initialRouteName: 'CategoryMels',
        defaultNavigationOptions:{
                headerStyle:{
                        backgroundColor:Platform.OS === 'android' ? color.primaryColor : 'white'
                              },
                headerTintColor:Platform.OS === 'android' ? 'white' : color.primaryColor,
        }
});

export default createAppContainer(mealsnavigator)