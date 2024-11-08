import { useContext } from "react";
import { DrawerContext } from "@/contexts/DrawerContext";
import type { DrawerContextType } from "@/types/drawer";

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
