"use client";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import type { ReactNode } from "react";
import { Tooltip } from "../Tooltip";

type CopyToClipboardProps = {
  children: ReactNode;
  toCopy: string;
};

export const CopyToClipboard = ({ children, toCopy }: CopyToClipboardProps) => {
  const [copyToClipboard, isCopied] = useCopyToClipboard();

  return (
    <Tooltip message={isCopied ? "Copiado" : "Copiar"}>
      <button
        type="button"
        onClick={() => copyToClipboard(toCopy)}
        className="all-unset cursor-pointer"
      >
        {children}
      </button>
    </Tooltip>
  );
};
