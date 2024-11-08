import type { ReactNode } from "react";

export type Variants = "solid" | "duo" | "dark" | "light";

export type IconVariantContextType = {
  variant: Variants;
  setVariant: (variant: Variants) => void;
};

export type IconVariantProviderProps = {
  children: ReactNode;
};
