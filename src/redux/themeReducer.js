const CHANGE_THEME = "CHANGE_THEME"

let initialState = {
    themes:["dark", "light", "dark-blue"],
    activeTheme:0
}

const themeReducer = (state = initialState, action) => {
    
    switch(action.type){
        case CHANGE_THEME:
            if(state.activeTheme < state.themes.length - 1){
                state.activeTheme++
                return state
            } else {
                state.activeTheme = 0
                return state
            }
        default:
            return state
    }
    
}

export const themeChangeActionCreator = () => {
    return{
        type: CHANGE_THEME
    }
}

export default themeReducer