const EDIT_TASK = "EDIT_TASK"
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const UPDATE_NEW_TASK_BODY = "UPDATE_NEW_TASK_BODY"
const UPDATE_STATUS = "UPDATE_STATUS"
const newIndex = () => Math.floor(Math.random() * 100000)

let initialState = {
    tasks:[ 
            {id: newIndex(), status: 0, body: "My first task"},
    ],
    newTaskText: "",
}

let indexTask = (state, action) => {return state.tasks.indexOf(state.tasks.find((el) => {
    return el.id === action.idTask
}))
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            let newTask = {
                id:newIndex(),
                status:0,
                body:state.newTaskText,
            }
            if(state.newTaskText !== ""){
                state.tasks.unshift(newTask)
                state.newTaskText = ""
            }
            return state
        case DELETE_TASK:
            if(indexTask(state,action) !== -1){
                state.tasks.splice(indexTask(state,action), 1)
            } else  {
                return state
            }
        case UPDATE_NEW_TASK_BODY:
            state.newTaskText = action.newText
            return state
        case EDIT_TASK:
            /* let idTask = state.tasks.indexOf(state.tasks.find((el) => {
                return el.body === action.oldText
            }))
            if(idTask !== -1){
                state.tasks[idTask].body = action.newText
                state.newTaskText = action.newText
            } else {
                return state
            } */
        case UPDATE_STATUS:
            let index = indexTask(state,action)
            let status = state.tasks[index].status
            if(index !== -1){
                if(status === 1){
                    state.tasks[index].status = 0
                } else {
                    state.tasks[index].status = 1
                }
            } else  {
                return state
            }
        default:
            return state
    }
}

export const addTaskActionCreator = () => {
    /* done */
    return {
        type:ADD_TASK
    }
}

export const editTaskActionCreator = (oldText, newText) => {
    /* don't know how */
    return{
        type:EDIT_TASK,
        oldText: oldText,
        newText: newText,
    }
}

export const deleteTaskActionCreator = (id) => {
    /* done */
    return {
        type:DELETE_TASK,
        idTask: id
    }
}

export const updateTaskBodyActionCreator = (text) => {
    /* done */
    return{
        type: UPDATE_NEW_TASK_BODY,
        newText: text,
    }
}

export const updateStatusActionCreator = (id, status) => {
    /* done */
    return{
        type: UPDATE_STATUS,
        newStatus:status,
        idTask:id,
    }
}

export default taskReducer;
