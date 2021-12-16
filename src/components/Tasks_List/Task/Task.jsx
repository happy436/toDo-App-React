import s from "./Task.module.css"
import React from 'react'
import { deleteTaskActionCreator } from "../../../redux/taskReducer"

export function Task(props){
    let status = (props.status === 1) ? "checked" : ""

    let deleteAction = () => {
        props.dispatch(deleteTaskActionCreator(props.id))
    }

    let taskBody = React.createRef()
    let editBody = React.createRef()

    let edit = () => {

    }

    let editBodyAction = (el) => {
        /* taskBody.current.style.display = "none"
        editBody.current.style.display = "inline-block" */
        debugger
        let list = el.target.parentNode.parentNode.parentNode
        console.log(list.children)
        
    }

    return(
        <div className={s.body} id={props.id} >
            <label className={s.check} >
                <input type="checkbox" className={s.check__input} defaultChecked={status}/>
                <span className={s.check__box}></span>
                <p className={s.text} ref={taskBody}>{props.body}</p>
                <textarea className={s.editText} ref={editBody} rows="5" value={props.body} onChange={edit}></textarea>
            </label>
            <div className={s.btns}>
                <div className={s.edit} onClick={editBodyAction}>E</div>
                <div className={s.delete} onClick={deleteAction}>D</div>
            </div>
        </div>
    )
}