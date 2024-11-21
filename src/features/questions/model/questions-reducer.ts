import { QuestionType } from "../../../app/Main";
import { htmlQuestions } from "../../../questions/html/HtmlQuestions";
import { cssQuestions } from "../../../questions/css/CssQuestions";

type InitialState = typeof initialState

const initialState: {[key: string]: QuestionType[]} = {
    "html": htmlQuestions,
    "css": cssQuestions
};

export const questionsReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return state
        case 'DELETE_QUESTION':
            return state
        case 'CHANGE_QUESTION_TITLE':
            return state
        case 'CHANGE_QUESTION_DESCRIPTION':
            return state
        //change type?
        //add/change/delete options (title, right)
        default:
            return state
    }
}

// Action creators
export const addQuestionAC = (payload: { key: string, title: string, type: QuestionType }) => {
    return {
        type: 'ADD_QUESTION',
        payload: payload
    } as const
}

export const deleteQuestionAC = (payload: { key: string, id: string }) => {
    return {
        type: 'DELETE_QUESTION',
        payload: { payload }
    } as const
}

export const changeQuestionTitleAC = (payload: { key: string, id: string, title: string}) => {
    return {
        type: 'CHANGE_QUESTION_TITLE',
        payload: payload
    } as const
}

export const changeQuestionDescriptionAC = (payload: { key: string, id: string, description: string}) => {
    return {
        type: 'CHANGE_QUESTION_DESCRIPTION',
        payload: payload
    } as const
}

// Actions types
type AddQuestionActionType =  ReturnType<typeof addQuestionAC>
type DeleteQuestionActionType =  ReturnType<typeof deleteQuestionAC>
type ChangeQuestionTitleActionType =  ReturnType<typeof changeQuestionTitleAC>
type ChangeQuestionDescriptionActionType =  ReturnType<typeof changeQuestionDescriptionAC>

type ActionsType = AddQuestionActionType
    | DeleteQuestionActionType
    | ChangeQuestionTitleActionType
    | ChangeQuestionDescriptionActionType
