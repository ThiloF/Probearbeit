import {  useState } from "react";
import Styling from "./LoginForm.module.css";

type Props = {
  handleLogin: (name: string, password: string) => void;
};

export default function LoginForm({ handleLogin }: Props) {
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
    handleLogin(name, password);
  }

  return (
    <div className={Styling.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
