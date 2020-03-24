import React from 'react'
import {Platform} from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,} from  'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import   CategoriesScreen   from '../screens/CategoriesScreen';
import   CategoriesMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen   from '../screens/MealDetailScreen'
import color from '../constants/color';
import FavoriteScreen from '../screens/FavoritesScreen'


const defaultStackNavOptions = {
        //     initialRouteName: 'CategoryMels',
         defaultNavigationOptions:{
            headerStyle:{
                 backgroundColor:Platform.OS === 'android' ? color.primaryColor : 'white'
                 },
                 headerTintColor:Platform.OS === 'android' ? 'white' : color.primaryColor,
                 headerTitle:'A Screen'
              }
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
                 tabBarColor:color.accentColor    
             }},
             
       }

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig,{
      activeColor: 'white',
      shifting:true,
      barStyle:{
              backgroundColor:color.primaryColor
      }
}) : createBottomTabNavigator({
      tabScreenConfig,
       tabBarOptions:{
           activeTintColor:color.accentColor
    }
})

export default createAppContainer(MealsFavTabNavigator)