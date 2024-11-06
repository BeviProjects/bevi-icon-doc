// src/components/Vaul/index.tsx
"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Drawer } from "vaul";

type VaulProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const Vaul = ({ children, isOpen }: VaulProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);

  useEffect(() => {
    setIsDrawerOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const wrapper = document.querySelector("main") as HTMLElement;

    if (wrapper) {
      if (!isDrawerOpen) {
        // Redireciona para /icons quando o drawer fecha
        window.location.href = "/icons";
        wrapper.style.transform = "scale(1)";
        wrapper.style.borderRadius = "0px";
      } else {
        wrapper.style.transform = "scale(0.95)";
        wrapper.style.borderRadius = "16px";
        wrapper.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      }
    }
  }, [isDrawerOpen]);

  return (
    <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="ps-fixed inset-00 bg-black-40" />
        <Drawer.Content className="bgc-primary-03 ps-fixed bottom-00 left-00 right-00">
          <div className="bgc-primary-03 pb-16">
            <div className="bv-container-sm ds-flex flow-col-nw gap-06">
              <div className="w-100 ds-flex-center p-block-06">
                <div className="drawer-icon"></div>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
