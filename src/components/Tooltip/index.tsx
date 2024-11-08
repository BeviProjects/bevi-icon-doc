"use client";
import {
  messageTooltipTransition,
  messageTooltipVariants,
} from "@/lib/framer-motion/fmTooltip";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import "./styles.css";

type TooltipProps = {
  startActive?: boolean;
  children: ReactNode;
  message: string;
};

export const Tooltip = ({
  children,
  message,
  startActive = true,
}: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(startActive);

  return (
    <div
      className="tooltip ps-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={messageTooltipVariants}
            transition={messageTooltipTransition}
            className="message ds-flex-center ps-absolute bgc-primary-01 color-primary-03"
          >
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
