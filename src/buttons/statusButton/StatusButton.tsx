import Styling from "./StatusButton.module.css";

type Props = {
  status: boolean;
  handleStatus: (is_completed: boolean) => void;
};

export default function StatusButton({ status, handleStatus }: Props) {
  function switchStatus() {
    if (status === true) {
      handleStatus(false);
    } else {
      handleStatus(true);
    }
  }

  return <button  className={ status ? Styling.isCompleted : Styling.notCompleted } onClick={() => switchStatus()}> {status ? "Erledigt" : "Offen"}</button>;
}
