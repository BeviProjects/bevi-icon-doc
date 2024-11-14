import type { Transition, Variants } from "motion/react";
import { cubicBezier } from "./config";

export const elementFadeInVariant: Variants = {
  offscreen: { opacity: 0, y: 8 },
  onscreen: { opacity: 1, y: 0 },
};

export const elementFadeInTransition: Transition = {
  type: "spring",
  duration: 0.2,
  bounce: 0.4,
};

export const pageFadeInVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const pageFadeInTransition: Transition = {
  duration: 0.2,
};

export const fadeInVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
