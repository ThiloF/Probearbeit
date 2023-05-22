import useUser from "./hooks/useUser";
import "./App.css";
//import { User } from "./types/User";
import TaskController from "./taskmanager/container/TaskController";
import { useEffect, useState } from "react";
import LoginForm from "./login/LoginForm";
import Header from "./header/Header";
import SignInForm from "./SignInForm/SignInForm";

function App() {
  const { responseData, queryUser,clear } = useUser();
  const { postUser } = useUser();
  const [loggedIn, setLoggedIn] = useState(false);
  const [names, setName] = useState<string>("");
  const [passwords, setPassword] = useState<string>("");
  const [signIn, setSignIn] = useState<boolean>(false);

  function handleSignIn(newName: string, newPassword: string) {
    postUser({
      id: 17, name: newName, password: newPassword,
      tasks: []
    });
    console.log("!!!!!!!!?????")
  }

  function handleLogin(name: string, password: string) {
    setName(name);
    setPassword(password);
    queryUser(names, passwords);
    if (!(responseData.name === "")) {
      setLoggedIn(true);
    }
  }

  function clearLogin(){
    clear();
  }

  useEffect(() =>{
    if(!loggedIn){
     clear();
    }
  },[loggedIn]);

  return (
    <div>
      <Header headTitle="Probearbeit" handleSignIn={setSignIn}  handleLogout={setLoggedIn} handleClearLogin={clearLogin}></Header>
      
      {loggedIn  && 
        <TaskController loggedUser={responseData} />
      }
      {(!loggedIn && !signIn) &&
        <LoginForm handleLogin={handleLogin} />
      }

      {(signIn && !(loggedIn))  && <SignInForm handleSignIn={handleSignIn} handleLoggedIn={setLoggedIn} /> }
    </div>

  );
}

export default App;
