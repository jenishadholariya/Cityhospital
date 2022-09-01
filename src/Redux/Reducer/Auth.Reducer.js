import * as ActionType from '../ActionType'

const initval = {
    isloading: false,
    error: '',
    user: null
}

export const AuthReducer = (state = initval, action) => {
    switch (action.type) {
        case ActionType.SIGNEDIN_ACTION:
            return {
                ...state,
                error: '',
                user: action.payload,
                isloading: false
            }
        case ActionType.LOGOUT_ACTION:
            return {
                ...state,
                error: '',
                user: null,
                isloading: false
            }
        default:
            return state
    }
}