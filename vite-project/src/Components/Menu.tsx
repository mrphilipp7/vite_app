import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

// export const MenuButton = HeadlessMenu.Button;
type MenuButtonProps = {
  children: ReactNode;
};

export const MenuButton = ({ children }: MenuButtonProps) => {
  return <HeadlessMenu.Button>{children}</HeadlessMenu.Button>;
};

type MenuProps = {
  children: ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
  return (
    <HeadlessMenu as="div" className={"relative"}>
      {children}
    </HeadlessMenu>
  );
};

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return (
    <HeadlessMenu.Item>
      {({ active }) => (
        <button
          {...props}
          className={`${active ? "bg-red-500" : "bg-blue-500"} `}
        >
          {children}
        </button>
      )}
    </HeadlessMenu.Item>
  );
};

type MenuItemsProps = {
  children: ReactNode;
};

export const MenuItems = ({ children }: MenuItemsProps) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HeadlessMenu.Items className={"z-20 origin-top-left flex flex-col"}>
        {children}
      </HeadlessMenu.Items>
    </Transition>
  );
};
