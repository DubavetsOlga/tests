import {useAppSelector} from "../../../../common/hooks/useAppSelector";
import {selectTopics} from "../../../../app/appSelectors";
import {EditTopic} from "./EditTopic";
import {TopicType} from "../../../../app/Main";
import {memo} from "react";
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


type Props = {
    setEditElementId: (value: string | null) => void
    handleClickCancel: () => void
    setEditQuestionsMode: (value: boolean) => void
    editableTopicId: string | null
}


export const EditModeTopics = memo(({
                                        setEditElementId,
                                        handleClickCancel,
                                        setEditQuestionsMode,
                                        editableTopicId
                                    }: Props) => {
    const topics = useAppSelector(selectTopics)

    const handleClickAddTopic = () => {

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
                : <>
                    {topics.map(topic =>
                        <Box key={topic.id} sx={{flexDirection: "column", alignItems: "flex-start", mb: 3}}>
                            <h3>
                                {topic.title}
                                <EditIcon onClick={() => setEditElementId(topic.id)}/>
                            </h3>
                            <span>{topic.description}</span>
                        </Box>
                    )}
                    <Button variant="contained" onClick={handleClickAddTopic}>Add Topic</Button>
                </>
            }
        </>
    )
})
