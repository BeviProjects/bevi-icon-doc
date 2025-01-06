"use client";
import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  messageTooltipTransition,
  messageTooltipVariants,
} from "@/lib/framer-motion/fmTooltip";
import "./styles.css";

type TooltipProps = {
  startActive?: boolean;
  children: ReactNode;
  message: string;
};

export const Tooltip = ({ children, message }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tooltip ps-relative ds-flex-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="anchor ps-absolute">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={messageTooltipVariants}
              transition={messageTooltipTransition}
              className="message ds-flex-center p-block-02 p-inline-04 bgc-primary-01 color-primary-03 radius-xs"
            >
              <span className="line-height-none">{message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {children}
    </div>
  );
};
