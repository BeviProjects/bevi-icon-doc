"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BvIcon } from "bevi-icon";
import "./styles.css";
import { Variants } from "@/types/icons";
import { useDrawer } from "@/hooks/useDrawer";
import { useIconVariant } from "@/hooks/useIconVariant";
import { SwitchVariant } from "../SwitchVariant";

type ContentIconProps = {
  iconName: string;
};

export const ContentIcon = ({ iconName }: ContentIconProps) => {
  const { setState } = useDrawer();
  const { variant } = useIconVariant();

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div className="content-icon ds-flex flow-col-nw gap-md">
      <div className="w-100">
        <h3>{iconName}</h3>
      </div>
      <div className="ds-flex flow-row-nw gap-xs">
        <div className="viewport ds-flex-center bgc-gray-01 radius-md">
          <BvIcon
            name={iconName}
            variant={variant}
            className={`icon color-${
              variant === "light" ? "primary-02" : "primary-01"
            }`}
          />
        </div>
        <div className="flex-bgs">
          <SwitchVariant />
        </div>
      </div>
    </div>
  );
};
