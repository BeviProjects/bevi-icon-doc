"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Drawer } from "vaul";
import { BvIcon } from "bevi-icon";
import { motion } from "motion/react";
import { useIconVariant } from "@/hooks/useIconVariant";
import { useIconWeight } from "@/hooks/useIconWeight";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { AnimatedTabs } from "@/components/SwitchTabs";
import { tabsVariant, tabsWeight } from "@/utils/tabs";
import "./styles.css";
import { IconData } from "@/types/icons";

type ContentProps = {
  icon: IconData;
};

export const Content = ({ icon }: ContentProps) => {
  const { variant } = useIconVariant();
  const { weight } = useIconWeight();

  return (
    <div className="content-icon w-100 ds-flex flow-col-nw gap-md">
      <div className="w-100 ds-flex flow-row-nw align-start justify-between">
        <CopyToClipboard toCopy={icon.id}>
          <h2>{icon.name}</h2>
          <Drawer.Description className="ds-none">
            Icon {icon.name}
          </Drawer.Description>
        </CopyToClipboard>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="ds-flex flow-row-nw gap-xl"
      >
        <div className="viewport ds-flex-center radius-md">
          <BvIcon
            name={icon.id}
            variant={variant}
            weight={weight}
            className={`icon color-${
              variant === "light" ? "primary-02" : "primary-01"
            }`}
          />
        </div>
        <div className="flex-bgs ds-flex-start flow-col-nw gap-lg">
          <div className="ds-flex flow-row-nw gap-xs">
            <AnimatedTabs
              bgColor="gray-95"
              layoutId="drawer-tab-variant"
              tabs={tabsWeight}
              type="weight"
            />
            <AnimatedTabs
              bgColor="gray-95"
              layoutId="drawer-tab-weight"
              tabs={tabsVariant}
              type="variant"
              showIcon
            />
          </div>
          <div className="ds-flex flow-col-nw gap-xs">
            <h4>Aplicação</h4>
            <div className="ds-flex flow-row-wr gap-xs">
              <CopyToClipboard
                toCopy={`<BvIcon name="${icon.id}" variant="${variant}" weight={${weight}} />`}
              >
                <div className="bgc-gray-95 radius-xs p-inline-06 p-block-04">
                  <span>
                    {`<BvIcon name="${icon.id}" variant="${variant}" weight={${weight}} />`}
                  </span>
                </div>
              </CopyToClipboard>
            </div>
          </div>
          <div className="ds-flex flow-col-nw gap-xs">
            <h4>Tags</h4>
            <div className="ds-flex flow-row-wr gap-xs">
              {icon.tag.map((tag) => (
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
      </motion.div>
    </div>
  );
};
