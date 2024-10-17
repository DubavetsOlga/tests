import { TopicType } from "../App";
import { Link } from "./Link";

type TopicsProps = {
    topics: TopicType[],
    chooseTopic: (topicId: string) => void
}

export const Topics = ({ topics, chooseTopic }: TopicsProps) => {
    return (
        <ul>
            {topics.map(el => <li><Link title={el.title} onClick={() => chooseTopic(el.id)}/></li>)}
        </ul>
    )
}
