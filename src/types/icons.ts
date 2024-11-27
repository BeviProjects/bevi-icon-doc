import type { ReactNode } from "react";

export type typeIconsVersion = {
  name: string;
};

export type typeAllIcons = {
  version: string;
  icons: typeIconsVersion[];
};

// Variant
export type Variants = "solid" | "duo" | "dark" | "light";

export type IconVariantContextType = {
  variant: Variants;
  setVariant: (variant: Variants) => void;
};

export type IconVariantProviderProps = {
  children: ReactNode;
};

// Weight
export type Weights = 400 | 600;

export type IconWeightContextType = {
  weight: Weights;
  setWeight: (weight: Weights) => void;
};

export type IconWeightProviderProps = {
  children: ReactNode;
};
