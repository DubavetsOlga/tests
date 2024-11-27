import { useState } from "react";
import { useAppSelector } from "../../../../common/hooks/useAppSelector";
import { selectTopics } from "../../../../app/appSelectors";
import { EditTopic } from "./EditTopic";
import { EditQuestions } from "./EditQuestions";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { EditModeTopics } from "./EditModeTopics";
import { TopicType } from "../../../../app/Main";


export const Edit = () => {
    const topics = useAppSelector(selectTopics)
    const [editElementId, setEditElementId] = useState<string | null>(null)
    const [editQuestionsMode, setEditQuestionsMode] = useState(false)

    const handleClickCancel = () => {
        setEditElementId(null)
        setEditQuestionsMode(false)
    }

    return (
        <>
            {editQuestionsMode
                ? <EditQuestions
                        topicKey={topics.filter(el => el.id === editElementId)[0].questionsKey}
                        setEditElementId={setEditElementId}
                        setEditQuestionsMode={setEditQuestionsMode}
                        handleClickCancel={handleClickCancel}
                    />
                : editElementId
                    ? <EditTopic
                            topic={topics.find(el => el.id === editElementId) as TopicType}
                            setEditElementId={setEditElementId}
                            setEditQuestionsMode={setEditQuestionsMode}
                            handleClickCancel={handleClickCancel}
                        />
                    : <EditModeTopics setEditElementId={setEditElementId}/>
                    
            }
        </>
    )
}
