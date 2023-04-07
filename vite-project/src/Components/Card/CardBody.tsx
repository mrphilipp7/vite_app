import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const CardBody = ({ children }: Props) => {
  return <section>{children}</section>;
};

export default CardBody;
