import React from 'react'
import {View} from 'react-native'
import {FlatList, StyleSheet} from 'react-native'

import MealItem from './Mealitem'

const MealList = props => {
    const renderMealItem = ItemData =>{
        return <MealItem 
        title={ItemData.item.title}
        image={ItemData.item.imageUrl}
        onSelectMeal={() => {
            props.navigation.navigate({routeName:'MealDetail',params:{
                mealId:ItemData.item.id,
                mealTitle: ItemData.item.title
            } })
        }} 
        duration={ItemData.item.duration} 
        complexity={ItemData.item.complexity}
        affordability={ItemData.item.affordability}
         />
    }

     return  <View style={styles.list}>
                 <FlatList data={props.listData} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} style={{width:'100%'}} />
            </View>
      }

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MealList