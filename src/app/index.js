import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import App from "./containers/App";
import { Provider } from "react-redux";

const productReducer = (state = {
    name: 'Chair',
    cost: 1000,
}, action) => {

    switch(action.type){
        case 'INCREASE_COST':
            state = {
                ...state,
                cost: state.cost + action.value,
            }
            console.log(action.value);
        break;
        case 'DECREASE_COST':
            state = {
                ...state,
                cost: state.cost - action.value,
            }
        break;
    }
    return state;
}

const dealerReducer = (state = {
    name: 'Super Shoppie',
    numberOfProducts: 500,
}, action) => {

    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: state.name + action.value,
            };
            break;
        case 'INCREASE_PRODUCTS':
            state = {
                ...state,
                numberOfProducts: state.numberOfProducts + action.value,
            };
            break;
        case 'DECREASE_PRODUCTS':
            state = {
                    ...state,
                    numberOfProducts: state.numberOfProducts + action.value,
                };
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Log Action=", action);
    next(action);
};

const store = createStore(
    combineReducers({product: productReducer, dealer: dealerReducer}),
    {},
    applyMiddleware(createLogger())
    //applyMiddleware(myLogger, createLogger())
);

store.subscribe (() => {
    //console.log("store changed=", store.getState());
})



render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById("app")
);