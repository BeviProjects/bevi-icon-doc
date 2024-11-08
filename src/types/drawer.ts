import type { ReactNode } from "react";

export type DrawerContextType = {
  state: boolean;
  setState: (state: boolean) => void;
};

export type DrawerProviderProps = {
  children: ReactNode;
  state: boolean;
  setState: (state: boolean) => void;
};
