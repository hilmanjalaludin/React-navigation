import React,{useEffect} from 'react';
import {ScrollView,Image,View,Text,StyleSheet} from 'react-native';

import { useSelector } from 'react-redux'

import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButtom'
import DefaultText from '../components/DefaultText';

const ListItems = props =>{
    return <View style={styles.listitem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {
    const avaliableMeals = useSelector(state => state.meals.meals)
  
    const mealId = props.navigation.getParam('mealId')
    
    const selectedMeal = avaliableMeals.find(meal => meal.id === mealId);

    // useEffect(()=>{
    //     props.navigation.setParams({mealTitle:selectedMeal.title})
    // },[selectedMeal])


    return(
        <ScrollView>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.details}>
            <DefaultText>{selectedMeal.duration} m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
                <Text style={styles.title}>Ingridents</Text>
                {selectedMeal.ingredients.map(ingredients =>
                 <ListItems key={ingredients}>{ingredients}</ListItems>
                )}
                <Text style={styles.title}>Steps</Text>
                <Text style={styles.title}>Ingridents</Text>
    {selectedMeal.steps.map(steps => <Text key={steps}>{steps}</Text>)}
        </ScrollView>
    )
}  


MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId= navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
  
  //  const selectedMeal = mealTitle.find(meal => meal.id === mealId);
    return {
        headerTitle:mealTitle,
        headerRight: ()=> {
             return  (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Favorite' iconName='ios-star'
                               onPress={() =>console.log('Mark as Favorite')} />
                        {/* <Item title='Favorites' iconName='ios-star-outline'
                        onPress={() =>console.log('Mark as Favorite')} /> */}
                     </HeaderButtons>)
        }
    }
}

const styles = StyleSheet.create({
    image:{
       width:'100%',
       height:200
    },
    details:{
        flexDirection:'row',
        padding: 15,
        justifyContent:'space-around',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center'
    
    },
    listitem:{
        marginVertical:10,
        marginHorizontal:10,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    }
});

export default MealDetailScreen;