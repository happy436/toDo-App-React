const EDIT_TASK = "EDIT_TASK"
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const UPDATE_NEW_TASK_BODY = "UPDATE_NEW_TASK_BODY"
const newIndex = () => Math.floor(Math.random() * 100000)

let initialState = {
    tasks:[ 
            {id: newIndex(), status: 1, body: "apple, milk, egg, bread, carrot, cow, bird, chicken, frost"},
            {id: newIndex(), status: 0, body: "task2"},
            {id: newIndex(), status: 1, body: "task3"},
            {id: newIndex(), status: 0, body: "task4"},
    ],
    newTaskText: "",
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            let newTask = {
                id:newIndex(),
                status:0,
                body:state.newTaskText,
            }
            state.tasks.push(newTask)
            state.newTaskText = ""
            return state
        case DELETE_TASK:
            let indexTask = state.tasks.indexOf(state.tasks.find((el) => {
                return el.id === action.idTask
            }))
            if(indexTask !== -1){
                state.tasks.splice(indexTask, 1)
            } else  {
                return state
            }
        case UPDATE_NEW_TASK_BODY:
            state.newTaskText = action.newTaskText
            return state
        default:
            return state
    }
}

export const addTaskActionCreator = () => {

    return {
        type:ADD_TASK
    }
}

export const editTaskActionCreator = () => {

    return{
        type:EDIT_TASK
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
    
    return{
        type: UPDATE_NEW_TASK_BODY,
        newTaskText:text,
    }
}

export default taskReducer;
