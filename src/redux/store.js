import {applyMiddleware, createStore} from 'redux'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const middlewares=[thunk];
const initialState=[];
const store=createStore(
    authReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))

);

export default store;