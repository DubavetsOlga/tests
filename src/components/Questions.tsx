import { useState } from "react";
import { QuestionType } from "../App"
import { Question } from "./Question"
import Button from "@mui/material/Button";
import { Progress } from "./Progress";
import { Box, Link, Paper } from "@mui/material";

type QuestionsProps = {
    questions: QuestionType[],
    onFinish: () => void
}

type answerType = {
    id: number
    isRight: boolean
    isDone: boolean
    userAnswer: null | string
}

const answersInition = (count: number) => {
    const answersInit: answerType[] = [];
    for (let i = 0; i < count; i++) {
        answersInit.push({ id: i, isRight: false, isDone: false, userAnswer: null });
    }

    return answersInit;
}

export const Questions = ({ questions, onFinish }: QuestionsProps) => {
    const answersInit = answersInition(questions.length);

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState<answerType[]>(answersInit);

    const isLastQuestion = questionNumber === questions.length - 1;

    const setQuestionAnswer = (isRight: boolean) => {
        const newAnswers = [...answers]
        newAnswers[questionNumber].isDone = true;
        newAnswers[questionNumber].isRight = isRight;
        setAnswers(newAnswers);
    }

    const setUserAnswer = (answerId: string) => {
        const newAnswers = [...answers];
        newAnswers[questionNumber].userAnswer = answerId;
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
                    userAnswer={answers[questionNumber].userAnswer}
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
