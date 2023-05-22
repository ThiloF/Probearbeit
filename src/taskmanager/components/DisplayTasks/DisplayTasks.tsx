import { Task } from "../../../types/Task";
import Styling from "./DisplayTasks.module.css";
import StatusButton from "../../../buttons/statusButton/StatusButton";
import {useState } from "react";

type Props = {
  key: number;
  task: Task;
  update: (title:string, status:boolean) => void;
  deleter: (title:string) => void;

};

export default function DisplayTasks({ task,update, deleter}: Props) {
  const [status, setStatus] = useState<boolean>(task.is_completed);


  function handleDeleter(){
    deleter(task.title);
  }
  

  return (
    <div className={Styling.taskContainer}>
      <h1> {task.title} </h1>
      <div className={Styling.taskContent}></div>
      <div> {task.comment} </div>
      <div>
        {" "}
        <StatusButton status={status} handleStatus={setStatus} handleUpdate={update} taskname={task.title}/>
        <button onClick={handleDeleter} > Löschen </button>
      </div>
    </div>
  );
}
