"use client";
import React, { useEffect } from "react";
import { allIconsSorted } from "@/utils/icons";
import Link from "next/link";
import { BvIcon } from "bevi-icon";
import { useDrawer } from "@/hooks/useDrawer";
import { useIconVariant } from "@/hooks/useIconVariant";
import { FadeIn } from "@/components/FadeIn";
import { useQueryState } from "nuqs";

const Icons = () => {
  const { variant } = useIconVariant();
  const { openDrawer } = useDrawer();
  const [icon, setIcon] = useQueryState("icon");

  // Método para abrir o Drawer
  const handleOpenDrawer = (id: string) => {
    // Abre o Drawer e define o ID na URL
    openDrawer(id);
    setIcon(id);
  };

  // Agrupa os ícones por letra inicial do nome
  const groupedIcons = allIconsSorted.reduce((acc, icon) => {
    const firstLetter = icon.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(icon);
    return acc;
  }, {} as Record<string, typeof allIconsSorted>);

  return (
    <>
      {Object.entries(groupedIcons).map(([letter, icons]) => (
        <FadeIn key={`section-${letter}`}>
          <section
            id={`${letter}`}
            className="ps-relative pt-16 ds-flex flow-row-nw gap-xs"
          >
            <Link
              href={`#${letter}`}
              className="letter-box text-decoration-none ds-flex-center bgc-primary-01 radius-sm"
            >
              <h3 className="ps-sticy color-primary-03">{letter}</h3>
            </Link>
            <div className="flex-bgs ds-grid grid-tpl-col-06 lg:grid-tpl-col-04 sm:grid-tpl-col-02 gap-xs">
              {icons.map((icon, index) => (
                <button
                  key={`${letter}-${index}`}
                  type="button"
                  title={icon.name}
                  onClick={() => handleOpenDrawer(icon.id)}
                  className="ds-flex-center p-block-04 p-inline-02 bgc-gray-95 radius-sm"
                >
                  <BvIcon
                    name={icon.id}
                    variant={variant}
                    size={4}
                    className={`color-${
                      variant === "light" ? "primary-02" : "primary-01"
                    }`}
                  />
                </button>
              ))}
            </div>
          </section>
        </FadeIn>
      ))}
    </>
  );
};

export default Icons;
