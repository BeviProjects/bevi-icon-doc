"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  bgModalVariants,
  bgModalTransition,
  cardModalVariants,
  cardModalTransition,
} from "@/lib/framer-motion/fmModal";
import "./styles.css";
import { BvIcon } from "bevi-icon";

type ModalProps = {
  title: string;
  children: ReactNode;
  closeHref: string;
};

export const Modal = ({ title, children, closeHref }: ModalProps) => {
  return (
    <AnimatePresence>
      <aside className="modal ps-fixed ds-flex-end inset-00 z-index-08">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={bgModalVariants}
          transition={bgModalTransition}
        >
          <Link
            href={closeHref}
            className="modal-close ps-absolute inset-00 z-index-01"
          />
        </motion.div>
        <div className="bv-container-sm ps-relative z-index-02">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={cardModalVariants}
            transition={cardModalTransition}
            className="modal-content pb-16 pt-10 p-inline-10 ds-flex flow-col-nw gap-md bgc-primary-03"
          >
            <div className="w-100 ds-flex flow-row-nw align-center justify-between">
              <h2>{title}</h2>
              <Link
                href={closeHref}
                className="p-02 hover:bgc-gray-01 radius-xs"
                title="Fechar"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.4001L6.92498 18.4751C6.72498 18.6751 6.49164 18.7751 6.22498 18.7751C5.95831 18.7751 5.72498 18.6751 5.52498 18.4751C5.32498 18.2751 5.22498 18.0418 5.22498 17.7751C5.22498 17.5084 5.32498 17.2751 5.52498 17.0751L10.6 12.0001L5.52498 6.9251C5.32498 6.7251 5.22498 6.49176 5.22498 6.2251C5.22498 5.95843 5.32498 5.7251 5.52498 5.5251C5.72498 5.3251 5.95831 5.2251 6.22498 5.2251C6.49164 5.2251 6.72498 5.3251 6.92498 5.5251L12 10.6001L17.075 5.5251C17.275 5.3251 17.5083 5.2251 17.775 5.2251C18.0416 5.2251 18.275 5.3251 18.475 5.5251C18.675 5.7251 18.775 5.95843 18.775 6.2251C18.775 6.49176 18.675 6.7251 18.475 6.9251L13.4 12.0001L18.475 17.0751C18.675 17.2751 18.775 17.5084 18.775 17.7751C18.775 18.0418 18.675 18.2751 18.475 18.4751C18.275 18.6751 18.0416 18.7751 17.775 18.7751C17.5083 18.7751 17.275 18.6751 17.075 18.4751L12 13.4001Z"
                    fill="#222343"
                  />
                </svg>
              </Link>
            </div>
            {children}
          </motion.div>
        </div>
      </aside>
    </AnimatePresence>
  );
};
