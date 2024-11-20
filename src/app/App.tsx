import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from "../common/components/Header/Header";
import { getTheme } from "../common/theme/theme";
import { useAppSelector } from "../common/hooks/useAppSelector";
import { selectThemeMode } from "./appSelectors";
import { Main } from "./Main";

function App() {

    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Main />
            </ThemeProvider>
        </div>
    );
}

export default App;
