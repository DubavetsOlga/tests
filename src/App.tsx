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
import { Edit } from './components/Edit';

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
    type: "oneAnswer" | "severalAnswers" | "text"
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
        description: "6 questions about base CSS"
    },
];

const themeSaved = localStorage.getItem('theme') ?? 'light'

type ThemeMode = 'dark' | 'light'

function App() {

    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const goToMain = () => {
        setSelectedTopic(null);
    }

    const handleClickChangeMode = () => {
        setIsEditMode(prev => !prev)
    }

    //theme
    const [themeMode, setThemeMode] = useState<ThemeMode>(themeSaved as ThemeMode)

	const theme = createTheme({
		palette: {
			mode: themeMode === 'light' ? 'light' : 'dark',
			primary: {
				main: '#087EA4',
			},
		},
	})

	const handleClickChangeTheme = () => {
		setThemeMode(themeMode === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', themeMode === 'light' ? 'dark' : 'light')
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
                            <Button onClick={handleClickChangeMode}>{isEditMode ? "Test Mode" : "Change Mode"}</Button>
							<Switch color={'default'} onChange={handleClickChangeTheme} defaultChecked={themeSaved === 'dark'}/>
						</div>
					</Toolbar>
				</AppBar>
                {isEditMode &&
                    <Container maxWidth="md">
                        <Edit topics={topics} changeTopic={() => {}}/>
                    </Container>
                }
                {!isEditMode &&
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
                }
            </ThemeProvider>
        </div>
    );
}

export default App;
