import {configureStore, createSlice} from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name:'food',
    initialState: {foodList: []},
    reducers: {
        addFood: (state, action) => {
            state.foodList.unshift(action.payload.item);
        },
        dltFood: (state, action) => {
            state.foodList = [...action.payload.filterFoodList]
        }
    }
})

const foodStore = configureStore({reducer: {
    food: foodSlice.reducer
}});

export const foodActions = foodSlice.actions;

export default foodStore;