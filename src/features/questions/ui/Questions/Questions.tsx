import { useState } from "react";
import { Question } from "./Question/Question"
import Button from "@mui/material/Button";
import { Progress } from "./Progress/Progress";
import { Box, Link, Paper } from "@mui/material";
import {QuestionKeys, QuestionType} from "../../../../app/Main";
import {useAppSelector} from "../../../../common/hooks/useAppSelector";
import {selectQuestions} from "../../../../app/appSelectors";

type QuestionsProps = {
    questionsKey: QuestionKeys,
    onFinish: () => void
}

type answerType = {
    id: number
    isRight: boolean
    isDone: boolean
    userAnswers: String[]
}

const answersInition = (count: number) => {
    const answersInit: answerType[] = [];
    for (let i = 0; i < count; i++) {
        answersInit.push({ id: i, isRight: false, isDone: false, userAnswers: [] });
    }

    return answersInit;
}

export const Questions = ({ questionsKey, onFinish }: QuestionsProps) => {
    const questions = useAppSelector(selectQuestions)[questionsKey]
    const answersInit = answersInition(questions.length);

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState<answerType[]>(answersInit);

    const isLastQuestion = questionNumber === questions.length - 1;

    const setQuestionAnswer = (isRight: boolean) => {
        const newAnswers = [...answers]
        newAnswers[questionNumber].isDone = true;
        newAnswers[questionNumber].isRight = isRight
        setAnswers(newAnswers);
    }

    const setUserAnswer = (answerId: string, isChecked: boolean | null) => {
        let newAnswers = [...answers];
        if (isChecked === null) {
            newAnswers[questionNumber].userAnswers = [answerId]
        } else if (isChecked) {
            newAnswers[questionNumber].userAnswers = [...newAnswers[questionNumber].userAnswers, answerId]
        } else {
            newAnswers[questionNumber].userAnswers = newAnswers[questionNumber].userAnswers.filter(el => el !== answerId);
        }
        setAnswers(newAnswers);
    }

    const handleClickNext = () => {
        return isLastQuestion ? onFinish() : setQuestionNumber(questionNumber + 1);
    }

    return (
        <Box>
            <Paper sx={{p:2, display:"flex", flexDirection:"column"}}>
                <Progress questionNumber={questionNumber + 1} answers={answers} setQuestionNumber={setQuestionNumber}/>
                <Question
                    question={questions[questionNumber]}
                    setQuestionAnswer={setQuestionAnswer}
                    isAnswerDone={answers[questionNumber].isDone}
                    setUserAnswer={setUserAnswer}
                    userAnswers={answers[questionNumber].userAnswers}
                />
                {answers[questionNumber].isDone &&
                    <>
                        <Button onClick={handleClickNext} variant="outlined" sx={{alignSelf: "flex-end"}}>
                            {isLastQuestion ? "Finish" : "Next"}
                        </Button>
                        <div>
                            {answers[questionNumber].isRight ? "👍" : "😔"}
                            <Link href={questions[questionNumber].answerDescription}>
                                Read About
                            </Link>
                        </div>
                    </>
                }
            </Paper>
        </Box>
    )
}
