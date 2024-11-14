"use client";
import React from "react";
import { allIconsSorted } from "@/utils/icons";
import Link from "next/link";
import { BvIcon } from "bevi-icon";
import { useDrawer } from "@/hooks/useDrawer";
import { useIconVariant } from "@/hooks/useIconVariant";
import { FadeIn } from "@/components/FadeIn";

const Icons = () => {
  const { variant } = useIconVariant();
  const { setState } = useDrawer();

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
        // https://codesandbox.io/p/sandbox/framer-motion-whileinview-2hbg5?file=%2Fsrc%2FApp.tsx%3A13%2C5&from-embed
        <FadeIn>
          <section
            key={letter}
            id={`content-${letter}`}
            className="ps-relative ds-flex flow-row-nw gap-xs"
          >
            <Link
              key={`letter-${letter}`}
              href={`#content-${letter}`}
              className="letter-box text-decoration-none ds-flex-center bgc-primary-01 radius-sm"
            >
              <h3 className="ps-sticy color-primary-03">{letter}</h3>
            </Link>
            <div className="flex-bgs ds-grid grid-tpl-col-06 lg:grid-tpl-col-04 sm:grid-tpl-col-02 gap-xs">
              {icons.map((icon, index) => (
                <Link
                  key={`${letter}-${index}`}
                  href={`/icons/${icon.id}`}
                  scroll={false}
                  onClick={() => setState(true)}
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
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>
      ))}
    </>
  );
};

export default Icons;
