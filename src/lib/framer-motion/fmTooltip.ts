import type { Transition, Variants } from "framer-motion";

export const messageTooltipVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const messageTooltipTransition: Transition = {
  duration: 0.2,
  delay: 0.1,
};
