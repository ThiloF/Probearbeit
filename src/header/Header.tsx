import Styling from "./Header.module.css";

type Props = {
  headTitle: string;
  handleSignIn: (status: boolean) => void;
  handleLogout: (status: boolean) => void;
  handleClearLogin: () => void;
};

export default function Header({
  headTitle,
  handleSignIn,
  handleLogout,
  handleClearLogin,
}: Props) {
  function handleClickSignIn() {
    handleSignIn(true);
  }

  function handleClickLogout() {
    handleLogout(false);
    handleClearLogin();
    handleSignIn(false);
  }

  return (
    <div className={Styling.container}>
      <h1> {headTitle} </h1>
      <button onClick={handleClickSignIn}> Registrieren </button>
      <button onClick={handleClickLogout}> Ausloggen</button>
    </div>
  );
}
