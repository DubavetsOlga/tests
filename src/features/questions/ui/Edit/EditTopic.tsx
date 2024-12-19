import { TopicType } from "../../../../app/Main"
import { useState } from "react"
import { Grid2 } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

type Props = {
    topic: TopicType
    setEditElementId: (value: string | null) => void
    setEditQuestionsMode: (value: boolean) => void
    handleClickCancel: () => void
}

export const EditTopic = ({ topic, setEditElementId, setEditQuestionsMode, handleClickCancel }: Props) => {
    const [title, setTitle] = useState(topic.title)
    const [description, setDescription] = useState(topic.description)

    const handleClickSaveChanges = () => {
        setEditElementId(null)
        //dispatch change Topic
    }

    const handleClickToChangeQuestions = () => {
        setEditQuestionsMode(true)
    }

    const handleClickDeleteTopic = () => {
        setEditElementId(null)
        //dispatch delete Topic
    }

    const handleClickChangeTitle = (title: string) => {
        setTitle(title)
    }

    const handleClickChangeDescription = (description: string) => {
        setDescription(description)
    }

    return (
        <Grid2 container spacing={2} sx={{ flexDirection: "column" }}>
            <TextField
                required
                label="Title"
                value={title}
                onChange={(e) => handleClickChangeTitle(e.currentTarget.value)}
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => handleClickChangeDescription(e.currentTarget.value)}
            />

            <ButtonGroup variant="contained">
                <Button onClick={handleClickSaveChanges}>Save</Button>
                <Button onClick={handleClickDeleteTopic}>Delete</Button>
                <Button onClick={handleClickCancel}>Cancel</Button>
                <Button onClick={handleClickToChangeQuestions}>Change Questions</Button>
            </ButtonGroup>
        </Grid2>
    )
}
