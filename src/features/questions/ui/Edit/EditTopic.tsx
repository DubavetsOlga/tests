import TextField from "@mui/material/TextField";
import { TopicType } from "../../../../app/Main";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid2 } from "@mui/material";


type Props = {
    topic: TopicType
    setEditElementId: (value: string | null) => void
    setEditQuestionsMode: (value: boolean) => void
    handleClickCancel: () => void
}


export const EditTopic = ({ topic, setEditElementId, setEditQuestionsMode, handleClickCancel }: Props) => {

    const handleClickSaveChanges = () => {
        setEditElementId(null)
        //dispatch change Topic
    }

    const handleClickChangeQuestions = () => {
        setEditQuestionsMode(true)
    }

    const handleClickDeleteTopic = () => {
        setEditElementId(null)
        //dispatch delete Topic
    }

    return (
        <Grid2 container spacing={2} sx={{flexDirection:"column"}}>
            <TextField required label="Title" value={topic.title}/>
            <TextField label="Description" value={topic.description}/>
            <ButtonGroup variant="contained">
                <Button onClick={handleClickSaveChanges}>Save</Button>
                <Button onClick={handleClickDeleteTopic}>Delete</Button>
                <Button onClick={handleClickCancel}>Cancel</Button>
                <Button onClick={handleClickChangeQuestions}>Change Questions</Button>
            </ButtonGroup>
        </Grid2>
    )
}
