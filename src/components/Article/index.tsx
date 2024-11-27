import React, { ReactNode } from "react";

type ArticleProps = {
  children: ReactNode;
  className?: string;
};

export const Article = ({ children, className }: ArticleProps) => {
  return (
    <article
      className={`article p-inline-10 p-block-16 radius-xl bgc-primary-03 bv-shadow-sm ${className}`}
    >
      {children}
    </article>
  );
};
