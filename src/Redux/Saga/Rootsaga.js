import { call, put, takeEvery, all } from 'redux-saga/effects'
import { Authsaga } from './Auth.saga'

export function* rootsaga(){
    yield all([
        Authsaga()
    ])    
}
