import ListItem from "@mui/material/ListItem";
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from "../../../../common/hooks/useAppSelector";
import { selectTopics } from "../../../../app/appSelectors";


type Props = {
    setEditElementId: (value: string | null) => void
}


export const EditModeTopics = ({ setEditElementId}: Props) => {
    const topics = useAppSelector(selectTopics)

    return (
        <>
            {topics.map(topic => 
                <ListItem key={topic.id} sx={{flexDirection: "column", alignItems: "flex-start"}}>
                    <h3>
                        {topic.title}
                        <EditIcon onClick={() => setEditElementId(topic.id)}/>
                    </h3>
                    <span>{topic.description}</span>
                </ListItem>
            )}
        </>
    )
}
