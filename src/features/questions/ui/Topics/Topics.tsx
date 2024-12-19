import { List, ListItem } from "@mui/material"
import { Link } from "../../../../common/components/Link/Link"
import { TopicType } from "../../../../app/Main"
import { memo } from "react"

type TopicsProps = {
    topics: TopicType[]
    setSelectedTopic: (topicId: string) => void
}

export const Topics = memo(({ topics, setSelectedTopic }: TopicsProps) => {
    return (
        <List>
            {topics.map((el) => (
                <ListItem key={el.id} sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                    <h3>
                        <Link onClick={() => setSelectedTopic(el.id)}>{el.title}</Link>
                    </h3>
                    <span>{el.description}</span>
                </ListItem>
            ))}
        </List>
    )
})
