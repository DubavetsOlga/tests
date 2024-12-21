import { Dispatch } from "redux"
import { setAppErrorAC, setAppStatusAC } from "../../app/app-reducer"
import { BaseResponse } from "../types"

export const handleServerAppError = <T>(data: BaseResponse<T>, dispatch: Dispatch) => {
    dispatch(setAppErrorAC(data.messages.length ? data.messages[0] : "Some error occurred"))
    dispatch(setAppStatusAC("failed"))
}
