import styled from "styled-components"
import { OptionType } from "../App"
import { useState } from "react"

type OptionsProps = {
    options: OptionType[]
    setAnswer: (optionId: string) => void
    showRight: boolean
}

export const Options = ({ options, setAnswer, showRight } : OptionsProps) => {

    let [userAnswer, setUserAnswer] = useState<string | null>(null);

    const setAnswerHandler = (option: string) => {
        setUserAnswer(option);
        setAnswer(option);
    }

    return (
        <StyledContainer>
            {
                options.map(el => 
                    <OptionContainer
                        key={el.id}
                        color={(showRight && userAnswer === el.id) ? (el.isRight ? "right" : "wrong") : "none"}
                        withhover={showRight}
                    >
                        <input
                            disabled={showRight}
                            type="radio"
                            name="option"
                            id={el.id}
                            value={el.id}
                            onClick={() => setAnswerHandler(el.id)}
                        />
                        <label htmlFor={el.id}>{el.answer}</label>
                    </OptionContainer>
                )
            }
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const OptionContainer = styled.div<{color: "none" | "right" | "wrong", withhover: boolean}>`
    background-color: ${props => props.color !== "none" ? (props.color === "right" ? "#87b362" : "#cd6858") : "#e4dfdf"};
    margin-bottom: 6px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 4px;

    &:hover {
        background-color: ${props => props.withhover ? "none" : "beige"}
    }

    label {
        width: 100%;
        color: #2a2f33;
    }
`