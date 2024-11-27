"use client";
import React from "react";
import { BvIcon } from "bevi-icon";
import { Variants, Weights } from "@/types/icons";
import { useDrawer } from "@/hooks/useDrawer";
import { useQueryState } from "nuqs";
import { useIconVariant } from "@/hooks/useIconVariant";
import { useIconWeight } from "@/hooks/useIconWeight";

type ButtonIconProps = {
  id: string;
  name: string;
  onClick?: () => void;
  initialWeight?: Weights;
  initialVariant?: Variants;
};

export const ButtonIcon = ({ id, name, onClick }: ButtonIconProps) => {
  const { openDrawer } = useDrawer();
  const [icon, setIcon] = useQueryState("icon");

  const { weight } = useIconWeight();
  const { variant } = useIconVariant();

  // Método para abrir o Drawer
  const handleOpenDrawer = (id: string) => {
    // Abre o Drawer e define o ID na URL
    openDrawer(id);
    setIcon(id);
  };

  return (
    <button
      type="button"
      title={name}
      onClick={() => (onClick ? onClick : handleOpenDrawer(id))}
      className="w-100 ds-flex-center p-block-04 p-inline-02 bgc-primary-03 radius-sm"
    >
      <BvIcon
        name={id}
        title={name}
        variant={variant}
        size={4}
        weight={weight}
        className={`color-${variant === "light" ? "primary-02" : "primary-01"}`}
      />
    </button>
  );
};
