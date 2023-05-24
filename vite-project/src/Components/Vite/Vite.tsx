import { ReactNode } from "react";
import ViteHeader from "./ViteHeader";
import ViteFooter from "./ViteFooter";
import ViteBody from "./ViteBody";
type Props = {
  children: ReactNode;
};

const Vite = ({ children }: Props) => {
  return (
    <section className="p-4 bg-white w-80 rounded-lg  shadow-md shadow-black/50">
      {children}
    </section>
  );
};

Vite.Header = ViteHeader;
Vite.Body = ViteBody;
Vite.Footer = ViteFooter;
export default Vite;
