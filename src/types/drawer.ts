import type { ReactNode } from "react";

export type DrawerContextType = {
  isOpen: boolean;
  iconId: string | null;
  openDrawer: (id?: string) => void;
  closeDrawer: () => void;
  setIconId: (id: string | null) => void;
};

export type DrawerProviderProps = {
  children: ReactNode;
};
