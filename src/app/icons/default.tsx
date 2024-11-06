"use client";
import React, { useContext, useEffect } from "react";
import Page from "./page";
import { IconContext } from "./layout";

const Default = () => {
  const iconContext = useContext(IconContext);

  useEffect(() => {
    iconContext.setDrawerOpen(true);
  }, []);

  return <Page />;
};

export default Default;
