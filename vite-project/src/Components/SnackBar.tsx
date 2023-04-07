import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  message: string;
  success: boolean;
  onClick: () => void;
};
const SnackBar = ({ onClick, message, success }: Props) => {
  return (
    <div
      className={`fixed bottom-4 left-4  flex h-14 w-36 items-center px-2 justify-between py-2  rounded-md border-2 border-white text-white shadow-md shadow-gray-300/25 ${
        success ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p className="text-white text-lg tracking-wide font-sans ">{message}</p>
      <button
        onClick={onClick}
        className="p-1 hover:bg-white/25 rounded-lg cursor-pointer active:bg-white/30 active:border-white/20 border-2 border-transparent"
      >
        <XMarkIcon className="h-6 w-6 pointer-event-none text-whiterounded-full " />
      </button>
    </div>
  );
};

export default SnackBar;
