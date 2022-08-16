import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signupsaga } from './Auth.saga'

export function* rootsaga(){
    yield all([
        signupsaga
    ])
}
