import { Button, ButtonGroup, Checkbox, List, ListItem, MenuItem, Select, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import {TopicType} from "../../../../app/Main";

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

    const handleClickCancel = () => {
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
                                    <Button onClick={handleClickCancel}>Cancel</Button>
                                </ButtonGroup>
                            </>
                    }

                </ListItem>
            )}
            </List>
            {editQuestionMode && topics.filter(el => el.id === editElementId)[0].questions.map(el => 
                <div key={el.id}>
                    <TextField required label="Title" value={el.question}/>
                    <Select labelId="select-label" id={el.id} value={el.type} label="Type">
                        <MenuItem value={"oneAnswer"}>one answer</MenuItem>
                        <MenuItem value={"severalAnswers"}>several answers</MenuItem>
                        <MenuItem value={"text"}>text</MenuItem>
                    </Select>
                    {el.options.map(q => 
                        <div>
                            <TextField required value={q.answer}/>
                            <Checkbox checked={q.isRight}/> Is Right?
                        </div>
                    )}
                </div>
            )
            }
        {editQuestionMode && 
            <ButtonGroup variant="contained">
                <Button onClick={handleClickSaveQuestions}>Save</Button>
                <Button onClick={handleClickCancel}>Cancel</Button>
            </ButtonGroup>
        }
        </>
    )
}
