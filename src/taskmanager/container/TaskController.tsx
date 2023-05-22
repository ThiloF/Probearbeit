import Styling from "./TaskController.module.css";
import { User } from "../../types/User";
import DisplayTasks from "../components/DisplayTasks/DisplayTasks";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import AddTask from "../components/AddTask/AddTask";


type Props = {
  loggedUser: User;
};

export default function TaskController({ loggedUser }: Props) {
  const [upDatedTask, setUpdDatedTask] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);
  const { putUser } = useUser();

  function updateTaskList() {
    const update = loggedUser.tasks.map((task) => {
      if (task.title === upDatedTask) {
        task.is_completed = status;
      }
      return task;
    });
    loggedUser.tasks = update;
    putUser(loggedUser);
  }

  function deleteTask(taskname: string) {
    const index = loggedUser.tasks.findIndex((item) => item.title === taskname);
    loggedUser.tasks.splice(index, 1);
    putUser(loggedUser);
  }

  //Hier muss die Taskliste neu geschrieben werden und ein Datenbankupdate geschehen
  function handleUpdateStatus(taskTitle: string, changedStatus: boolean) {
    console.log(loggedUser.tasks);
    setUpdDatedTask(taskTitle);
    setStatus(changedStatus);
    updateTaskList();
    console.log(loggedUser.tasks);
  }

  const taskList = loggedUser.tasks.map((item, index) => {
    return (
      <DisplayTasks
        key={index}
        task={item}
        update={handleUpdateStatus}
        deleter={deleteTask}
      />
    );
  });

  return (
    <div className={Styling.container}>
      <AddTask loggedUser={loggedUser} />
      {taskList}{" "}
    </div>
  );
}
