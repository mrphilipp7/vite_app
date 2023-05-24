import { Listbox as HeadlessListBox, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

//---------------useage----------------//
// take the drawn data and use -> TheArray.unshift({ex: 'titleVal', unavaliable: true});
/*
------------NEEDED MATERIAL------------
import {
  ListBox,
  ListBoxButton,
  ListBoxOptions,
  ListBoxOption,
} from "../Components/Selector";

const titleVal = "Select something";
const people = [
  { name: titleVal, unavailable: true },
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const [selected, setSelected] = useState(people[0]);
-------------IN MAIN----------------
      <ListBox
        value={selected}
        onChange={setSelected}
        isDefault={selected != people[0]}
        title={people[0].name}
      >
        <ListBoxButton
          isDefault={selected != people[0]}
          value={selected.name}
        />
        <ListBoxOptions>
          {people.map((person, personID) => (
            <ListBoxOption
              value={person}
              text={person.name}
              key={personID}
              disabled={person.unavailable}
            />
          ))}
        </ListBoxOptions>
      </ListBox>

*/

//button and Props for controlling opening and displaying selected
type ListBoxButtonProps = {
  isDefault: boolean;
  value: string;
};

export const ListBoxButton = ({ isDefault, value }: ListBoxButtonProps) => {
  return (
    <HeadlessListBox.Button
      className={`group relative py-2  pr-10 text-left cursor-default w-60 border-b-4  focus:outline-none  ${
        isDefault ? `border-b-dark-blue` : `border-b-white`
      }`}
    >
      <span
        className={`block truncate tracking-wide text-lg ${
          isDefault ? "text-white" : `text-white`
        }`}
      >
        {value}
      </span>
      <span
        className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none`}
      >
        <ChevronDownIcon
          className={`w-5 h-5 ${isDefault ? "text-white" : `text-white`} `}
          aria-hidden="true"
        />
      </span>
    </HeadlessListBox.Button>
  );
};

//wrapper and props for containing option items
type ListBoxOptionsProps = {
  children: ReactNode;
};

export const ListBoxOptions = ({ children }: ListBoxOptionsProps) => {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div style={{ position: "relative", zIndex: 20 }}>
        <HeadlessListBox.Options className="absolute py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-white/90 w-60 h-44 z-100 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none scrollable">
          {children}
        </HeadlessListBox.Options>
      </div>
    </Transition>
  );
};

//container for individual options and props
type ListBoxOptionProps = {
  value: object;
  text: string;
  disabled?: boolean;
};

export const ListBoxOption = ({
  value,
  text,
  disabled = false,
}: ListBoxOptionProps) => {
  return (
    <HeadlessListBox.Option
      disabled={disabled}
      value={value}
      className={({ active }) =>
        `relative cursor-default select-none py-2 pl-2 pr-4 ${
          disabled ? "text-gray-300 hidden" : ""
        } ${active ? "bg-white text-gray-900" : "text-gray-900"}`
      }
    >
      {({ selected }) => (
        <div className="flex items-center">
          <span
            className={`block truncate mr-2 ${
              //second option represents a selected option
              selected ? `text-md tracking-wide text-dark-blue ` : "invisible "
            }`}
          >
            <CheckIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={`block truncate ${
              //second option represents a selected option
              selected ? "text-md tracking-wide" : "text-md tracking-wide "
            }`}
          >
            {text}
          </span>
        </div>
      )}
    </HeadlessListBox.Option>
  );
};

type ListBoxProps = {
  children: ReactNode;
  value: object;
  onChange: (value: any) => void;
  isDefault: boolean;
  title: string;
};

export const ListBox = ({
  children,
  value,
  onChange,
  isDefault,
  title,
}: ListBoxProps) => {
  return (
    <HeadlessListBox value={value} onChange={onChange}>
      <div className="relative py-2 mt-1 ">
        <span
          className={`text-lg tracking-wide  absolute -translate-y-4 ${
            isDefault
              ? `text-dark-blue scale-1 transition duration-[350ms]`
              : `text-white scale-0 transition duration-[350ms]`
          }`}
        >
          {title}
        </span>
        {children}
      </div>
    </HeadlessListBox>
  );
};
