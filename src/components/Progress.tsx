import styled from "styled-components"

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
                <ProgressRound
                    onClick={() => setQuestionNumber(index)}
                    color={el.isDone ? el.isRight ? "right" : "wrong" : "none"}
                    key={el.id}
                    isSelected={index === questionNumber - 1}
                />
            )}
        </div>
    )
}

const ProgressRound = styled.span<{color: "none" | "right" | "wrong", isSelected: boolean}>`
    display: inline-block;
    background-color: ${props => props.color !== "none" ? (props.color === "right" ? "#87b362" : "#cd6858") : "#cecfcd"};
    width: ${props => props.isSelected ? "8px" : "10px"};
    height: ${props => props.isSelected ? "8px" : "10px"};
    border-radius: 90%;
    margin-left: 6px;
    border: ${props => props.isSelected ? "2px solid white" : "none"};
`
