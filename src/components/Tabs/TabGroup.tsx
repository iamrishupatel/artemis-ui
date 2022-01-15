import React, { FC, ReactChild, ReactElement, useState } from "react";
import { TabsContext } from "./TabContext";

export interface TabGroupProps {
  /** Shape of the tabs */
  shape?: "basic" | "rounded";
  children: ReactChild | ReactChild[];
}

export const TabGroup: FC<TabGroupProps> = ({ shape, ...props }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState("art-tab-0");
  const tabclass = `art-tab-group-${shape}`;
  return (
    <TabsContext.Provider value={{ selectedTabIndex, setSelectedTabIndex }}>
      <div className={tabclass} {...props} />
    </TabsContext.Provider>
  );
};

TabGroup.defaultProps = {
  shape: "basic",
};
