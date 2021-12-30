import s from "./Task.module.css"
import React from 'react'
import { deleteTaskActionCreator, updateTaskBodyActionCreator, updateStatusActionCreator } from "../../../redux/taskReducer"
import { UilTrashAlt } from '@iconscout/react-unicons'

export function Task(props){
    let status = (props.status === 1) ? "checked" : ""

    let deleteAction = () => {
        props.dispatch(deleteTaskActionCreator(props.id))
    }

    let onCheckStatus = () => {
        let id = props.id
        let status = props.status
        props.dispatch(updateStatusActionCreator(id, status))
    }

    return(
        <li className={s.body} id={props.id} >
            <label className={s.check} >
                <input type="checkbox" className={s.check__input} defaultChecked={status}/>
                <span className={s.check__box} onClick={onCheckStatus}></span>
                {/* div Заменить на textarea для editTask */}
                <div className={s.editText}>
                    <p>{props.body}</p>
                </div>
            </label>
            <div className={s.btns}>
                <div className={s.delete} onClick={deleteAction}><UilTrashAlt/></div>
            </div>
        </li>
    )
}