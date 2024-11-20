import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import {changeEditModeAC, changeThemeAC} from "../../../app/app-reducer";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../hooks/useAppSelector";
import {useCallback} from "react";

export const Header = () => {
    const themeMode = useAppSelector(state => state.app.themeMode)
    const isEditMode = useAppSelector(state => state.app.editMode)

    const dispatch = useAppDispatch()

    const handleClickChangeTheme = useCallback(() => {
        dispatch(changeThemeAC(themeMode === 'light' ? 'dark' : 'light'))
        localStorage.setItem('theme', themeMode === 'light' ? 'dark' : 'light')
    }, [dispatch, themeMode])

    const handleClickChangeMode = useCallback(() => {
        dispatch(changeEditModeAC())
    }, [dispatch])

    return (
        <AppBar position="static" sx={{ mb: '30px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <IconButton color="inherit">
					<MenuIcon />
				</IconButton> */}
                <div>
                    {/* <Button>Login</Button>
					<Button>Logout</Button> */}
                    <Button variant="contained" onClick={handleClickChangeMode}>{isEditMode ? "Test Mode" : "Change Mode"}</Button>
                    <Switch color={'default'} onChange={handleClickChangeTheme} defaultChecked={themeMode === 'dark'}/>
                </div>
            </Toolbar>
        </AppBar>
    )
}
