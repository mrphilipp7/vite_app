import { Tab as HeadlessTab } from "@headlessui/react";
import { ReactNode } from "react";

/*

*/

//export tab group with it's props
type TabGroupProps = {
  children: ReactNode;
  Vertical?: boolean;
  defaultIndex?: number;
};

export const TabGroup = ({
  children,
  Vertical = false,
  defaultIndex,
}: TabGroupProps) => {
  return (
    <HeadlessTab.Group vertical={Vertical} defaultIndex={defaultIndex}>
      {children}
    </HeadlessTab.Group>
  );
};

//export tab list with it's props
type TabListProps = {
  children: ReactNode;
};

export const TabList = ({ children }: TabListProps) => {
  return <HeadlessTab.List>{children}</HeadlessTab.List>;
};

//export tab panels with it's props
type TabPanelsProps = {
  children: ReactNode;
};

export const TabPanels = ({ children }: TabPanelsProps) => {
  return <HeadlessTab.Panels>{children}</HeadlessTab.Panels>;
};

//export tabs with it's props
export interface TabProps extends React.ComponentPropsWithoutRef<"button"> {
  TabBtn: ReactNode;
}

export const Tab = ({ TabBtn }: TabProps) => {
  return <HeadlessTab>{TabBtn}</HeadlessTab>;
};

//export tab panel with it's props
export interface TabPanelProps {
  panel: ReactNode;
}

export const TabPanel = ({ panel }: TabPanelProps) => {
  return <HeadlessTab.Panel>{panel}</HeadlessTab.Panel>;
};
