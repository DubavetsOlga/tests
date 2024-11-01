import Radio from "@mui/material/Radio"


type ProgressProps = {
    answers: { id: number, isRight: boolean, isDone: boolean }[]
    questionNumber: number
    setQuestionNumber: (number: number) => void
}

export const Progress = ({ answers, questionNumber, setQuestionNumber }: ProgressProps) => {

    return (
        <div>
            <span>{questionNumber}/{answers.length}</span>
            {
                answers.map((el, index) =>
                    <Radio
                        key={el.id}
                        onChange={() => setQuestionNumber(index)}
                        checked={index === questionNumber - 1}
                        sx={{
                            color: (el.isDone ? (el.isRight ? "#87b362" : "#cd6858") : "#cecfcd"),
                            '&.Mui-checked': {
                                color: (el.isDone ? el.isRight ? "#87b362" : "#cd6858" : "#cecfcd"),
                            },
                        }}
                    />
            )}
        </div>
    )
}
