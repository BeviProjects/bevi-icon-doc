"use client";
import React, { useContext } from "react";
import { iconsByVersion } from "@/utils/icons";
import Link from "next/link";
import ListIcons from "@/components/ListIcons";
import { allIconsSorted } from "@/utils/icons";
import { BvIcon } from "bevi-icon";
import { IconContext } from "./layout";

const Icons = () => {
  const iconContext = useContext(IconContext);

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
    <div className="bv-container-lg">
      <div>
        {Object.entries(groupedIcons).map(([letter, icons]) => (
          <section
            key={letter}
            className="ps-relative ds-flex flow-row-nw gap-xs"
          >
            <h3 id={letter} className="ps-sticy p-block-10">
              {letter}
            </h3>
            <div className="p-block-10 ds-grid grid-tpl-col-06">
              {icons.map((icon, index) => (
                <Link
                  key={`${letter}-${index}`}
                  href={`/icons/${icon}`}
                  scroll={false}
                  onClick={() => iconContext.setDrawerOpen(true)}
                  className="ds-flex-center p-block-04 p-inline-02"
                >
                  <BvIcon name={icon} size={4} />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Icons;
