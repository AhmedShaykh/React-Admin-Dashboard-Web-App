import { increment, decrement } from './Action';

const initialState = {
    counter: 0,
};

export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case increment:
            return {
                ...state,
                counter: state.counter + 1
                // counter: state.counter + action.payload.value
            };
        case decrement:
            return {
                ...state,
                counter: state.counter - 1
                // counter: state.counter - action.payload.value
            };
        default:
            return state;
    }
}