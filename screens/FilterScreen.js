import React from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButtom'
import {View,Text,StyleSheet} from 'react-native';

const FilterScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The FilterScreen  Screen</Text>
        </View>
    )
}
FilterScreen.navigationOptions = navData => {
    return { 
    headerTitle: 'Filter Meals',
    headerLeft: () =>{
            return <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName='ios-menu' onPress={() =>{
                            navData.navigation.toggleDrawer();
                        }} />
              </HeaderButtons>
    }
  }
     
}


const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default FilterScreen;