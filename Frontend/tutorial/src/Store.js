import {createStore } from 'redux'
import { rootReducer } from "./service/reducer/Index";

const store=createStore(rootReducer)
export default store;