import useUser from "./hooks/useUser";
import "./App.css";
//import { User } from "./types/User";
import TaskController from "./taskmanager/container/TaskController";
import { useState } from "react";

function App() {
  const { responseData, queryUser } = useUser();
  const [clicked, setClicked] = useState(false);

  function handleLos() {
    queryUser("Thilo");
    setClicked(true);
  }

  return (
    <div>
      <h1>Moin</h1>
      <button onClick={() => handleLos()}> Los!</button>
      {clicked &&
        <TaskController loggedUser={responseData} />
      }
    </div>
  );
}

export default App;
