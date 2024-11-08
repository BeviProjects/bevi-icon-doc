"use client";
import React, { useEffect } from "react";
import Page from "./page";
import { useDrawer } from "@/hooks/useDrawer";

const Default = () => {
  const { setState } = useDrawer();

  useEffect(() => {
    setState(true);
  }, []);

  return <Page />;
};

export default Default;
