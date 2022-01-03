import React, {
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

export interface ContextType {
  selectedTabIndex: string ;
  setSelectedTabIndex?: Dispatch<SetStateAction<string>> ;
}

const defaultState = {
  selectedTabIndex: "art-tab-0",
};

export const TabsContext = createContext<ContextType>(defaultState);
export const useTabs = () => useContext(TabsContext);
