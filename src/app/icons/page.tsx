"use client";
import React, { useContext } from "react";
import { iconsByVersion } from "@/utils/icons";
import Link from "next/link";
import ListIcons from "@/components/ListIcons";
import { allIconsSorted } from "@/utils/icons";
import { BvIcon } from "bevi-icon";
import { DrawerContext } from "@/contexts/DrawerContext";
import { useDrawer } from "@/hooks/useDrawer";
import { useIconVariant } from "@/hooks/useIconVariant";

const Icons = () => {
  const { variant } = useIconVariant();
  const { setState } = useDrawer();

  // Agrupa os ícones por letra inicial
  const groupedIcons = allIconsSorted.reduce((acc, icon) => {
    const firstLetter = icon.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(icon);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <>
      {Object.entries(groupedIcons).map(([letter, icons]) => (
        <section
          key={letter}
          className="ps-relative ds-flex flow-row-nw gap-xs"
        >
          <Link
            key={`letter-${letter}`}
            href={`#${letter}`}
            className="letter-box text-decoration-none ds-flex-center bgc-primary-01 radius-sm"
          >
            <h3 className="ps-sticy color-primary-03">{letter}</h3>
          </Link>
          <div className="flex-bgs ds-grid grid-tpl-col-06 gap-xs">
            {icons.map((icon, index) => (
              <Link
                key={`${letter}-${index}`}
                href={`/icons/${icon}`}
                scroll={false}
                onClick={() => setState(true)}
                className="ds-flex-center p-block-04 p-inline-02 bgc-gray-95 radius-sm"
              >
                <BvIcon
                  name={icon}
                  variant={variant}
                  size={4}
                  className={`color-${
                    variant === "light" ? "primary-02" : "primary-01"
                  }`}
                />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Icons;
