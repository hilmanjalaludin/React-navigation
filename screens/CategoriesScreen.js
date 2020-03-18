import React from 'react';
import {View,Text,StyleSheet, FlatList ,Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';



const renderGridItem = (itemData) =>{
return  <View><Text>{itemData.item}</Text></View>
}

const CategoriesScreen = props => {
    
    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        // <View style={styles.screen}>
        //     <Text>The Categories Screen</Text>
        //     <Button title="Go to Meals !" onPress={() => {
        //         props.navigation.navigate({routeName: "CategoryMels"})
        //     }}/>
        // </View>
    )
}




const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CategoriesScreen;