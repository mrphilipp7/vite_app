import { ReactNode } from "react";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  placeholder: string;
}

const RefInput = ({ placeholder, ...props }: Props) => {
  return (
    <div className="relative w-56 tracking-wide">
      <input
        placeholder={placeholder}
        {...props}
        required
        className=" w-full text-lg outline-none bg-transparent shadow-sm  border-b-2 border-b-white   py-2 peer text-white  focus:duration-300 focus:border-b-dark-blue valid:border-b-dark-blue"
      />
      <label className="pointer-events-none font-semibold left-0 -translate-y-4 text-sm text-dark-blue absolute peer-invalid:scale-0 peer-invalid:duration-300 peer-invalid:ease-in-out peer-valid:scale-1 peer-valid:duration-300 peer-valid:ease-in-out">
        {placeholder}
      </label>
    </div>
  );
};

export default RefInput;
