"use client";
import React, {
  createContext,
  useState,
  useCallback,
  PropsWithChildren,
} from "react";

export interface DrawerContextType {
  isOpen: boolean;
  iconId: string | null;
  openDrawer: (id?: string) => void;
  closeDrawer: () => void;
  setIconId: (id: string | null) => void;
}

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
);

export const DrawerProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconId, setIconId] = useState<string | null>(null);

  const openDrawer = useCallback((id?: string) => {
    if (id) setIconId(id);
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    setIconId(null);
  }, []);

  const value = {
    isOpen,
    iconId,
    openDrawer,
    closeDrawer,
    setIconId,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
