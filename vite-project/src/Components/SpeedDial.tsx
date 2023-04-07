import { Popover, Transition } from "@headlessui/react";
import { HomeIcon, XMarkIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function SpeedDial() {
  return (
    <div className=" fixed right-2 bottom-2 max-w-sm px-4 sm:invisible">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel>
                <div>
                  <Link
                    to="/"
                    className={`w-14 h-14 my-2 bg-light-green rounded-lg flex items-center justify-center shadow-md shadow-black/50`}
                  >
                    <HomeIcon className={`h-10 w-10`} />
                  </Link>
                  <Link
                    to="/contact"
                    className={`w-14 h-14 my-2 bg-light-green rounded-lg flex justify-center items-center shadow-md shadow-black/50`}
                  >
                    <EnvelopeIcon className={`h-10 w-10`} />
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
            <Popover.Button
              className={`h-14 w-14 bg-dark-blue rounded-lg outline-none flex justify-center items-center shadow-md shadow-black
              `}
            >
              <XMarkIcon
                className={`h-12 w-12 ${
                  open
                    ? "rotate-0 transition duration-100"
                    : "rotate-45 transition duration-100"
                }`}
              />
            </Popover.Button>
          </>
        )}
      </Popover>
    </div>
  );
}
