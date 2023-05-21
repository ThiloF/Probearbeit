import Styling from "./AddTask.module.css";
import StatusButton from "../../../buttons/statusButton/StatusButton";
import { FormEventHandler, useState } from "react";
import { Task } from "../../../types/Task";
import { User } from "../../../types/User";
import useUser from "../../../hooks/useUser";


type Props = {
    loggedUser: User
}

export default function AddTask({loggedUser}: Props) {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");
  const{putTask} = useUser()


  function addTask(){
    loggedUser.tasks.push({"title": newTitle, "comment": newComment, "is_completed": false})
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask();
    putTask(loggedUser)
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>){
    setNewTitle(e.target.value);
  }

  function handleCommentChange(e: React.ChangeEvent<HTMLInputElement>){
    setNewComment(e.target.value);
  }

  

  return (
    <div className={Styling.AddTaskContainer}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="TaskTitle"> Titel </label>
        <input type="text" name="TaskTitle" value={newTitle} onChange={(e) => handleTitleChange(e)} />

        <label htmlFor="TaskComment"> Kommentar</label>
        <input type="text" name="TaskComment" value={newComment} onChange={(e) => handleCommentChange(e)} />

        <button type="submit" id="Speichern">Speichern</button>
        <p>{newTitle}</p> <br />
        <p>{newComment}</p>
      </form>
    </div>
  );
}
