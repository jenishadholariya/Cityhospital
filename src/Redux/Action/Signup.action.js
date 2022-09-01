import * as ActionType from '../ActionType'

export const signupAction = (values) => (dispatch) => {
    dispatch({type:ActionType.SIGNUP_ACTION , payload : values})
}

export const signInAction = (data) => (dispatch) => {
    dispatch({type:ActionType.SIGNIN_ACTION,payload:data})
}

export const signedInAction = (values) => (dispatch) => {
    dispatch({type:ActionType.SIGNEDIN_ACTION,payload:values})
}

export const logoutAction = () => (dispatch) => {
    dispatch({type:ActionType.LOGOUT_ACTION})
}

export const logoutedAction = () => (dispatch) => {
    dispatch({type:ActionType.LOGOUTED_ACTION})
}

export const GooglesignInAction = () => (dispatch) => {
    dispatch({type:ActionType.GOOGLESIGNIN_ACTION})
}