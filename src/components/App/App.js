import s from './App.module.css';
import {Header} from "../Header/";
import {TasksList} from "../Tasks_List"

export function App(props) {
    let state = props.store.getState();
    window.state = state

    return (
        <div className={s.App}>
            <Header/>
            <TasksList state={state.taskReducer} dispatch={props.store.dispatch}/>
        </div>
    );
}
