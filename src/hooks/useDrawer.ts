import { useContext } from "react";
import {
  DrawerContext,
  type DrawerContextType,
} from "@/contexts/DrawerContext";

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }

  return context;
};
