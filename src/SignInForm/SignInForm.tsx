import { useState } from "react";
import Styling from "./SignInForm.module.css";

type Props = {
  handleSignIn: (name: string, password: string) => void;
  handleLoggedIn: (status: boolean) => void;
};

export default function SignInForm({ handleSignIn, handleLoggedIn}: Props) {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSignIn(name, password);
    handleLoggedIn(true);
  }

  return (
    <div className={Styling.container}>
        <h2>SignIn </h2>
      <form className={Styling.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" onChange={(e) => handleName(e)} />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            onChange={(e) => handlePassword(e)}
          />
        </label>
        <button type="submit"> Login </button>
      </form>
    </div>
  );
}
