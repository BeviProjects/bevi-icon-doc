"use client";
import { useEffect, useState } from "react";
import { BvIcon } from "bevi-icon";
import { motion } from "motion/react";
import { useIconVariant } from "@/hooks/useIconVariant";
import { useIconWeight } from "@/hooks/useIconWeight";
import { Variants, Weights } from "@/types/icons";
import "./styles.css";

export type TabType = {
  id: string;
  label: string;
  variant: Variants;
  weight: Weights;
};

type TabProps = {
  bgColor?: string;
  layoutId: string;
  showIcon?: boolean;
  tabs: TabType[];
  type: "variant" | "weight";
};

export const AnimatedTabs = ({
  bgColor = "primary-03",
  layoutId,
  showIcon,
  tabs,
  type,
}: TabProps) => {
  const { variant, setVariant } = useIconVariant();
  const { weight, setWeight } = useIconWeight();
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const matchingTab = tabs.find((tab) =>
      type === "variant"
        ? tab.variant === variant
        : type === "weight" && tab.weight === weight
    );

    if (matchingTab) {
      setActiveTab(matchingTab.id);
    }
  }, [variant, weight]);

  const handleOnClick = (id: string, variant: Variants, weight: Weights) => {
    setActiveTab(id);
    type === "variant" ? setVariant(variant) : setWeight(weight);
  };

  return (
    <div
      className={`animated-tabs w-fit p-02 ds-flex-start flow-row-nw gap-xs radius-sm bgc-${bgColor}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => handleOnClick(tab.id, tab.variant, tab.weight)}
          className="button"
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId={layoutId}
              className="bubble ps-absolute inset-00 z-index-01 radius-xs bgc-ciano-98"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className="ps-relative z-index-02 ds-flex flow-row-nw align-center gap-02">
            {showIcon && (
              <BvIcon
                name="cube"
                size={1.25}
                variant={tab.variant}
                weight={tab.weight}
              />
            )}
            <span className={`line-height-none font-weight-${tab.weight}`}>
              {tab.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};
