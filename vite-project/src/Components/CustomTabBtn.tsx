import { ReactNode } from "react";

export interface CustomeTabBtnProps
  extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

const CustomTabBtn = ({ title, ...props }: CustomeTabBtnProps) => {
  return <button {...props}>{title}</button>;
};

export default CustomTabBtn;
