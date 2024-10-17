import React, { useState } from 'react';
import './App.css';
import { v1 } from 'uuid';
import { Questions } from './components/Questions';
import { Topics } from './components/Topics';
import { Link } from './components/Link';
import { htmlQuestions } from './questions/html/HtmlQuestions';
import { cssQuestions } from './questions/css/CssQuestions';
import backArrow from './assets/left-back-arrow.svg'

export type OptionType = {
    id: string,
    answer: string,
    isRight: boolean,
}

export type QuestionType = {
    id: string,
    question: string,
    options: OptionType[],
    answerDescription: string
}

export type TopicType = {
    id: string,
    title: string,
    questions: QuestionType[]
}

const questionsHTML = htmlQuestions;
const questionsCSS = cssQuestions;

const topics = [
    {
        id: v1(),
        title: "HTML",
        questions: questionsHTML
    },
    {
        id: v1(),
        title: "CSS",
        questions: questionsCSS
    },
];

function App() {

    let [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const goToMain = () => {
        setSelectedTopic(null);
    }

    const chooseTopicHandler = (topicId: string) => {
        setSelectedTopic(topicId);
    }

    return (
        <div className="App">
            {selectedTopic && <Link onClick={goToMain}><img style={{width: "12px"}} src={backArrow} alt="Back"/> Back to topics</Link>}
            <h2 style={{alignSelf: "center"}}>{selectedTopic ? topics.find(el => el.id === selectedTopic)?.title : "Choose topic"}</h2>
            {
                selectedTopic
                ? <Questions questions={topics.filter(el => el.id === selectedTopic)[0].questions} onFinish={goToMain}/>
                : <Topics topics={topics} chooseTopic={chooseTopicHandler}/>
            }
        </div>
    );
}

export default App;
