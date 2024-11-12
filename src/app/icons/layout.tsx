"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { Drawer } from "vaul";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { IconVariantProvider } from "@/contexts/IconVariantContext";
import { SwitchVariant } from "@/components/SwitchVariant";

type IconLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const IconLayout = ({ children, modal }: IconLayoutProps) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    router.push("/icons");
  };

  const handleOpenChange = (open: boolean) => {
    setDrawerOpen(open);
    if (!open) {
      handleDrawerClose();
    }
  };

  return (
    <DrawerProvider state={drawerOpen} setState={setDrawerOpen}>
      <IconVariantProvider>
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
          <div className="bv-container-lg ds-flex flow-col-nw gap-sm">
            {children}
          </div>
          <Drawer.Root
            open={drawerOpen}
            onOpenChange={handleOpenChange}
            shouldScaleBackground
          >
            <Drawer.Portal>
              <Drawer.Overlay className="ps-fixed inset-00 bg-black-40" />
              <Drawer.Content className="ps-fixed bottom-00 left-00 right-00 bgc-primary-03 pt-06 pb-16">
                <Drawer.Handle />
                <div className="bv-container-sm pt-06 ds-flex-start flow-col-nw gap-sm">
                  {modal}
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </main>
      </IconVariantProvider>
    </DrawerProvider>
  );
};

export default IconLayout;
