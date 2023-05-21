import { Task } from "../../../types/Task"
import Styling from "./DisplayTasks.module.css"
import StatusButton from "../../../buttons/statusButton/StatusButton"
import { useState } from "react"

type Props = {
    key: number
    task: Task 
}

export default function DisplayTasks({task}: Props){


    const[status, setStatus] = useState<boolean>(task.is_completed)

    


    return(
        <div className={Styling.taskContainer}>
            <h1> {task.title} </h1>
            <div className={Styling.taskContent}></div>
            <div> {task.comment} </div>
            <div> <StatusButton status={status} handleStatus={setStatus}/></div>
        </div>
        
    )
}