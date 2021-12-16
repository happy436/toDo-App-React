import s from './Header.module.css'
import React from 'react'

export function Header(props){
    return(
        <div className={s.header}>
            <h2 className={s.title}>What's up, User!</h2>
        </div>
    )
}