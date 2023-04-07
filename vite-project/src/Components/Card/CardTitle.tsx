import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

const CardTitle = ({ title, children }: Props) => {
  return (
    <header>
      {children}
      <h1 className="text-white tracking-wide text-xl">{title}</h1>
    </header>
  );
};

export default CardTitle;
