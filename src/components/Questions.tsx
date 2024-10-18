import { useState, useEffect } from "react";
import { QuestionType } from "../App"
import { Question } from "./Question"
import { Progress } from './Progress';
import { Button } from './Button';
import styled from "styled-components";
import { Link } from "./Link";

type QuestionsProps = {
    questions: QuestionType[],
    onFinish: () => void
}

export const Questions = ({ questions, onFinish }: QuestionsProps) => {
    let answersInit: {id: number, isRight: boolean, isDone: boolean, userAnswer: null | string}[] = [];
    for (let i = 0; i < questions.length; i++) {
        answersInit.push({id: i, isRight: false, isDone: false, userAnswer: null});
    }

    let [questionNumber, setQuestionNumber] = useState<number>(0);
    let [isAnswerDone, setIsAnswerDone] = useState<boolean>(false);
    let [answers, setAnswers] = useState(answersInit);

    let isLastQuestion = questionNumber === questions.length - 1;

    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setIsAnswerDone(false);
    }

    const setQuestionAnswer = (isRight: boolean) => {
        setIsAnswerDone(true);
        answers[questionNumber].isDone = true;
        answers[questionNumber].isRight = isRight;
        setAnswers([...answers]);
    }

    const progressRoundClickHandler = (number: number) => {
        setIsAnswerDone(answers[number].isDone);
        setQuestionNumber(number);
    }

    const setUserAnswer = (answerId: string) => {
        answers[questionNumber].userAnswer = answerId;
        setAnswers([...answers]);
    }

    return (
        <StyledContainer>
            <Progress questionNumber={questionNumber + 1} answers={answers} setQuestionNumber={progressRoundClickHandler}/>
            <Question
                question={questions[questionNumber]}
                setQuestionAnswer={setQuestionAnswer}
                isAnswerDone={isAnswerDone}
                setUserAnswer={setUserAnswer}
                userAnswer={answers[questionNumber].userAnswer}
            />
            {isAnswerDone &&
                <>
                    <Button title={isLastQuestion ? "Finish" : "Next"} onClick={isLastQuestion ? onFinish : nextQuestion}/>
                    <div>
                        {answers[questionNumber].isRight ? "👍" : "😔"}
                        <Link href={questions[questionNumber].answerDescription}>
                            Read About
                        </Link>
                    </div>
                </>
            }
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    button {
        align-self: flex-end;
    }
`
