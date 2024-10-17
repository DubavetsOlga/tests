import { useState, useEffect } from "react";
import { QuestionType } from "../App"
import { Question } from "./Question"
import { Progress } from './Progress';
import { Button } from './Button';
import styled from "styled-components";

type QuestionsProps = {
    questions: QuestionType[],
    onFinish: () => void
}

export const Questions = ({ questions, onFinish }: QuestionsProps) => {
    const answersInit = [
        {id: 0, isRight: false, isDone: false,},
        {id: 1, isRight: false, isDone: false,},
        {id: 2, isRight: false, isDone: false,}
    ];

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

    return (
        <StyledContainer>
            <Progress questionNumber={questionNumber + 1} answers={answers}/>
            <Question question={questions[questionNumber]} setQuestionAnswer={setQuestionAnswer} isAnswerDone={isAnswerDone}/>
            {isAnswerDone &&
                <>
                    <Button title={isLastQuestion ? "Finish" : "Next"} onClick={isLastQuestion ? onFinish : nextQuestion}/>
                    <div>{answers[questionNumber].isRight ? "👍" : "😔"}{questions[questionNumber].answerDescription}</div>
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
