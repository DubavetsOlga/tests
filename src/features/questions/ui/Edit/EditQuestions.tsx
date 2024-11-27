import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import { useAppSelector } from "../../../../common/hooks/useAppSelector"
import { selectQuestions } from "../../../../app/appSelectors"
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box"

type Props = {
    topicKey: string
    setEditElementId: (value: string | null) => void
    setEditQuestionsMode: (value: boolean) => void
    handleClickCancel: () => void
}

export const EditQuestions = ({ topicKey, setEditElementId, setEditQuestionsMode, handleClickCancel }: Props) => {
    const questions = useAppSelector(selectQuestions)

    const handleClickSaveQuestions = () => {
        setEditElementId(null)
        setEditQuestionsMode(false)
    }

    return (
        <>
            {questions[topicKey].map(el =>
                <Box key={el.id} sx={{mb: 5}}>
                    <Grid2 container spacing={2} sx={{flexDirection:"column", mb: 2}}>
                        <TextField required label="Question" value={el.question}/>
                        <Select labelId="select-label" id={el.id} value={el.type} label="Type">
                            <MenuItem value={"oneAnswer"}>one answer</MenuItem>
                            <MenuItem value={"severalAnswers"}>several answers</MenuItem>
                            <MenuItem value={"text"}>text</MenuItem>
                        </Select>
                        {el.options.map(q =>
                            <Box style={{display:"flex", width:"100%"}} >
                                <Checkbox checked={q.isRight}/>
                                <TextField required value={q.answer} sx={{flexGrow:1}}/>
                            </Box>
                        )}
                    </Grid2>
                    <Button variant="contained" onClick={handleClickSaveQuestions}>Save</Button>
                </Box>
            )}
            <Button variant="contained" onClick={handleClickCancel}>Cancel</Button>
        </>
    )
}
