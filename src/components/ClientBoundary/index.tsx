"use client";

import { Suspense } from "react";

interface ClientBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ClientBoundary({
  children,
  fallback = <div>Loading...</div>,
}: ClientBoundaryProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
