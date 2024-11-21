import { RootState } from "./store";

export const selectThemeMode = (state: RootState) => state.app.themeMode

export const selectTopics = (state: RootState) => state.topics

export const selectQuestions = (state: RootState) => state.questions
