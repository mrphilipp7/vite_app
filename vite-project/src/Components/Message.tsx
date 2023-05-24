import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

type Props = {
  date?: string;
  message: string;
  recieved?: boolean;
};

export default function Message({ date, message, recieved = false }: Props) {
  return (
    <div className=" pt-8">
      <div
        className={`mx-auto w-full max-w-md rounded-2xl p-2 ${
          recieved ? "bg-dark-blue" : "bg-white"
        }`}
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium ${
                  recieved
                    ? "text-white hover:bg-dark-blue"
                    : "text-black hover:bg-white"
                } focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
              >
                <span>{message}</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  className={`px-4 pt-4 pb-2 text-sm ${
                    recieved
                      ? "text-gray-400 text-right"
                      : "text-gray-500 text-left"
                  }  `}
                >
                  {date}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
