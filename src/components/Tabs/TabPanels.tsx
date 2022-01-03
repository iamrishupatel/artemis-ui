import React, {
  Children,
  cloneElement,
  FC,
  ReactChild,
  ReactElement,
} from "react";
import { useTabs } from "./TabContext";

export interface TabPanelProps {
  id?: string;
  children: ReactChild | ReactChild[];
}
export interface TabPanelsProps {
  children: ReactChild | ReactChild[];
}

export const TabPanel: FC<TabPanelProps> = ({ children, id, ...props }) => {
  const { selectedTabIndex } = useTabs();

  const className =
    selectedTabIndex === id ? "art-tab-panel active" : "art-tab-panel";
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const TabPanels: FC<TabPanelsProps> = ({ children }) => {
  const childrenArray = Children.toArray(children).map((child, index) =>
    cloneElement(child as ReactElement, { id: `art-tab-${index}` })
  );
  return <div>{childrenArray}</div>;
};
