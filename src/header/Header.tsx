import Styling from "./Header.module.css";

type Props = {
  headTitle: string;
};

export default function Header({ headTitle }: Props) {
  return (
    <div className={Styling.container}>
      <h1> {headTitle} </h1>
    </div>
  );
}
