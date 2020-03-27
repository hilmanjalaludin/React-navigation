import React from 'react'
import {Platform,Text} from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,} from  'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import   CategoriesScreen   from '../screens/CategoriesScreen';
import {createDrawerNavigator}  from 'react-navigation-drawer'
import   CategoriesMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen   from '../screens/MealDetailScreen'
import color from '../constants/color';
import FavoriteScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'

const defaultStackNavOptions = {
        //     initialRouteName: 'CategoryMels',
            headerStyle:{
                 backgroundColor:Platform.OS === 'android' ? color.primaryColor : ''
                 },
                 headerTitleStyle:{
                    fontFamily:'open-sans-bold'
                 },
                 headerBackTitleStyle:{
                        fontFamily:'open-sans'
                 },
                 headerTintColor:Platform.OS === 'android' ? 'white' : color.primaryColor,
                 headerTitle:'A Screen'
}

const mealsnavigator = createStackNavigator({
        Categories: {
                screen:CategoriesScreen,
        },
        CategoryMels:{
           screen : CategoriesMealScreen,
          
        },
        MealDetail: MealDetailScreen     
},{defaultNavigationOptions:defaultStackNavOptions});

const FavNavigator =createStackNavigator({
        Favorites: FavoriteScreen,
        Mealdetail:MealDetailScreen

},{defaultNavigationOptions:defaultStackNavOptions})

const tabScreenConfig = {
        Meals:{screen: mealsnavigator , navigationOptions:{
                tabBarIcon: (tabInfo) => {
                       return (
                               <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                             );
                },
                tabBarColor:color.primaryColor
             }},
             Favorites:{screen:FavNavigator,navigationOptions:{
               tabBarLabel:'Favorites',
               tabBarIcon: (tabInfo) => {
                       return (
                               <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                             );
                 },
                 tabBarColor:color.primaryColor,
                 tabBarLabel:Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text> : 'Favorites'    
             }},
             
       }

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig,{
      activeColor: 'white',
      shifting:true,
      barStyle:{
              backgroundColor:color.primaryColor,
      },
}) : createBottomTabNavigator({
      tabScreenConfig,
       tabBarOptions:{
           labelStyle:{
                   fontFamily:'open-sans'
           },
           activeTintColor:color.accentColor,
           tabBarLabel:Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals' 
    }
})

const FilterNavigator = createStackNavigator ({
        Filters:FilterScreen
},{
        // navigationOptions:{
        //         drawerLabel:'Filters !!'
        // },
        defaultNavigationOptions:defaultStackNavOptions
 })

const MainNavigator = createDrawerNavigator({
    MealsFavs :{screen: MealsFavTabNavigator, navigationOptions:{
            drawerLabel: 'Meals'
    }},
    Filters: FilterNavigator
},{
        contentOptions: {
                activeTintColor:color.accentColor,
                labelStyle:{
                        fontFamily:'open-sans-bold',
                },
        }
});

//export default createAppContainer(MealsFavTabNavigator)
//jika tidak ingi ada menu di samping aktifkan
export default createAppContainer(MainNavigator)