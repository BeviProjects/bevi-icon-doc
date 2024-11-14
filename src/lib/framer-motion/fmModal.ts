import type { Transition, Variants } from "motion/react";
import { cubicBezier } from "./config";

// Background
export const bgModalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const bgModalTransition: Transition = {
  duration: 0.4,
};

// Scroll
export const scrollHeaderVariants: Variants = {
  down: { y: 16 },
  up: { y: 0 },
};

// Card
export const cardModalVariants: Variants = {
  hidden: { opacity: 0.5, y: 512 },
  visible: { opacity: 1, y: 0 },
};

export const cardModalTransition: Transition = {
  duration: 0.4,
  delay: 0.2,
};
