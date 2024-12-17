import {v1} from "uuid";
import {TopicType} from "../../../app/Main";

type InitialState = typeof initialState

const initialState: TopicType[] = [
    {
        id: v1(),
        title: "HTML",
        questionsKey: "html",
        description: "5 questions about base HTML"
    },
    {
        id: v1(),
        title: "CSS",
        questionsKey: "css",
        description: "6 questions about base CSS"
    },
];

export const topicsReducer = (
    state: InitialState = initialState,
    action: TopicsActionTypes
): InitialState => {
    switch (action.type) {
        case 'ADD_TOPIC':
            return state
        case 'DELETE_TOPIC':
            return state
        case 'CHANGE_TOPIC_TITLE':
            return state
        case 'CHANGE_TOPIC_DESCRIPTION':
            return state
        //add link to questions
        default:
            return state
    }
}

// Action creators
export const addTopicAC = (title: string) => {
    return {
        type: 'ADD_TOPIC',
        payload: {title}
    } as const
}

export const deleteTopicAC = (id: string) => {
    return {
        type: 'DELETE_TOPIC',
        payload: {id}
    } as const
}

export const changeTopicTitleAC = (payload: { id: string, title: string }) => {
    return {
        type: 'CHANGE_TOPIC_TITLE',
        payload: payload
    } as const
}

export const changeTopicDescriptionAC = (payload: { id: string, description: string }) => {
    return {
        type: 'CHANGE_TOPIC_DESCRIPTION',
        payload: {payload}
    } as const
}

// Actions types
type AddTopicActionType = ReturnType<typeof addTopicAC>
type DeleteTopicActionType = ReturnType<typeof deleteTopicAC>
type ChangeTopicTitleActionType = ReturnType<typeof changeTopicTitleAC>
type ChangeTopicDescriptionActionType = ReturnType<typeof changeTopicDescriptionAC>

export type TopicsActionTypes = AddTopicActionType
    | DeleteTopicActionType
    | ChangeTopicTitleActionType
    | ChangeTopicDescriptionActionType
