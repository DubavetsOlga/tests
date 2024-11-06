import { OptionType, QuestionType } from "../App"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"
import { FormEvent } from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";


type QuestionProps = {
    question: QuestionType
    setQuestionAnswer: (isRight: boolean) => void
    setUserAnswer: (answerId: string, isChecked: boolean | null) => void
    isAnswerDone: boolean
    userAnswers: String[]
}

export const Question = ({ question, setQuestionAnswer, isAnswerDone, setUserAnswer, userAnswers }: QuestionProps) => {

    const answerClickHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setQuestionAnswer(question.options.findIndex(el => el.isRight
            ? !userAnswers.includes(el.id)
            : userAnswers.includes(el.id)
        ) === -1);
    }

    const optionColor = (el: OptionType) => {
        const color = (isAnswerDone && userAnswers .includes(el.id)) ? (el.isRight ? "#87b362" : "#cd6858") : "#cecfcd"
        return {
            color: color,
            '&.Mui-checked': {
                color: color,
            }
        }
    }

    return (
            <form onSubmit={answerClickHandler}>
                <FormControl variant="standard" fullWidth>
                    <FormLabel id="question">{question.question}</FormLabel>

                    {question.type === "oneAnswer" && 
                        <RadioGroup name="quiz" onChange={(e) => setUserAnswer(e.currentTarget.value, null)}>
                            {question.options.map(el => 
                                <FormControlLabel
                                    value={el.id}
                                    control={<Radio sx={() => optionColor(el)}/>}
                                    label={el.answer}
                                    disabled={isAnswerDone}
                                    name="option"
                                    id={el.id}
                                    checked={userAnswers.includes(el.id)}
                                    key={el.id}
                                />
                            )}
                        </RadioGroup>
                    }

                    {question.type === "severalAnswers" &&
                        <FormGroup>
                            {question.options.map(el => 
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={userAnswers.includes(el.id)}
                                            onChange={(e) => setUserAnswer(el.id, e.currentTarget.checked)}
                                            name={el.id} 
                                            sx={() => optionColor(el)}
                                        />
                                    }
                                    label={el.answer}
                                    disabled={isAnswerDone}
                                    key={el.id}
                                />
                            )}
                        </FormGroup>
                    }

                    { !isAnswerDone && <Button
                        disabled={userAnswers.length === 0}
                        title="Answer"
                        type="submit"
                        variant="outlined"
                        sx={{alignSelf: "flex-end"}}
                    >Check Answer</Button> }
                </FormControl>
            </form>
    )
}
