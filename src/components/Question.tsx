import { QuestionType } from "../App"
import { Options } from "./Options"
import { Button } from './Button';
import styled from "styled-components";

type QuestionProps = {
    question: QuestionType
    setQuestionAnswer: (isRight: boolean) => void
    setUserAnswer: (answerId: string) => void
    isAnswerDone: boolean
    userAnswer: string | null
}

export const Question = ({ question, setQuestionAnswer, isAnswerDone, setUserAnswer, userAnswer }: QuestionProps) => {

    const answerClickHandler = () => {
        setQuestionAnswer(!!question.options.find(el => el.id === userAnswer)?.isRight);
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
                userAnswer={userAnswer}
            />
            { !isAnswerDone && <Button disabled={!userAnswer} title="Answer" onClick={answerClickHandler}/> }
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
