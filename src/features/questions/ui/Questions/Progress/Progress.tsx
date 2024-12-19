import Radio from "@mui/material/Radio"
import { memo } from "react"

type ProgressProps = {
    answers: { id: number; isRight: boolean; isDone: boolean }[]
    questionNumber: number
    setQuestionNumber: (number: number) => void
}

export const Progress = memo(({ answers, questionNumber, setQuestionNumber }: ProgressProps) => {
    return (
        <div>
            <span>
                {questionNumber}/{answers.length}
            </span>
            {answers.map((el, index) => (
                <Radio
                    key={el.id}
                    onChange={() => setQuestionNumber(index)}
                    checked={index === questionNumber - 1}
                    size="small"
                    sx={{
                        color: el.isDone ? (el.isRight ? "#87b362" : "#cd6858") : "#cecfcd",
                        "&.Mui-checked": {
                            color: el.isDone ? (el.isRight ? "#87b362" : "#cd6858") : "#cecfcd",
                        },
                        p: "2px",
                    }}
                />
            ))}
        </div>
    )
})
