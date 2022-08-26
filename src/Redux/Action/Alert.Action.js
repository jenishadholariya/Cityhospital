import * as ActionType from '../ActionType'

export const SetAlert = (data) => (dispatch) => {
    dispatch({type:ActionType.SET_ALERT , payload:data})
}

export const ReSetetAlert = () => (dispatch) => {
    dispatch({type:ActionType.RESET_ALERT})
}