import { Variants, Weights } from "@/types/icons";
import { BvIcon } from "bevi-icon";
import React, { ReactNode } from "react";
import "./styles.css";

type CardIconProps = {
  children: ReactNode;
  description: string;
  title: string;
  iconName: string;
  iconVariant?: Variants;
  iconWeight?: Weights;
};

export const CardIcon = ({
  children,
  description,
  title,
  iconName,
  iconVariant,
  iconWeight,
}: CardIconProps) => {
  return (
    <div className="card-icon p-02 ds-flex-start flow-col-nw radius-md">
      <div className="w-100 ds-flex-center p-06">
        <BvIcon
          name={iconName}
          size={8}
          variant={iconVariant}
          weight={iconWeight}
        />
      </div>
      <div className="w-100 p-04 radius-sm flex-bgs bgc-gray-95">
        <h5 className="p-block-04 title-xs">{title}</h5>
        <p>{description}</p>

        <ul className="pl-00 pt-04 ds-flex flow-col-nw gap-3xs">{children}</ul>
      </div>
    </div>
  );
};
