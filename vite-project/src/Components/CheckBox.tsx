import { CheckIcon } from "@heroicons/react/24/outline";

/*
  //checkbox
  const [checked, setChecked] = useState(false);
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
*/

type Props = {
  checked: boolean;
  setChecked: React.ChangeEventHandler<HTMLInputElement>;
};

const CheckBox = ({ checked = false, setChecked }: Props) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className={`w-7 h-7  border-2 ${
          checked
            ? "bg-white border-gray-400"
            : "bg-light-green border-light-green "
        } relative appearance-none rounded-md cursor-pointer`}
        checked={checked}
        onChange={setChecked}
      />

      <CheckIcon
        className={`absolute top-0.5 left-0.5 h-6 w-6 text-white stroke-[4px] pointer-events-none  ${
          checked ? "scale-0 " : "scale-1"
        }`}
      />
    </div>
  );
};

export default CheckBox;
