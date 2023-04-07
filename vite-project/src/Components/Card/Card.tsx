import { ReactNode } from "react";
import CardTitle from "./CardTitle";
import CardAvatar from "./CardAvatar";
import CardBody from "./CardBody";

import CardFooter from "./CardFooter";
type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <article className="w-80  rounded-md p-4 shadow-md shadow-black/50 border-2 border-black/10 bg-dark-blue/80 relative">
      {children}
    </article>
  );
};

Card.Title = CardTitle;
Card.Avatar = CardAvatar;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;
