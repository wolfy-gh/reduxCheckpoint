import React from 'react'
import './Add.css'
import {filter} from '../actions'
import { useDispatch } from 'react-redux'


function Filter() {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(filter(e.target.value))
    }
    return (
        <div class="fiter_todo">
            <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="completed" >Done</option>
                <option value="uncompleted">Not Done</option>
            </select>
        </div>
    )
}

export default Filter
