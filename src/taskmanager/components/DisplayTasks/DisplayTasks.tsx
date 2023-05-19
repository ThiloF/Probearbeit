import { Task } from "../../../types/Task"

type Props = {
    task: Task 
}

export default function DisplayTasks({task}: Props){


    return(
        <h1> {task.title} </h1>
    )
}