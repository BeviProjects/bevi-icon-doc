import React from "react";
import { Article } from "@/components/Article";
import { ClientBoundary } from "@/components/ClientBoundary";

const Collection = () => {
  return (
    <div className="bv-container-sm">
      <ClientBoundary>
        <Article>
          <h1>Collection</h1>
        </Article>
      </ClientBoundary>
    </div>
  );
};

export default Collection;
