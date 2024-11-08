// src/app/icons/@modal/[icon]/page.tsx
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "./loading";
import { ContentIcon } from "@/components/ContentIcon";
import { allIconsSorted } from "@/utils/icons";

export async function generateStaticParams() {
  return allIconsSorted.map((icon) => ({
    icon: icon.id,
  }));
}

const Page = async ({ params }: { params: { icon: string } }) => {
  const iconExists = allIconsSorted.some((icon) => icon.id === params.icon);

  if (!iconExists) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <ContentIcon iconName={params.icon} />
    </Suspense>
  );
};

export default Page;
