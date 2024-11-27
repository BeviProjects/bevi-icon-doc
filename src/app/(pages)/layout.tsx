"use client";
import { ReactNode, useEffect } from "react";
import { Drawer } from "vaul";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { IconVariantProvider } from "@/contexts/IconVariantContext";
import { IconWeightProvider } from "@/contexts/IconWeightContext";
import { useDrawer } from "@/hooks/useDrawer";
import { SwitchVariant } from "@/components/SwitchVariant";
import { useQueryState } from "nuqs";
import { ContentIcon } from "@/components/ContentIcon";
import { SwitchWeight } from "@/components/SwitchWeight";
import { IconWeightContext } from "@/contexts/IconWeightContext";

type IconLayoutProps = {
  children: ReactNode;
};

const IconLayoutContent = ({ children }: IconLayoutProps) => {
  const { isOpen, closeDrawer, openDrawer } = useDrawer();
  const [icon, setIcon] = useQueryState("icon");

  // Efeito para abrir o Drawer se houver um ícone na URL ao carregar
  useEffect(() => {
    if (icon) {
      openDrawer(icon);
    }
  }, [icon, openDrawer]);

  return (
    <main
      className="ds-flex flow-col-nw gap-xs pb-16 bgc-gray-95"
      data-vaul-drawer-wrapper="true"
    >
      {/* <section>
        <div className="bv-container-lg">
          <div className="ds-flex flow-row-nw justify-between p-inline-06">
            <span>search bar</span>
            <div className="ds-flex flow-row-nw">
              <SwitchWeight />
              <SwitchVariant />
            </div>
          </div>
        </div>
      </section> */}
      {children}
      <Drawer.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            // Limpa o parâmetro da URL quando o Drawer é fechado
            setIcon(null);
            closeDrawer();
          }
        }}
        shouldScaleBackground
      >
        <Drawer.Portal>
          <Drawer.Overlay className="ps-fixed inset-00 bg-black-40 z-index-07" />
          <Drawer.Content className="ps-fixed bottom-00 left-00 right-00 bgc-primary-03 pt-06 pb-16 z-index-08">
            <Drawer.Handle />
            <div className="bv-container-sm pt-06 ds-flex-start flow-col-nw gap-sm">
              <Drawer.Title className="ds-none">{icon}</Drawer.Title>
              <Drawer.Description className="ds-none">
                Icon {icon}
              </Drawer.Description>
              <ContentIcon iconName={icon || ""} />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </main>
  );
};

const IconLayout = ({ children }: IconLayoutProps) => {
  return (
    <DrawerProvider>
      <IconVariantProvider>
        <IconWeightProvider>
          <IconLayoutContent children={children} />
        </IconWeightProvider>
      </IconVariantProvider>
    </DrawerProvider>
  );
};

export default IconLayout;
