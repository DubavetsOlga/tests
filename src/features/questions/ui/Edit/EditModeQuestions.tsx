import Checkbox from "@mui/material/Checkbox"
import { useAppSelector } from "../../../../common/hooks/useAppSelector"
import { selectQuestions } from "../../../../app/appSelectors"
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "../../../../common/components/Link/Link"
import { EditQuestion } from "./EditQuestion"
import { useState } from "react"
import { QuestionType } from "../../../../app/Main"


type Props = {
    topicKey: string
    setEditElementId: (value: string | null) => void
    setEditQuestionsMode: (value: boolean) => void
    handleClickCancel: () => void
}


export const EditModeQuestions = ({ topicKey, handleClickCancel }: Props) => {
    const questions = useAppSelector(selectQuestions)
    const [editableQuestion, seteditableQuestion] = useState<QuestionType | null>(null)

    const handleClickEditQuestion = (question: QuestionType) => {
        seteditableQuestion(question)
    }

    return (
        <>
            {editableQuestion
                ? <EditQuestion question={editableQuestion} seteditableQuestion={seteditableQuestion}/>
                : <>
                    <Link onClick={handleClickCancel}><ArrowBackIcon/> Back</Link>
                    {questions[topicKey].map(el =>
                        <Box key={el.id} sx={{mb: 3}}>
                            <Grid2 container spacing={2} sx={{flexDirection:"column", mb: 2}}>
                                <div>
                                    <span>{el.question}</span>
                                    <EditIcon onClick={() => handleClickEditQuestion(el)}/>
                                </div>
                                <span>{el.type}</span>
                                {el.options.map(op =>
                                    <div>
                                        <Checkbox disabled checked={op.isRight}/>
                                        <span>{op.answer}</span>
                                    </div>
                                )}
                                <span>{el.answerDescription}</span>
                            </Grid2>
                            <Divider />
                        </Box>
                    )}
                </>
            }
        </>
    )
}