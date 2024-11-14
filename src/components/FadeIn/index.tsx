"use client";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeInVariants } from "@/lib/framer-motion/fmFadeIn";

export const FadeIn = ({ children }: { children: ReactNode }) => {
  return <motion.div variants={fadeInVariants}>{children}</motion.div>;
};
