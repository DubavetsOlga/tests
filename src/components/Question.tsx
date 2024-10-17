import { QuestionType } from "../App"
import { Options } from "./Options"
import { Button } from './Button';
import { useState } from "react";

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
        <div>
            <p>{question.question}?</p>
            <Options
                options={question.options}
                showRight={isAnswerDone}
                setAnswer={ setQuestionAnswerHandler }
            />
            { !isAnswerDone && <Button disabled={!userAnswer} title="Answer" onClick={answerClickHandler}/>
            }
        </div>
    )
}
