import type { Transition, Variants } from "framer-motion";

export const messageTooltipVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const messageTooltipTransition: Transition = {
  duration: 0.16,
  delay: 0.2,
};
