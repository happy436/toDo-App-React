import s from "./Tasks.module.css"
import React from "react"
import {Task} from "./Task/"

export function TasksList(props){

    let taskElement = 
        props.state.tasks.map(t => <Task 
                                        id={t.id} 
                                        status={t.status} 
                                        body={t.body} 
                                        key={Math.floor(Math.random() * 100000)}
                                        dispatch={props.dispatch}
                                    />)


    return(
        <div className={s.body}>
            <h3 className={s.title}>Tasks</h3>
            <div className={s.lists}>
                {taskElement}
            </div>
        </div>
    )
}