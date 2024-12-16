import {Edit} from "../features/questions/ui/Edit/Edit";
import {Link} from "../common/components/Link/Link";
import {Questions} from "../features/questions/ui/Questions/Questions";
import {Topics} from "../features/questions/ui/Topics/Topics";
import {useCallback, useState} from "react";
import {useAppSelector} from "../common/hooks/useAppSelector";
import {selectTopics} from "./appSelectors";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export type QuestionTypes = "oneAnswer" | "severalAnswers" | "text"

export type OptionType = {
    id: string
    answer: string
    isRight: boolean
}

export type QuestionType = {
    id: string
    question: string
    options: OptionType[]
    answerDescription: string
    type: QuestionTypes
}

export type QuestionKeys = "html" | "css"

export type TopicType = {
    id: string
    title: string
    questionsKey: QuestionKeys
    description: string
}


export const Main = () => {
    const topics = useAppSelector(selectTopics)
    const isEditMode = useAppSelector(state => state.app.editMode)

    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const goToMain = useCallback(() => {
        setSelectedTopic(null);
    }, [])

    return (
        <>
            {isEditMode
                ? <Edit/>
                : <Container maxWidth="sm">
                    {selectedTopic && <Link onClick={goToMain}><ArrowBackIcon/> Back to topics</Link>}
                    <h2 style={{textAlign: "center"}}>
                        {selectedTopic
                            ? topics.find(el => el.id === selectedTopic)?.title
                            : "Choose topic"}
                    </h2>
                    {selectedTopic
                        ? <Questions
                            questionsKey={topics.filter(el => el.id === selectedTopic)[0].questionsKey}
                            onFinish={goToMain}/>
                        : <Topics topics={topics} setSelectedTopic={setSelectedTopic}/>
                    }
                </Container>
            }
        </>
    )
}
