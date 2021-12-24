import s from "./Tasks.module.css"
import React from "react"
import {Task} from "./Task/"
import { addTaskActionCreator, updateTaskBodyActionCreator } from "../../redux/taskReducer"
import { UilSave } from '@iconscout/react-unicons'

export function TasksList(props){
    let taskElement = 
        props.state.tasks.map(t => <Task 
                                        id={t.id} 
                                        status={t.status} 
                                        body={t.body} 
                                        key={Math.floor(Math.random() * 100000)}
                                        dispatch={props.dispatch}
                                    />)

    let heightTask = (el) => {
        if(el.target.getAttribute('rows')){
            el.target.removeAttribute('rows')
            el.target.style.height = "30px"
        } else if(el.target.value === ""){
            el.target.setAttribute("rows", "1")
            el.target.style.height = "30px"
        }
        
        /* height textarea */
        if(el.target.scrollTop > 0){
            el.target.style.height = el.target.scrollHeight + 'px'
        }
    }

    let onTaskChange = (el) => {
        let text = el.target.value
        let action = updateTaskBodyActionCreator(text)
        props.dispatch(action)
    }

    let addTask = (el) => {
        let textArea = el.target.parentNode.nextElementSibling
        if(textArea && textArea.style.height > "30px"){
            textArea.style.height = ''
            textArea.setAttribute('rows', '1')
        }
        props.dispatch(addTaskActionCreator())
    }
    
    return(
        <div className={s.body}>
            <h3 className={s.title}>Tasks</h3>
            <div className={s.lists}>
                <div className={s.addTask}>
                    <div className={s.addTaskWrapper}>
                        <span className={s.saveBtn} onClick={addTask}><UilSave/></span>
                        <textarea 
                            className={s.editText} 
                            value={props.state.newTaskText}
                            placeholder="Click to save" 
                            onChange={onTaskChange}
                            onKeyUp={heightTask}
                            rows="1"
                            style={{height:"30px"}}
                        ></textarea>
                    </div>  
                </div>
                <hr className={s.hr}/>
                <ul className={s.taskList}>
                    {taskElement}
                </ul>
                
            </div>
        </div>
    )
}