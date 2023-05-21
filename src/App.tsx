import useUser from "./hooks/useUser";
import "./App.css";
//import { User } from "./types/User";
import TaskController from "./taskmanager/container/TaskController";
import { useState } from "react";
import LoginForm from "./login/LoginForm";

function App() {
  const { responseData, queryUser} = useUser();
  const [loggedIn, setLoggedIn] = useState(false);
  const [names, setName] = useState<string>("");
  const [passwords, setPassword] = useState<string>("");

 

  function handleLogin(name: string, password: string) {
    setName(name);
    setPassword(password);
    queryUser(names, passwords);
    if (!(responseData.name === "")) {
      setLoggedIn(true);
    }
  }

  return (
    <div>
      <h1>Moin</h1>

      <LoginForm handleLogin={handleLogin} />
      {loggedIn ? (
        <TaskController loggedUser={responseData} />
      ) : (
        <p>"Ja ne is kllar"</p>
      )}
    </div>
  );
}

export default App;
