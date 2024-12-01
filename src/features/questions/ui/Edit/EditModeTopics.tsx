import ListItem from "@mui/material/ListItem";
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from "../../../../common/hooks/useAppSelector";
import { selectTopics } from "../../../../app/appSelectors";
import { EditTopic } from "./EditTopic";
import { TopicType } from "../../../../app/Main";
import { memo } from "react";


type Props = {
    setEditElementId: (value: string | null) => void
    handleClickCancel: () => void
    setEditQuestionsMode: (value: boolean) => void
    editableTopicId: string | null
}


export const EditModeTopics = memo(({ setEditElementId, handleClickCancel, setEditQuestionsMode, editableTopicId }: Props) => {
    const topics = useAppSelector(selectTopics)

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
                            <EditIcon onClick={() => setEditElementId(topic.id)}/>
                        </h3>
                        <span>{topic.description}</span>
                    </ListItem>
                )
            }
        </>
    )
})
