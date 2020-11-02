import React, { useEffect } from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import {filterdata} from '../actions'

function TodoList() {
    const todo = useSelector(state => state.todo)
    const todos = useSelector(state=>state.datafilter)
    const inputfilter = useSelector(state => state.inputFilter)
    const dispatch = useDispatch()
    useEffect(() => {
        switch (inputfilter) {
            case 'completed':
                return dispatch(filterdata(todo.filter(todo => todo.isDone === true)))
            case 'uncompleted':
                return dispatch(filterdata(todo.filter(todo => todo.isDone === false)))
            default:
                return dispatch(filterdata(todo))
        }
    }, [todo,inputfilter])

    return (
        <div>
            {todos.map((el, i) => { return <Todo key={i} id={el.id} name={el.name} isDone={el.isDone} /> })}

        </div>
    )
}

export default TodoList
