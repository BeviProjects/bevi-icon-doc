import React, { createContext } from "react";
import { DrawerContextType, DrawerProviderProps } from "@/types/drawer";

export const DrawerContext = createContext<DrawerContextType>({
  state: false,
  setState: () => {},
});

export const DrawerProvider = ({
  children,
  state,
  setState,
}: DrawerProviderProps) => {
  return (
    <DrawerContext.Provider value={{ state, setState }}>
      {children}
    </DrawerContext.Provider>
  );
};
