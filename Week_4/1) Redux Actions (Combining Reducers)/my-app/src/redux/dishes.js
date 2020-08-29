//dishes reducer

import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {  //taking initial state as DISHES
    switch(action.type) {
        default:
            return state;
    }
}