import { ReactNode, Suspense } from "react";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { IconVariantProvider } from "@/contexts/IconVariantContext";
import { IconWeightProvider } from "@/contexts/IconWeightContext";
import { IconShow } from "@/components/IconShow";
import { ClientBoundary } from "@/components/ClientBoundary";

type IconLayoutProps = {
  children: ReactNode;
};

const IconLayoutContent = ({ children }: IconLayoutProps) => {
  return (
    <main
      className="ds-flex flow-col-nw gap-xs pb-16 bgc-gray-95"
      data-vaul-drawer-wrapper="true"
    >
      {children}
      <ClientBoundary>
        <IconShow />
      </ClientBoundary>
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
