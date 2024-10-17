import React, { useState } from 'react';
import './App.css';
import { v1 } from 'uuid';
import { Questions } from './components/Questions';
import { Topics } from './components/Topics';
import { Link } from './components/Link';

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

const questionsHTML = [
    {
        id: v1(),
        question: "q1",
        options: [
            {
                id: v1(),
                answer: "a1",
                isRight: true,
            },
            {
                id: v1(),
                answer: "a2",
                isRight: false,
            },
            {
                id: v1(),
                answer: "a3",
                isRight: false,
            },
        ],
        answerDescription: "first right",
    },
    {
        id: v1(),
        question: "q2",
        options: [
            {
                id: v1(),
                answer: "a1",
                isRight: true,
            },
            {
                id: v1(),
                answer: "a2",
                isRight: false,
            },
            {
                id: v1(),
                answer: "a3",
                isRight: false,
            },
        ],
        answerDescription: "first right",
    },
    {
        id: v1(),
        question: "q3",
        options: [
            {
                id: v1(),
                answer: "a1",
                isRight: true,
            },
            {
                id: v1(),
                answer: "a2",
                isRight: false,
            },
            {
                id: v1(),
                answer: "a3",
                isRight: false,
            },
        ],
        answerDescription: "first right",
    },
];

const questionsCSS = [
    {
        id: v1(),
        question: "q1",
        options: [
            {
                id: v1(),
                answer: "a1",
                isRight: true,
                isUserAnswer: false,
            },
            {
                id: v1(),
                answer: "a2",
                isRight: false,
                isUserAnswer: false,
            },
            {
                id: v1(),
                answer: "a3",
                isRight: false,
                isUserAnswer: false,
            },
        ],
        answerDescription: "first right",
    },
    {
        id: v1(),
        question: "q2",
        options: [
            {
                id: v1(),
                answer: "a1",
                isRight: true,
                isUserAnswer: false,
            },
            {
                id: v1(),
                answer: "a2",
                isRight: false,
                isUserAnswer: false,
            },
            {
                id: v1(),
                answer: "a3",
                isRight: false,
                isUserAnswer: false,
            },
        ],
        answerDescription: "first right",
    },
    {
        id: v1(),
        question: "q3",
        options: [
            {
                id: v1(),
                answer: "a1",
                isRight: true,
                isUserAnswer: false,
            },
            {
                id: v1(),
                answer: "a2",
                isRight: false,
                isUserAnswer: false,
            },
            {
                id: v1(),
                answer: "a3",
                isRight: false,
                isUserAnswer: false,
            },
        ],
        answerDescription: "first right",
    },
];

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
            {selectedTopic && <Link title="<- Back to topics" onClick={goToMain}/>}
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
