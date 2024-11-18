"use client";
import { ContentIcon } from "@/components/ContentIcon";
import { Suspense } from "react";
import Loading from "./loading";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("icon");

  return (
    <Suspense fallback={<Loading />}>
      <ContentIcon iconName={search || ""} />
    </Suspense>
  );
};
export default Page;
