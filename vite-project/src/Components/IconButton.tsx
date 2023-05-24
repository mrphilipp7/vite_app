import { ReactNode } from "react";

interface IconButtonGroupProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  toolTip: string;
}

const IconButton = ({
  children,
  toolTip,
  ...attributes
}: IconButtonGroupProps) => {
  return (
    <div className="flex flex-col items-center">
      <button
        className="hover:bg-white/20 p-1 border-2 border-transparent
     rounded-md active:bg-white/30 active:border-white/20 peer text-white"
        {...attributes}
      >
        <div className="h-8 w-8 ">{children}</div>
      </button>
      <p className="peer-hover:visible invisible text-sm font-sans text-white">
        {toolTip}
      </p>
    </div>
  );
};

export default IconButton;
