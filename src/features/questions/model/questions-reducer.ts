import { QuestionType } from "../../../app/Main"
import { htmlQuestions } from "../../../questions/html/HtmlQuestions"
import { cssQuestions } from "../../../questions/css/CssQuestions"

type InitialState = typeof initialState

const initialState: { [key: string]: QuestionType[] } = {
    html: htmlQuestions,
    css: cssQuestions,
}

export const questionsReducer = (state: InitialState = initialState, action: QuestionsActionTypes): InitialState => {
    switch (action.type) {
        case "ADD_QUESTION":
            return state
        case "DELETE_QUESTION":
            return state
        case "CHANGE_QUESTION_TITLE":
            return state
        case "CHANGE_QUESTION_DESCRIPTION":
            return state
        case "CHANGE_QUESTION_TYPE":
            return state
        case "ADD_QUESTION_OPTION":
            return state
        case "DELETE_QUESTION_OPTION":
            return state
        case "CHANGE_QUESTION_OPTION_TITLE":
            return state
        case "CHANGE_QUESTION_OPTION_RIGHT":
            return state
        default:
            return state
    }
}

// Action creators
export const addQuestionAC = (payload: { key: string; title: string; type: QuestionType }) => {
    return {
        type: "ADD_QUESTION",
        payload: payload,
    } as const
}

export const deleteQuestionAC = (payload: { key: string; id: string }) => {
    return {
        type: "DELETE_QUESTION",
        payload: { payload },
    } as const
}

export const changeQuestionTitleAC = (payload: { key: string; id: string; title: string }) => {
    return {
        type: "CHANGE_QUESTION_TITLE",
        payload: payload,
    } as const
}

export const changeQuestionDescriptionAC = (payload: { key: string; id: string; description: string }) => {
    return {
        type: "CHANGE_QUESTION_DESCRIPTION",
        payload: payload,
    } as const
}

export const changeQuestionTypeAC = (payload: { key: string; id: string; type: QuestionType }) => {
    return {
        type: "CHANGE_QUESTION_TYPE",
        payload: payload,
    } as const
}

export const addQuestionOptionAC = (payload: { title: string; isRight: boolean }) => {
    return {
        type: "ADD_QUESTION_OPTION",
        payload: { payload },
    } as const
}

export const deleteQuestionOptionAC = (payload: { id: string }) => {
    return {
        type: "DELETE_QUESTION_OPTION",
        payload: payload,
    } as const
}

export const changeQuestionOptionTitleAC = (payload: { id: string; title: string }) => {
    return {
        type: "CHANGE_QUESTION_OPTION_TITLE",
        payload: payload,
    } as const
}

export const changeQuestionOptionRightAC = (payload: { id: string; isRight: boolean }) => {
    return {
        type: "CHANGE_QUESTION_OPTION_RIGHT",
        payload: payload,
    } as const
}

// Actions types
type AddQuestionActionType = ReturnType<typeof addQuestionAC>
type DeleteQuestionActionType = ReturnType<typeof deleteQuestionAC>
type ChangeQuestionTitleActionType = ReturnType<typeof changeQuestionTitleAC>
type ChangeQuestionDescriptionActionType = ReturnType<typeof changeQuestionDescriptionAC>
type ChangeQuestionTypeActionType = ReturnType<typeof changeQuestionTypeAC>
type AddQuestionOptionType = ReturnType<typeof addQuestionOptionAC>
type DeleteQuestionOptionActionType = ReturnType<typeof deleteQuestionOptionAC>
type ChangeQuestionOptionTitleActionType = ReturnType<typeof changeQuestionOptionTitleAC>
type ChangeQuestionOptionRightActionType = ReturnType<typeof changeQuestionOptionRightAC>

export type QuestionsActionTypes =
    | AddQuestionActionType
    | DeleteQuestionActionType
    | ChangeQuestionTitleActionType
    | ChangeQuestionDescriptionActionType
    | ChangeQuestionTypeActionType
    | AddQuestionOptionType
    | DeleteQuestionOptionActionType
    | ChangeQuestionOptionTitleActionType
    | ChangeQuestionOptionRightActionType
