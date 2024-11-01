import { QuestionType } from "../App"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"


type QuestionProps = {
    question: QuestionType
    setQuestionAnswer: (isRight: boolean) => void
    setUserAnswer: (answerId: string) => void
    isAnswerDone: boolean
    userAnswer: string | null
}

export const Question = ({ question, setQuestionAnswer, isAnswerDone, setUserAnswer, userAnswer }: QuestionProps) => {

    const answerClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setQuestionAnswer(!!question.options.find(el => el.id === userAnswer)?.isRight);
    }

    return (
            <form onSubmit={answerClickHandler}>
                <FormControl variant="standard" fullWidth>
                    <FormLabel id="question">{question.question}</FormLabel>
                    <RadioGroup name="quiz" onChange={(e) => setUserAnswer(e.currentTarget.value)}>
                        {question.options.map(el => 
                            <FormControlLabel
                                value={el.id}
                                control={<Radio sx={{
                                    color: ((isAnswerDone && userAnswer === el.id) ? (el.isRight ? "#87b362" : "#cd6858") : "#cecfcd"),
                                    '&.Mui-checked': {
                                        color: ((isAnswerDone && userAnswer === el.id) ? el.isRight ? "#87b362" : "#cd6858" : "#cecfcd"),
                                    }
                                }}/>}
                                label={el.answer}
                                disabled={isAnswerDone}
                                name="option"
                                id={el.id}
                                checked={userAnswer === el.id}
                                key={el.id}
                            />
                        )}
                    </RadioGroup>
                    { !isAnswerDone && <Button
                        disabled={!userAnswer}
                        title="Answer"
                        type="submit"
                        variant="outlined"
                        sx={{alignSelf: "flex-end"}}
                    >Check Answer</Button> }
                </FormControl>
            </form>
    )
}
