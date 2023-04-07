import { ReactNode } from "react";

interface ButtonGroupProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  disabled?: boolean;
}

const Button = ({
  children,
  disabled = false,
  ...atributes
}: ButtonGroupProps) => {
  return (
    <button
      {...atributes}
      className={`flex items-center  border-white/40 border-2 p-2 rounded-md text-lg font-sans  shadow-gray-300 ${
        disabled
          ? ""
          : "hover:bg-white/20 hover:border-white/20 active:bg-white/30 active:border-white/50 bg-transparent"
      } transition ease-out space-x-1`}
    >
      {children}
    </button>
  );
};

export default Button;
