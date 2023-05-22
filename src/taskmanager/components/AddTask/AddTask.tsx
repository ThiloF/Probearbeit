import Styling from "./AddTask.module.css";
import { useState } from "react";
import { User } from "../../../types/User";
import useUser from "../../../hooks/useUser";

type Props = {
  loggedUser: User;
  updateList: (handleAdd: boolean) => void;
};

export default function AddTask({ loggedUser, updateList }: Props) {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");
  const { putTask } = useUser();

  function addTask() {
    loggedUser.tasks.push({
      title: newTitle,
      comment: newComment,
      is_completed: false,
    });
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTask();
    putTask(loggedUser);
    updateList(true);
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTitle(e.target.value);
  }

  function handleCommentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewComment(e.target.value);
  }

  return (
    <div className={Styling.AddTaskContainer}>
      <h2>Neue Aufgabe </h2>
      <form className={Styling.formContainer} onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="TaskTitle"> Titel </label>
        <input
          type="text"
          name="TaskTitle"
          value={newTitle}
          onChange={(e) => handleTitleChange(e)}
        />
        <label htmlFor="TaskComment"> Kommentar</label>
        <input
          type="text"
          name="TaskComment"
          value={newComment}
          onChange={(e) => handleCommentChange(e)}
        />
        <button type="submit" id="Speichern">
          Speichern
        </button>
      
      </form>
    </div>
  );
}
