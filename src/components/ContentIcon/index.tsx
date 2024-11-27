// src/components/ContentIcon.tsx
"use client";
import React, { useEffect, useState } from "react";
import { BvIcon } from "bevi-icon";
import { useDrawer } from "@/hooks/useDrawer";
import { useIconVariant } from "@/hooks/useIconVariant";
import { allIconsSorted } from "@/utils/icons";
import "./styles.css";
import { Tooltip } from "../Tooltip";
import { CopyToClipboard } from "../CopyToClipboard";
import { Drawer } from "vaul";
import { AnimatedTabs } from "../SwitchTabs";
import { tabsVariant, tabsWeight } from "@/utils/tabs";
import { motion } from "motion/react";
import { useIconWeight } from "@/hooks/useIconWeight";

type ContentIconProps = {
  iconName: string;
};

type IconData = {
  id: string;
  name: string;
  tag: string[];
};

export const ContentIcon = ({ iconName }: ContentIconProps) => {
  const { variant } = useIconVariant();
  const { weight } = useIconWeight();
  const [searchResult, setSearchResult] = useState<IconData | null>(null);

  useEffect(() => {
    // Busca o ícone pelo id e atualiza o estado
    const foundIcon =
      allIconsSorted.find((icon) => icon.id === iconName) || null;
    setSearchResult(foundIcon);
  }, [iconName]);

  return (
    <div className="content-icon w-100 ds-flex flow-col-nw gap-md">
      {searchResult ? (
        <>
          <div className="w-100 ds-flex flow-row-nw align-start justify-between">
            <CopyToClipboard toCopy={searchResult.id}>
              <h2>{searchResult.name}</h2>
              <Drawer.Description className="ds-none">
                Icon {searchResult.name}
              </Drawer.Description>
            </CopyToClipboard>
            <div className="ds-flex flow-row-nw gap-xs">
              <AnimatedTabs
                layoutId="drawer-tab-variant"
                tabs={tabsWeight}
                type="weight"
              />
              <AnimatedTabs
                layoutId="drawer-tab-weight"
                tabs={tabsVariant}
                type="variant"
                showIcon
              />
            </div>
          </div>
          <div className="ds-flex flow-row-nw gap-xl">
            <div className="viewport ds-flex-center radius-md">
              <BvIcon
                name={searchResult.id}
                variant={variant}
                weight={weight}
                className={`icon color-${
                  variant === "light" ? "primary-02" : "primary-01"
                }`}
              />
            </div>
            <div className="flex-bgs ds-flex-start flow-col-nw gap-md">
              <div className="ds-flex flow-col-nw gap-xs">
                <h4>Tags</h4>
                <div className="ds-flex flow-row-wr gap-xs">
                  {searchResult.tag.map((tag) => (
                    <span
                      key={tag}
                      className="font-size-sm line-height-none bgc-gray-95 p-block-02 p-inline-04 radius-3xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Icon not found</p>
      )}
    </div>
  );
};
