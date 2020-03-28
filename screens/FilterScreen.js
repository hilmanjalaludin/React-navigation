import React,{useState,useEffect,useCallback} from 'react';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButtom'
import {View,Text,StyleSheet,Switch,Platform} from 'react-native';
import color from '../constants/color';

const FilterSwitch = props => {
      return (
        <View style={styles.filtercontainer}>
                <Text>{props.label}</Text>
                <Switch 
                trackColor={{true:color.primaryColor}}
                thumbColor={Platform.OS === 'android' ? color.primaryColor : ''}
                value={props.state} onValueChange={props.onChange} />
        </View>
      )
}


const FilterScreen = props => {
    const {navigation} = props

    const [isGluteenFree, setIsGluteenFree] = useState(false)
    const [isLactoseFree, setIsLactosFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegerian, setIsVegerian] = useState(false)
    
    const saveFilters = useCallback(() =>{
         const appliedFilters ={
               glutenFree:isGluteenFree,
               lactoseFree:isLactoseFree,
               vegan:isVegan,
               isvegetarian:isVegerian
         }

         console.log(appliedFilters)
    },[isGluteenFree,isLactoseFree,isVegan,isVegerian])

    useEffect(()=>{
        navigation.setParams({
            save:saveFilters
        })
    },[saveFilters])

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Avaliable Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' state={isGluteenFree} onChange={newValue => setIsGluteenFree(newValue)} />
            <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactosFree(newValue)} />
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label='Vegetarian' state={isVegerian} onChange={newValue => setIsVegerian(newValue)} />
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
    },
    headerRight: () =>{
        return <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" 
                    iconName='ios-save' 
                    onPress={
                      navData.navigation.getParam('save')
                    } />
              </HeaderButtons>
    }

  }
     
}


const styles = StyleSheet.create({

    screen:{
        flex:1,
        //justifyContent:'center',
        alignItems:'center'
    },
    FilterScreen:{

    },
    title:{
        fontSize:22,
        fontFamily:'open-sans-bold',
        margin:20,
        textAlign:'center'
    },
    filtercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:15
    }
});

export default FilterScreen;