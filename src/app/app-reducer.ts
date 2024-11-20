export type ThemeMode = 'dark' | 'light'

type InitialState = typeof initialState

const initialState = {
    themeMode: (localStorage.getItem('theme') ?? 'light') as ThemeMode,
    editMode: false
}

export const appReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, themeMode: action.payload.themeMode}
        case 'CHANGE_EDIT_MODE':
            return {...state, editMode: !state.editMode}
        default:
            return state
    }
}

// Action creators
export const changeThemeAC = (themeMode: ThemeMode) => {
    return {
        type: 'CHANGE_THEME',
        payload: { themeMode }
    } as const
}

export const changeEditModeAC = () => {
    return {
        type: 'CHANGE_EDIT_MODE',
    } as const
}

// Actions types
type ChangeThemeActionType =  ReturnType<typeof changeThemeAC>

type ChangeEditModeActionType =  ReturnType<typeof changeEditModeAC>

type ActionsType = ChangeThemeActionType | ChangeEditModeActionType
