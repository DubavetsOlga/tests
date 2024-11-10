import { Button, ButtonGroup, List, ListItem, TextField } from "@mui/material";
import { TopicType } from "../App";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { Link } from "./Link";

type EditTopicsProps = {
    topics: TopicType[],
    changeTopic: () => void
}

export const Edit = ({ topics, changeTopic }: EditTopicsProps) => {
    const [editElementId, setEditElementId] = useState<string | null>(null)
    const [editQuestionMode, setEditQuestionMode] = useState(false)

    const handleClickSaveChanges = () => {
        setEditElementId(null)
        changeTopic()
    }

    const handleClickChangeQuestions = () => {
        setEditQuestionMode(true)
    }

    const handleClickDeleteTopic = () => {

    }

    const handleClickSaveQuestions = () => {
        setEditElementId(null)
        setEditQuestionMode(false)
    }

    return (
        <>
        <List>
            {!editQuestionMode && topics.map(el => 
                <ListItem key={el.id} sx={{flexDirection: "column", alignItems: "flex-start"}}>
                    {editElementId !== el.id
                        ?
                            <>
                                <h3>
                                    {el.title} <EditIcon onClick={() => setEditElementId(el.id)}/>
                                </h3>
                                <span>{el.description}</span>
                            </>
                        :
                            <>
                                <TextField required label="Title" value={el.title}/>
                                <TextField label="Description" value={el.description}/>
                                <ButtonGroup variant="contained">
                                    <Button onClick={handleClickChangeQuestions}>Change Questions</Button>
                                    <Button onClick={handleClickSaveChanges}>Save</Button>
                                    <Button onClick={handleClickDeleteTopic}>Delete</Button>
                                    <Button onClick={() => setEditElementId(null)}>Cancel</Button>
                                </ButtonGroup>
                            </>
                    }

                </ListItem>
            )}
            {editQuestionMode && topics.filter(el => el.id === editElementId)[0].questions.map(el => 
                <ListItem key={el.id}>
                    <TextField required label="Title" value={el.question}/>
                </ListItem>
            )
            }
        </List>
        {editQuestionMode && 
            <ButtonGroup variant="contained">
                <Button onClick={handleClickSaveQuestions}>Save</Button>
                <Button onClick={() => {setEditElementId(null); setEditQuestionMode(false)}}>Cancel</Button>
            </ButtonGroup>
        }
        </>
    )
}
