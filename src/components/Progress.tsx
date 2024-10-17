import styled from "styled-components"

type ProgressProps = {
    answers: { id: number, isRight: boolean, isDone: boolean }[],
    questionNumber: number
}

export const Progress = ({ answers, questionNumber }: ProgressProps) => {
    return (
        <div>
            <span>{questionNumber}/{answers.length}</span>
            {
                answers.map(el => <ProgressRound color={el.isDone ? el.isRight ? "right" : "wrong" : "none"} key={el.id}/>)
            }
        </div>
    )
}

const ProgressRound = styled.span<{color: "none" | "right" | "wrong"}>`
    display: inline-block;
    background-color: ${props => props.color !== "none" ? (props.color === "right" ? "#87b362" : "#cd6858") : "#cecfcd"};
    width: 10px;
    height: 10px;
    border-radius: 90%;
    margin-left: 6px;
`
//add click on ProgressRound
//border for selected ProgressRound
