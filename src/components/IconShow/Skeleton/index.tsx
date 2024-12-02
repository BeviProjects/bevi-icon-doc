import React from "react";
import "./styles.css";

export const Skeleton = () => {
  return (
    <>
      <div className="w-100">
        <div className="skeleton-title skeleton radius-xs"></div>
      </div>
      <div className="ds-flex flow-row-nw gap-xl">
        <div className="skeleton-viewport skeleton radius-md"></div>
        <div className="flex-bgs ds-flex-start flow-col-nw gap-lg">
          <div className="w-100 ds-flex flow-row-nw gap-sm">
            <div className="skeleton-weight skeleton radius-sm"></div>
            <div className="skeleton-variant skeleton w-100 radius-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
};
