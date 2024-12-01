import { useCallback, useState } from "react";
import { useAppSelector } from "../../../../common/hooks/useAppSelector";
import { selectTopics } from "../../../../app/appSelectors";
import { EditModeTopics } from "./EditModeTopics";
import { EditModeQuestions } from "./EditModeQuestions";
import Container from "@mui/material/Container";


export const Edit = () => {
    const topics = useAppSelector(selectTopics)
    const [editElementId, setEditElementId] = useState<string | null>(null)
    const [editQuestionsMode, setEditQuestionsMode] = useState(false)

    const handleClickCancel = useCallback(() => {
        setEditElementId(null)
        setEditQuestionsMode(false)
    }, [])

    return (
        <Container maxWidth="md">
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
                        editableTopicId={editElementId}
                    />
            }
        </Container>
    )
}
