"use client";
import React, { createContext, useState } from "react";
import { Variants } from "@/types/icons";
import {
  IconVariantContextType,
  IconVariantProviderProps,
} from "@/types/icons";

export const IconVariantContext = createContext<IconVariantContextType>({
  variant: "duo",
  setVariant: () => {},
});

export const IconVariantProvider = ({ children }: IconVariantProviderProps) => {
  const [variant, setVariant] = useState<Variants>("duo");
  return (
    <IconVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </IconVariantContext.Provider>
  );
};
