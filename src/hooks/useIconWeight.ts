import { useContext } from "react";
import { IconWeightContext } from "@/contexts/IconWeightContext";
import type { IconWeightContextType } from "@/types/icons";

export const useIconWeight = (): IconWeightContextType => {
  const context = useContext(IconWeightContext);
  if (!context) {
    throw new Error("useIconWeight must be used within an IconWeightProvider");
  }
  return context;
};
