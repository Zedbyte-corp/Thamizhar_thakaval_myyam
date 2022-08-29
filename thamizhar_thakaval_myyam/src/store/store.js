import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import userReducer from './reducers';


const rootReducer = combineReducers({
    userReducer
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export const Store = createStore(rootReducer, applyMiddleware(thunk));