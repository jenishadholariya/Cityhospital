import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signInApi, signupApi } from '../../Common/API/Api';
import * as ActionType from '../ActionType'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signup(action) {
   try {
   
      const user = yield call(signupApi, action.payload);
      console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* signIn(action){
   try{
      const user = yield call(signInApi, action.payload);
      // console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   }catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchsignup() {
  yield takeEvery(ActionType.SIGNUP_ACTION, signup);
}

function* watchsignIn(){
   yield takeEvery(ActionType.SIGNIN_ACTION,signIn)
}

export function* Authsaga(){
    yield all([
      watchsignup(),
      watchsignIn()
    ])
}

