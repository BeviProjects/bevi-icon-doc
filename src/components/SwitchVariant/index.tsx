import { useContext, useEffect } from "react";
import { BvIcon } from "bevi-icon";
import { Variants } from "@/types/icons";
import "./styles.css";
import { useIconVariant } from "@/hooks/useIconVariant";

export const SwitchVariant = () => {
  const { variant, setVariant } = useIconVariant();
  const variants = ["solid", "duo", "dark", "light"] as Variants[];

  return (
    <div className="ds-flex-end gap-xs">
      {variants.map((v, index) => (
        <button
          key={`${v}-${index}`}
          type="button"
          data-state={variant === v ? "active" : "inactive"}
          onClick={() => setVariant(v)}
          className="btn-switch-variant p-block-02 p-inline-04"
        >
          <BvIcon
            name="cube"
            size={1.5}
            variant={v}
            className={`color-${v === "light" ? "primary-02" : "primary-01"}`}
          />
          {v}
        </button>
      ))}
    </div>
  );
};
