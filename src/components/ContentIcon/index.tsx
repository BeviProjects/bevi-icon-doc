"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BvIcon } from "bevi-icon";
import "./styles.css";
import { SwitchVariant } from "../SwitchVariant";
import { Variants } from "@/types/icons";
import useCopySvgToClipboard from "@/hook/useCopySvgToClipboard";
import { IconContext } from "@/app/icons/layout";

type ContentIconProps = {
  iconName: string;
};

export const ContentIcon = ({ iconName }: ContentIconProps) => {
  const [variantState, setVariantState] = useState<Variants>("solid");
  const iconRef = useRef<SVGSVGElement | null>(null);
  const copySvgToClipboard = useCopySvgToClipboard();
  const iconContext = useContext(IconContext);

  useEffect(() => {
    iconContext.setDrawerOpen(true);
  }, []);

  return (
    <div className="content-icon ds-flex flow-row-nw gap-xs">
      <div className="viewport ds-flex-center bgc-gray-01 radius-md">
        <BvIcon
          ref={iconRef}
          name={iconName}
          variant={variantState}
          className={`icon color-${
            variantState === "light" ? "primary-02" : "primary-01"
          }`}
        />
      </div>
      <div className="flex-bgs">
        <SwitchVariant state={variantState} setState={setVariantState} />
        <button
          type="button"
          onClick={() => copySvgToClipboard(iconRef.current)}
        >
          Copiar SVG
        </button>
      </div>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div className="content-icon ds-flex flow-row-nw gap-xs">
      <div className="viewport ds-flex-center bgc-gray-01 radius-md"></div>
      <div className="flex-bgs"></div>
    </div>
  );
};
