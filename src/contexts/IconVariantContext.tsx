import { Variants } from "@/types/icons";
import {
  IconVariantContextType,
  IconVariantProviderProps,
} from "@/types/iconVariant";
import React, { createContext, useState } from "react";

export const IconVariantContext = createContext<IconVariantContextType>({
  variant: "solid",
  setVariant: () => {},
});

export const IconVariantProvider = ({ children }: IconVariantProviderProps) => {
  const [variant, setVariant] = useState<Variants>("solid");

  return (
    <IconVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </IconVariantContext.Provider>
  );
};
