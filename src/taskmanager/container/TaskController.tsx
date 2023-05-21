import Styling from "./TaskController.module.css";
import { User } from "../../types/User";
import { Task } from "../../types/Task";
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
  const {putUser} = useUser()
  const [newTask, setNewTask] = useState<Task>();


  function updateTaskList() {
    
    const update = loggedUser.tasks.map(task =>{
        if(task.title === upDatedTask){
            task.is_completed = status
        }
        return task
    });
    loggedUser.tasks = update;
    putUser(loggedUser)
  }

  



  //Hier muss die Taskliste neu geschriben werden und ein Datenbankupdate geschehen
  function handleUpdateStatus(taskTitle: string, changedStatus: boolean) {
    console.log(loggedUser.tasks)
    setUpdDatedTask(taskTitle);
    setStatus(changedStatus);
    updateTaskList();
    console.log(loggedUser.tasks)
  }
  
  const taskList = loggedUser.tasks.map((item, index) => {
    return <DisplayTasks key={index} task={item} update={handleUpdateStatus} />;
  });

  return (
    <div className={Styling.container}>
        <AddTask loggedUser={loggedUser}/>
      {" "}
      {taskList} <p> {upDatedTask}</p>{" "}
    </div>
  );
}
