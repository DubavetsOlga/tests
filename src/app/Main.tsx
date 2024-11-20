import Container from "@mui/material/Container";
import { Edit } from "../features/questions/ui/Edit/Edit";
import { Link } from "../common/components/Link/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Questions } from "../features/questions/ui/Questions/Questions";
import { Topics } from "../features/questions/ui/Topics/Topics";
import {useCallback, useState} from "react";
import { htmlQuestions } from "../questions/html/HtmlQuestions";
import { cssQuestions } from "../questions/css/CssQuestions";
import { v1 } from "uuid";
import { useAppSelector } from "../common/hooks/useAppSelector";

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
    type: "oneAnswer" | "severalAnswers" | "text"
}

export type TopicType = {
    id: string
    title: string
    questions: QuestionType[]
    description: string
}

const topics: TopicType[] = [
    {
        id: v1(),
        title: "HTML",
        questions: htmlQuestions,
        description: "5 questions about base HTML"
    },
    {
        id: v1(),
        title: "CSS",
        questions: cssQuestions,
        description: "6 questions about base CSS"
    },
];

export const Main = () => {
    const isEditMode = useAppSelector(state => state.app.editMode)

    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const goToMain = useCallback(() => {
        setSelectedTopic(null);
    }, [])

    return (
        <>
            {isEditMode &&
                <Container maxWidth="md">
                    <Edit topics={topics} changeTopic={() => {}}/>
                </Container>
            }
            {!isEditMode &&
                <Container maxWidth="sm">
                    {selectedTopic && <Link onClick={goToMain}><ArrowBackIcon/> Back to topics</Link>}
                    <h2 style={{textAlign: "center"}}>
                        {selectedTopic
                            ? topics.find(el => el.id === selectedTopic)?.title
                            : "Choose topic"}
                    </h2>
                    {
                        selectedTopic
                            ? <Questions questions={topics.filter(el => el.id === selectedTopic)[0].questions} onFinish={goToMain}/>
                            : <Topics topics={topics} setSelectedTopic={setSelectedTopic}/>
                    }
                </Container>
            }
        </>
    )
}
