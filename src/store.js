import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
    messages: [],
    isTyping: false,
}

function chatReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
                isTyping: false
            };
        case 'SET_TYPING_TRUE':
            return {
                ...state,
                isTyping: true
            };
        case 'SET_TYPING_FALSE':
            return {
                ...state,
                isTyping: false
            };
            default:
                return state;
    }
}

const store = createStore(
    chatReducer,
    applyMiddleware(thunk)
    )

export default store;