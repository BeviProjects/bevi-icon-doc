import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "../CopyToClipboard";
import { specialWeightIcons } from "@/utils/icons";
import "./styles.css";

type SVGCopyProps = {
  iconId: string;
  iconVariant: string;
  iconWeight: number;
};

export const SVGCopy: React.FC<SVGCopyProps> = ({
  iconId,
  iconVariant,
  iconWeight,
}) => {
  const [svgString, setSvgString] = useState<string>("");

  useEffect(() => {
    fetch(
      `/icons/${iconId}-${
        Object.values(specialWeightIcons).some((arr) => arr.includes(iconId))
          ? iconWeight
          : iconVariant
      }.svg`
    )
      .then((response) => response.text())
      .then((data) => setSvgString(data))
      .catch((err) => console.error("Erro ao carregar SVG:", err));
  }, [iconId, iconVariant]);

  return (
    <div className="btn-copy-svg ps-absolute ds-flex-center">
      <CopyToClipboard toCopy={svgString}>
        <div className="content p-04 radius-04 bgc-gray-01 hover">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="color-primary-01"
          >
            <path
              d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6C4.28333 6 4.52083 6.09583 4.7125 6.2875C4.90417 6.47917 5 6.71667 5 7V20H15C15.2833 20 15.5208 20.0958 15.7125 20.2875C15.9042 20.4792 16 20.7167 16 21C16 21.2833 15.9042 21.5208 15.7125 21.7125C15.5208 21.9042 15.2833 22 15 22H5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </CopyToClipboard>
    </div>
  );
};
