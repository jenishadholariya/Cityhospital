import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signupApi } from '../../Common/API/Api';
import * as ActionType from '../ActionType'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signup(action) {
   try {
      const user = yield call(signupApi, action.payload);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchsignup() {
  yield takeEvery(ActionType.SIGNUP_ACTION, signup);
}

export function* signupsaga(){
    yield all([
      watchsignup()
    ])
}

