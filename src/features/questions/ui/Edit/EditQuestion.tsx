import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box"
import { QuestionType } from "../../../../app/Main"
import ButtonGroup from "@mui/material/ButtonGroup"
import { useState } from "react"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"


type Props = {
    question: QuestionType
    seteditableQuestion: (valuse: QuestionType | null) => void
}


export const EditQuestion = ({ question, seteditableQuestion }: Props) => {
    const [questionType, setQuestionType] = useState<"oneAnswer" | "severalAnswers" | "text">("oneAnswer")

    const handleClickSaveQuestion = () => {
        //dispatch save
        seteditableQuestion(null)
    }

    const handleClickCancel = () => {
        seteditableQuestion(null)
    }

    const handleChangeQuestionType = (event: SelectChangeEvent) => {
        setQuestionType(event.target.value as "oneAnswer" | "severalAnswers" | "text")
    }

    return (
        <Box key={question.id} sx={{mb: 5}}>
            <Grid2 container spacing={2} sx={{flexDirection:"column", mb: 2}}>
                <TextField required label="Question" value={question.question}/>
                <Select id={question.id} value={questionType} onChange={handleChangeQuestionType}>
                    <MenuItem value={"oneAnswer"}>one answer</MenuItem>
                    <MenuItem value={"severalAnswers"}>several answers</MenuItem>
                    <MenuItem value={"text"}>text</MenuItem>
                </Select>
                {questionType === "oneAnswer"
                    ? <RadioGroup name="options">
                            {question.options.map(op => 
                                <Box style={{display:"flex", width:"100%"}} >
                                    <FormControlLabel
                                        value={op.id}
                                        control={<Radio/>}
                                        label=""
                                        name="option"
                                        id={op.id}
                                        checked={op.isRight}
                                        key={op.id}
                                    />
                                    <TextField required value={op.answer} sx={{flexGrow:1}}/>
                                </Box>
                            )}
                        </RadioGroup>
                    : 
                        question.options.map(op =>
                            <Box style={{display:"flex", width:"100%"}} >
                                <Checkbox checked={op.isRight}/>
                                <TextField required value={op.answer} sx={{flexGrow:1}}/>
                            </Box>
                        )
                }
                <TextField label="Answer description" value={question.answerDescription}/>
            </Grid2>
            <ButtonGroup variant="contained">
                <Button onClick={handleClickSaveQuestion}>Save</Button>
                <Button onClick={handleClickCancel}>Cancel</Button>
            </ButtonGroup>
        </Box>
    )
}
