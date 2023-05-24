import { Switch } from "@headlessui/react";

/*
  const [enabled, setEnabled] = useState(false);
  <SwitchInput enabled={enabled} setEnabled={setEnabled} />
*/

type Props = {
  enabled: boolean | undefined;
  setEnabled: (checked: boolean) => void;
};

const SwitchInput = ({ enabled, setEnabled }: Props) => {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-dark-blue" : "bg-gray-700"}
          relative inline-flex h-[30px] w-[58px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>

        <span className="absolute top-1/2 left-3 -translate-y-1/2 h-3 w-0 border-2 rounded-full border-gray-900/30"></span>
        <span className="absolute top-1/2 right-2 -translate-y-1/2 h-3 w-3 border-2 rounded-full border-white/30"></span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default SwitchInput;
