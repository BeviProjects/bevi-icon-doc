"use client";
import { ReactNode, useState } from "react";
import { Drawer } from "vaul";
import { useRouter } from "next/navigation";
import { createContext } from "react";
export const IconContext = createContext({
  variant: "solid",
  drawerOpen: false,
  setDrawerOpen: (drawerOpen: boolean) => {},
});

type IconLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const IconLayout = ({ children, modal }: IconLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

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
    <IconContext.Provider
      value={{
        variant: "solid",
        drawerOpen: drawerOpen,
        setDrawerOpen: setDrawerOpen,
      }}
    >
      <main
        className="ds-flex flow-col-nw gap-lg p-block-16"
        data-vaul-drawer-wrapper="true"
      >
        <section>
          <div className="bv-container-lg ds-flex flow-row-nw justify-between">
            <span>search bar</span>
            <span>Select theme</span>
          </div>
        </section>
        <Drawer.Root
          open={drawerOpen}
          onOpenChange={handleOpenChange}
          shouldScaleBackground
        >
          {children}

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
    </IconContext.Provider>
  );
};

export default IconLayout;
