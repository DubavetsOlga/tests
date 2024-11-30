import { useState } from "react";
import { useAppSelector } from "../../../../common/hooks/useAppSelector";
import { selectTopics } from "../../../../app/appSelectors";
import { EditModeTopics } from "./EditModeTopics";
import { EditModeQuestions } from "./EditModeQuestions";


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
                ? <EditModeQuestions
                        topicKey={topics.filter(el => el.id === editElementId)[0].questionsKey}
                        setEditElementId={setEditElementId}
                        setEditQuestionsMode={setEditQuestionsMode}
                        handleClickCancel={handleClickCancel}
                    />
                : <EditModeTopics
                        setEditElementId={setEditElementId}
                        handleClickCancel={handleClickCancel}
                        setEditQuestionsMode={setEditQuestionsMode}
                    />
                    
            }
        </>
    )
}
