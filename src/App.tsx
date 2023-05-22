import useUser from "./hooks/useUser";
import "./App.css";
//import { User } from "./types/User";
import TaskController from "./taskmanager/container/TaskController";
import { useState } from "react";
import LoginForm from "./login/LoginForm";
import Header from "./header/Header";

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
      <Header headTitle="Probearbeit"></Header>
      {loggedIn ? (
        <TaskController loggedUser={responseData} />
        ) : (
        <LoginForm handleLogin={handleLogin} />
      
      )}
    </div>
  );
}

export default App;
