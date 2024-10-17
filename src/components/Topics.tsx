import { TopicType } from "../App";
import { Link } from "./Link";

type TopicsProps = {
    topics: TopicType[],
    chooseTopic: (topicId: string) => void
}

export const Topics = ({ topics, chooseTopic }: TopicsProps) => {
    return (
        <ul>
            {topics.map(el => <li><h3><Link title={el.title} onClick={() => chooseTopic(el.id)}/></h3></li>)}
        </ul>
    )
}
