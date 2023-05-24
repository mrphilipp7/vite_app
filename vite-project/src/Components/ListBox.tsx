import { ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

/*
  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];
  const [selected, setSelected] = useState<string | object>("");
  const keyValue = 0;
*/

type Props = {
  placeHolder: string;
  apps: Array<Object>;
  keyValue: number;
  setSelected?: (value: any) => void;
  selected: object | string;
};

const ListBox = ({
  placeHolder,
  apps,
  keyValue,
  selected,
  setSelected,
}: Props) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative py-2 mt-1 ">
        <span
          className={`text-lg tracking-wide  absolute -translate-y-4 ${
            selected != ""
              ? "text-blue-300 scale-1 transition duration-[350ms]"
              : "text-gray-400 scale-0 transition duration-[350ms]"
          }`}
        >
          {placeHolder}
        </span>
        <Listbox.Button
          className={`relative py-2  pr-10 text-left cursor-default w-60 border-b-4  focus:outline-none ${
            selected != "" ? "border-b-blue-300" : "border-b-gray-400"
          }`}
        >
          <span
            className={`block truncate tracking-wide text-gray-400 text-lg ${
              selected ? "text-white" : "text-gray-400"
            }`}
          >
            {selected ? selected[Object.keys(selected)[keyValue]] : placeHolder}
          </span>
          <span
            className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
              selected != "" ? "hidden" : ""
            }`}
          >
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
          <span
            className={`absolute inset-y-0 right-0 flex items-center pr-2  ${
              selected != "" ? "" : "hidden"
            }`}
            onClick={() => {
              if (setSelected != undefined) {
                setSelected("");
              } else {
                console.log("error with setSelected");
              }
            }}
          >
            <XMarkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div style={{ position: "relative", zIndex: 20 }}>
            <Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-white/90 w-60 h-44 z-100 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none scrollable">
              {apps.map((app, appIdx) => (
                <Listbox.Option
                  key={appIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-2 pr-4 ${
                      active ? "bg-white text-gray-900" : "text-gray-900"
                    }`
                  }
                  value={app}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "text-md tracking-wide"
                            : "text-md tracking-wide"
                        }`}
                      >
                        {app[Object.keys(app)[keyValue]]}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ListBox;
