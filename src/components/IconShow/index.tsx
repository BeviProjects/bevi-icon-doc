"use client";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { useDrawer } from "@/hooks/useDrawer";
import { allIconsSorted } from "@/utils/icons";
import { useQueryParams } from "@/hooks/useQueryParams";
import { IconData } from "@/types/icons";
import { Skeleton } from "./Skeleton";
import { Content } from "./Content";

const fetchIcon = async (iconId: string | null): Promise<IconData | null> => {
  if (!iconId) return null;

  const allIconsSorted = await import("@/utils/icons").then(
    (m) => m.allIconsSorted
  );
  return allIconsSorted.find((icon) => icon.id === iconId) || null;
};

export const IconShow = () => {
  const { navigateWithQuery, queryParams } = useQueryParams();
  const [searchResult, setSearchResult] = useState<IconData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, closeDrawer, openDrawer } = useDrawer();

  const searchIcon = () => {
    setIsLoading(true);
    try {
      const foundIcon =
        allIconsSorted.find((icon) => icon.id === queryParams.icon) || null;
      setSearchResult(foundIcon);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (open: boolean) => {
    if (!open) {
      navigateWithQuery("icon");
      closeDrawer();
      setSearchResult(null);
    }
  };

  useEffect(() => {
    if (queryParams.icon) {
      openDrawer(queryParams.icon);
      searchIcon();
    } else {
      closeDrawer();
      setSearchResult(null);
    }
  }, [queryParams]);

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => handleOnChange(open)}
      shouldScaleBackground
    >
      <Drawer.Portal>
        <Drawer.Overlay className="ps-fixed inset-00 bg-black-40 z-index-07" />
        <Drawer.Content className="ps-fixed bottom-00 left-00 right-00 bgc-primary-03 pt-06 pb-16 z-index-08">
          <Drawer.Handle />
          <div className="bv-container-sm pt-06 ds-flex-start flow-col-nw gap-sm">
            <Drawer.Title className="ds-none">{queryParams.icon}</Drawer.Title>
            <Drawer.Description className="ds-none">
              Icon {queryParams.icon}
            </Drawer.Description>
            {isLoading ? (
              <Skeleton />
            ) : searchResult ? (
              <>
                <Content icon={searchResult} />
              </>
            ) : null}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
