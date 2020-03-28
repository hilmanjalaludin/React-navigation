export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toogleFavorites = (id) => {
    return {type:  TOGGLE_FAVORITE, mealId: id}
}

