import styled from "styled-components"
import { OptionType } from "../App"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"


type OptionsProps = {
    options: OptionType[]
    setAnswer: (optionId: string) => void
    showRight: boolean
    userAnswer: string | null
}

export const Options = ({ options, setAnswer, showRight, userAnswer } : OptionsProps) => {

    return (
        <>
            {
                options.map(el => 
                    // <OptionContainer
                    //     key={el.id}
                    //     color={(showRight && userAnswer === el.id) ? (el.isRight ? "right" : "wrong") : "none"}
                    //     withhover={showRight}
                    // >
                        <FormControlLabel
                            value={el.id}
                            control={<Radio />}
                            label={el.answer}
                            disabled={showRight}
                            name="option"
                            id={el.id}
                            onClick={() => setAnswer(el.id)}
                            checked={userAnswer === el.id}
                            color={(showRight && userAnswer === el.id) ? (el.isRight ? "#87b362" : "#cd6858") : "#e4dfdf"}
                        />
                    // </OptionContainer>
                )
            }
        </>
    )
}

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
`
