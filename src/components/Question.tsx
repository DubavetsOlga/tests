import { QuestionType } from "../App"
import { Options } from "./Options"
import { Button } from './Button';
import { useState } from "react";
import styled from "styled-components";

type QuestionProps = {
    question: QuestionType
    setQuestionAnswer: (isRight: boolean) => void
    isAnswerDone: boolean
}

export const Question = ({ question, setQuestionAnswer, isAnswerDone }: QuestionProps) => {
    let [userAnswer, setUserAnswer] = useState<string | null>(null);

    const answerClickHandler = () => {
        setQuestionAnswer(!!question.options.find(el => el.id === userAnswer)?.isRight);
        setUserAnswer(null);
    }

    const setQuestionAnswerHandler = (optionId: string) => {
        setUserAnswer(optionId);
    }

    return (
        <StyledContainer>
            <p>{question.question}</p>
            <Options
                options={question.options}
                showRight={isAnswerDone}
                setAnswer={ setQuestionAnswerHandler }
            />
            { !isAnswerDone && <Button disabled={!userAnswer} title="Answer" onClick={answerClickHandler}/>
            }
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 4px;

    button {
        align-self: flex-end;
        width: fit-content;
    }
`
