import React, { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import EditIcon from '@material-ui/icons/Edit';
import { Modal } from 'react-bootstrap'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useDispatch, useSelector } from 'react-redux'
import { deleleTodo, isDoneTodo, modifyTodo, addInput } from '../actions'
import './Todo.css'

function Todo({ id, name, isDone }) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        dispatch(addInput(''))
            ;
    }
    const handleShow = () => setShow(true);
    let dispatch = useDispatch()
    const input = useSelector(state => state.inputReducer)
    const handleChange = (e) => {
        dispatch(addInput(e.target.value))
    }
    const newitem = {
        id: id,
        name: input
    }
    const update = () => {
        if (newitem.name !== "") {
            dispatch(modifyTodo(newitem))
        }
        handleClose()
        dispatch(addInput(''))
    }
    return (
        <div className={isDone ? `done` : `to_do`}>
            <h4>{name}</h4>
            <div className="todo_btn">
                <button onClick={() => dispatch(isDoneTodo(id))} className="btn_check">{isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</button>
                <button className="btn_edit" onClick={handleShow}><EditIcon /></button>
                <Modal show={show} onHide={handleClose} animation={false}  >
                    <Modal.Body className="modal_update">
                        <form>
                            <input type="text" className="update_input" onChange={handleChange} />
                            <button className="btn_update" onClick={update}> Update</button>
                        </form>
                    </Modal.Body>
                </Modal>
                <button onClick={() => dispatch(deleleTodo(id))} className="btn_delete"><DeleteForeverIcon /></button>
            </div>

        </div>
    )
}

export default Todo
