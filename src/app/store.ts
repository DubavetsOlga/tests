import { combineReducers, legacy_createStore } from 'redux'
import { appReducer } from "./app-reducer";
import { questionsReducer } from "../features/questions/model/questions-reducer";
import { topicsReducer } from "../features/questions/model/topics-reducer";

const rootReducer = combineReducers({
    questions: questionsReducer,
    topics: topicsReducer,
    app: appReducer,
})

export const store = legacy_createStore(rootReducer)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
