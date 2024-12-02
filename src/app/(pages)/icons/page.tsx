import React from "react";
import Link from "next/link";
import { ButtonIcon } from "@/components/ButtonIcon";
import { AnimatedTabs } from "@/components/SwitchTabs";
import { allIconsSorted } from "@/utils/icons";
import { tabsVariant, tabsWeight } from "@/utils/tabs";
import { ClientBoundary } from "@/components/ClientBoundary";

const Icons = () => {
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
      <div className="bv-container-lg">
        <section className="ds-flex flow-row-nw justify-between">
          <div></div>
          <div className="ds-flex flow-row-nw gap-xs">
            <AnimatedTabs
              layoutId="main-tab-variant"
              tabs={tabsWeight}
              type="weight"
            />
            <AnimatedTabs
              layoutId="main-tab-weight"
              tabs={tabsVariant}
              type="variant"
              showIcon
            />
          </div>
        </section>
        <ClientBoundary>
          {Object.entries(groupedIcons).map(([letter, icons]) => (
            <section
              id={`${letter}`}
              key={`section-${letter}`}
              className={`ps-relative ${
                letter === "A" ? "pt-06" : "pt-16"
              } ds-flex flow-row-nw gap-xs`}
            >
              <Link
                href={`#${letter}`}
                className="letter-box text-decoration-none ds-flex-center bgc-primary-01 radius-sm"
              >
                <h3 className="ps-sticy color-primary-03">{letter}</h3>
              </Link>
              <div className="flex-bgs ds-grid grid-tpl-col-06 lg:grid-tpl-col-04 sm:grid-tpl-col-02 gap-xs">
                {icons.map((icon, index) => (
                  <ButtonIcon
                    key={`${letter}-${index}`}
                    id={icon.id}
                    name={icon.name}
                  />
                ))}
              </div>
            </section>
          ))}
        </ClientBoundary>
      </div>
    </>
  );
};

export default Icons;
