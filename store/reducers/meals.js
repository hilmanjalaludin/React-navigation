import {MEALS} from '../../data/dummy-data'

const intialState ={
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]
}


const mealsReducer =(state=intialState,action) => {
    
    return state;
}


export default mealsReducer