const INITIAL_STATE = [];

const LoginReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_STRING":
            return [...state, action.payload]
            
            break;
    
        default: return state;
            break;
    }

}

export {LoginReducer};