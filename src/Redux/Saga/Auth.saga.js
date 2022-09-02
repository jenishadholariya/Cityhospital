import { call, put, takeEvery, all } from 'redux-saga/effects'
import { logoutApi, signInApi, signupApi,GoogleSignInAPI } from '../../Common/API/Api';
import { history } from '../../History';
import { SetAlert } from '../Action/Alert.Action';
import { logoutedAction, signedInAction } from '../Action/Signup.action';
import * as ActionType from '../ActionType'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signup(action) {
   try {
   
      const user = yield call(signupApi , action.payload);
      yield put (SetAlert({text:"SignUp succesfully" , color : "success"}))
      console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put (SetAlert({text:e.payload ,  color : "error"}))
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* signIn(action){ 
   try{
      const user = yield call(signInApi, action.payload);
      yield put(signedInAction(user))
      history.push('/Home')
      yield put (SetAlert({text:"login succesfully" , color : "success"}))
      console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   }catch (e) {
      yield put (SetAlert({text:e.payload ,  color : "error"}))
      console.log(e);
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* logout(action){
   try{
      const user = yield call(logoutApi,action.payload)
      yield put (SetAlert({text:"login succesfully" , color : "success"}))
      yield put(logoutedAction(user))
   }catch (e){
      yield put (SetAlert({text:e.payload ,  color : "error"}))
      console.log(e);
   }
}

function* GoogleSignIN(action){
   try{
      const user = yield call(GoogleSignInAPI)
      yield put (SetAlert({text:"login succesfully" , color : "success"}))
   }catch (e){
      yield put (SetAlert({text:e.payload ,  color : "error"}))
      console.log(e);
   }
}

function* Forgetpassword(action){
   try{
      const user = yield call()
      yield put (SetAlert({text:"Forget password successfully" , color : "success"}))
   }catch (e){
      yield put (SetAlert({text:e.payload ,  color : "error"}))
   }
}

function* watchsignup() {
  yield takeEvery(ActionType.SIGNUP_ACTION, signup);
}

function* watchsignIn(){
   yield takeEvery(ActionType.SIGNIN_ACTION,signIn)
}

function* watchGooglesignIn(){
   yield takeEvery(ActionType.SIGNIN_ACTION,GoogleSignIN)
}

function* watchlogout(){
   yield takeEvery(ActionType.LOGOUT_ACTION,logout)
}

function* watchForget(){
   yield takeEvery(ActionType.FORGET_PASSWORD,Forgetpassword)
}

export function* Authsaga(){
    yield all([
      watchsignup(),
      watchsignIn(),
      watchlogout(),
      watchGooglesignIn(),
      watchForget()
    ])
}

