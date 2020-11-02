import todoReducer from './todoReducer'
import inputfilterReducer from './filterInputReducer'
import inputAddReducer from './inputReducer'
import datafilter from './filterReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    todo : todoReducer,
    inputFilter :inputfilterReducer,
    inputReducer : inputAddReducer,
    datafilter ,
})

export default allReducers