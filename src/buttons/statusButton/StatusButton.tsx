import Styling from "./StatusButton.module.css";

type Props = {
  status: boolean;
  taskname: string;
  handleStatus: (is_completed: boolean) => void;
  handleUpdate: (title:string, status:boolean) => void;
};

export default function StatusButton({ status, taskname, handleStatus, handleUpdate }: Props) {
  function switchStatus() {
    if (status === true) {
      handleStatus(false);
      handleUpdate(taskname, false)
    } else {
      handleStatus(true);
      handleUpdate(taskname, true)
    }
  }

  return <button  className={ status ? Styling.isCompleted : Styling.notCompleted } onClick={() => switchStatus()}> {status ? "Erledigt" : "Offen"}</button>;
}
