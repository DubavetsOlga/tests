import { combineReducers, legacy_createStore, UnknownAction } from "redux"
import { appReducer } from "./app-reducer"
import { questionsReducer } from "../features/questions/model/questions-reducer"
import { topicsReducer } from "../features/questions/model/topics-reducer"
import { authReducer } from "../features/auth/model/auth-reducer"
import { ThunkDispatch } from "redux-thunk"

const rootReducer = combineReducers({
    questions: questionsReducer,
    topics: topicsReducer,
    app: appReducer,
    auth: authReducer,
})

export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>

// @ts-ignore
window.store = store
