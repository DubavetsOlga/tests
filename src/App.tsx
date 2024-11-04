import { useState } from 'react';
import './App.css';
import { v1 } from 'uuid';
import { Questions } from './components/Questions';
import { Topics } from './components/Topics';
import { Link } from './components/Link';
import { htmlQuestions } from './questions/html/HtmlQuestions';
import { cssQuestions } from './questions/css/CssQuestions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container } from '@mui/material';

export type OptionType = {
    id: string
    answer: string
    isRight: boolean
}

export type QuestionType = {
    id: string
    question: string
    options: OptionType[]
    answerDescription: string
}

export type TopicType = {
    id: string
    title: string
    questions: QuestionType[]
    description: string
}

const questionsHTML: QuestionType[] = htmlQuestions;
const questionsCSS: QuestionType[] = cssQuestions;

const topics: TopicType[] = [
    {
        id: v1(),
        title: "HTML",
        questions: questionsHTML,
        description: "5 questions about base HTML"
    },
    {
        id: v1(),
        title: "CSS",
        questions: questionsCSS,
        description: "5 questions about base CSS"
    },
];

function App() {

    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    type ThemeMode = 'dark' | 'light'

    const goToMain = () => {
        setSelectedTopic(null);
    }

    //theme
    const [themeMode, setThemeMode] = useState<ThemeMode>('light')

	const theme = createTheme({
		palette: {
			mode: themeMode === 'light' ? 'light' : 'dark',
			primary: {
				main: '#087EA4',
			},
		},
	})

	const changeModeHandler = () => {
		setThemeMode(themeMode == 'light' ? 'dark' : 'light')
	}

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" sx={{ mb: '30px' }}>
					<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
						{/* <IconButton color="inherit">
							<MenuIcon />
						</IconButton> */}
						<div>
							{/* <Button>Login</Button>
							<Button>Logout</Button> */}
							<Switch color={'default'} onChange={changeModeHandler} />
						</div>
					</Toolbar>
				</AppBar>
                <Container maxWidth="sm">
                    {selectedTopic && <Link onClick={goToMain}><ArrowBackIcon/> Back to topics</Link>}
                    <h2 style={{textAlign: "center"}}>
                        {selectedTopic 
                            ? topics.find(el => el.id === selectedTopic)?.title 
                            : "Choose topic"}
                    </h2>
                    {
                        selectedTopic
                        ? <Questions questions={topics.filter(el => el.id === selectedTopic)[0].questions} onFinish={goToMain}/>
                        : <Topics topics={topics} setSelectedTopic={setSelectedTopic}/>
                    }
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
