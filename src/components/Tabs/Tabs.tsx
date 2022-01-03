import React, {
  Children,
  cloneElement,
  FC,
  ReactChild,
  ReactElement,
  MouseEventHandler,
  Dispatch,
} from "react";
import { useTabs } from "./TabContext";

export interface TabsProps extends React.HTMLProps<HTMLUListElement> {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
}

export interface TabProps extends React.HTMLProps<HTMLLIElement> {
  id?: string;
  children: ReactChild | ReactChild[];
}

export const Tabs: FC<TabsProps> = ({ children }) => {
  const childrenArray = Children.toArray(children).map((child, index) =>
    cloneElement(child as ReactElement, { id: `art-tab-${index}` })
  );
  return <ul className="art-tab-header">{childrenArray}</ul>;
};

export const Tab: FC<TabProps> = ({ id, children, ...props }) => {
  const { selectedTabIndex, setSelectedTabIndex } = useTabs();
  const className =
    selectedTabIndex === id ? "art-tab-trigger active" : "art-tab-trigger";

  const clickHandler: MouseEventHandler<HTMLLIElement> = () => {
    (setSelectedTabIndex as Dispatch<React.SetStateAction<string>>)(
      id as string
    );
  };
  return (
    <li className={className} onClick={clickHandler} {...props}>
      {children}
    </li>
  );
};
