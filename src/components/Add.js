import React from 'react'
import './Add.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useDispatch } from 'react-redux'
import { addTodo, addInput } from '../actions'
import { useSelector } from 'react-redux'

function Add() {
    const dispatch = useDispatch()
    const input = useSelector(state => state.inputReducer)
    const handleChange = (e) => {
        dispatch(addInput(e.target.value))
    }
    const Add = (e) => {
        e.preventDefault()
        if (input !== "") {
            dispatch(addTodo(input))
            dispatch(addInput(''))
        }
    }
    return (
        <div class="add_todo">
            <form>
                <input type="text" placeholder="what to do ? " name="description" value={input} onChange={handleChange} />
                <button type="submit" onClick={Add}> <AddBoxIcon /></button>
            </form>
        </div>
    )
}

export default Add
