import { TopicType } from "../App";
import { Link } from "./Link";

type TopicsProps = {
    topics: TopicType[],
    chooseTopic: (topicId: string) => void
}

export const Topics = ({ topics, chooseTopic }: TopicsProps) => {
    return (
        <ul>
            {topics.map(el => <li key={el.id}><h3><Link onClick={() => chooseTopic(el.id)}>{el.title}</Link></h3></li>)}
        </ul>
    )
}
