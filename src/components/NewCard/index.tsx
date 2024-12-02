import { BvIcon } from "bevi-icon";
import Link from "next/link";
import React from "react";
import "./styles.css";

export const NewCard = () => {
  return (
    <aside className="new-card pb-06">
      <Link
        href="/collection"
        className="ds-flex flow-row-nw align-stretch gap-md p-04 bgc-ciano-90 radius-lg text-decoration-none"
      >
        <div className="p-04 bgc-ciano-70 radius-md">
          <BvIcon name="surpriseBox" size={4} variant="dark" />
        </div>
        <div className="flex-bgs ds-flex flow-col-nw gap-3xs justify-center">
          <span className="title-sm">Novidade!</span>
          <p>
            Foi lançada a versão 1.3 com correção em todos os ícones existentes
            e a adição de 49 novos ícones.
          </p>
        </div>
      </Link>
    </aside>
  );
};
