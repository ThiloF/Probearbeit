import Styling from "./TaskController.module.css";
import { User } from "../../types/User";
import DisplayTasks from "../components/DisplayTasks/DisplayTasks";
import { Task } from "../../types/Task";

type Props = {
  loggedUser: User;
};

export default function TaskController({ loggedUser }: Props) {
  const taskList = loggedUser.tasks.map((item, index) => {
    return (
        <DisplayTasks key={index} task={item} />
    );
  });

  return <div className={Styling.container}> {taskList} </div>;
}
