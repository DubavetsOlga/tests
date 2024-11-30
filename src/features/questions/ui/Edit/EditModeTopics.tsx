import ListItem from "@mui/material/ListItem";
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from "../../../../common/hooks/useAppSelector";
import { selectTopics } from "../../../../app/appSelectors";
import { useState } from "react";
import { EditTopic } from "./EditTopic";
import { TopicType } from "../../../../app/Main";


type Props = {
    setEditElementId: (value: string | null) => void
    handleClickCancel: () => void
    setEditQuestionsMode: (value: boolean) => void
}


export const EditModeTopics = ({ setEditElementId, handleClickCancel, setEditQuestionsMode}: Props) => {
    const [editableTopicId, setEditableTopicId] = useState<string | null>(null)
    const topics = useAppSelector(selectTopics)

    const handleClickEditTopic = (topicId: string) => {
        setEditableTopicId(topicId)
        setEditElementId(topicId)
    }

    return (
        <>
            {editableTopicId
                ? <EditTopic
                        topic={topics.find(el => el.id === editableTopicId) as TopicType}
                        setEditElementId={setEditElementId}
                        setEditQuestionsMode={setEditQuestionsMode}
                        handleClickCancel={handleClickCancel}
                    />
                : topics.map(topic => 
                    <ListItem key={topic.id} sx={{flexDirection: "column", alignItems: "flex-start"}}>
                        <h3>
                            {topic.title}
                            <EditIcon onClick={() => handleClickEditTopic(topic.id)}/>
                        </h3>
                        <span>{topic.description}</span>
                    </ListItem>
                )
            }
        </>
    )
}
