import { /* ACTION TYPES GO HERE */} from '../actions';

const intialState = {
    friends: []
}

const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        //other switch cases to follow soon
        default:
            return state;
    }
}

export default rootReducer;