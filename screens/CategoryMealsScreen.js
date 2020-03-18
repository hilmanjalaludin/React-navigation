import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const CategoriesMealsScreen = props => {
    
    return(
        <View style={styles.screen}>
            <Text>The CategoriesMealsScreen Screen</Text>
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

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CategoriesMealsScreen;