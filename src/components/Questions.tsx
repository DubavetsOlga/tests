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
    const [questionNumber, setQuestionNumber] = useState(0);
    const [isAnswerDone, setIsAnswerDone] = useState(false);
    const [answers, setAnswers] = useState<answerType[]>(answersInition(questions.length));

    const isLastQuestion = questionNumber === questions.length - 1;

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
        <Box>
            <Paper sx={{p:2, display:"flex", flexDirection:"column"}}>
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
                        <Button onClick={isLastQuestion ? onFinish : nextQuestion} variant="outlined" sx={{alignSelf: "flex-end"}}>
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
