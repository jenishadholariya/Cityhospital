import * as ActionType from '../ActionType'

export const signupAction = (values) => (dispatch) => {
    dispatch({type:ActionType.SIGNUP_ACTION , payload : values})
}

export const signInAction = (values) => (dispatch) => {
    dispatch({type:ActionType.SIGNIN_ACTION,payload:values})
}