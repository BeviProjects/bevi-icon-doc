"use client";
import { ReactNode, useEffect } from "react";
import { Drawer } from "vaul";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { IconVariantProvider } from "@/contexts/IconVariantContext";
import { SwitchVariant } from "@/components/SwitchVariant";
import { useDrawer } from "@/hooks/useDrawer";
import { useQueryState } from "nuqs";

type IconLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const IconLayoutContent = ({ children, modal }: IconLayoutProps) => {
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
      className="ds-flex flow-col-nw gap-xl"
      data-vaul-drawer-wrapper="true"
    >
      <section>
        <div className="bv-container-lg ds-flex flow-row-nw justify-between">
          <span>search bar</span>
          <SwitchVariant />
        </div>
      </section>
      <div className="bv-container-lg">{children}</div>
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
              {modal}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </main>
  );
};

const IconLayout = ({ children, modal }: IconLayoutProps) => {
  return (
    <DrawerProvider>
      <IconVariantProvider>
        <IconLayoutContent children={children} modal={modal} />
      </IconVariantProvider>
    </DrawerProvider>
  );
};

export default IconLayout;
