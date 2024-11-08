import { useContext } from "react";
import { IconVariantContext } from "@/contexts/IconVariantContext";
import type { IconVariantContextType } from "@/types/iconVariant";

export const useIconVariant = (): IconVariantContextType => {
  const context = useContext(IconVariantContext);
  if (!context) {
    throw new Error(
      "useIconVariant must be used within an IconVariantProvider"
    );
  }
  return context;
};
