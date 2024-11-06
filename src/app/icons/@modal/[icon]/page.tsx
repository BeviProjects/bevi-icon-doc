import { Suspense, useContext } from "react";
import { notFound } from "next/navigation";
import Loading from "./loading";
import { ContentIcon } from "@/components/ContentIcon";
import { allIconsSorted } from "@/utils/icons";
import { IconContext } from "../../layout";

export async function generateStaticParams() {
  return allIconsSorted.map((iconName) => ({
    icon: iconName,
  }));
}

const Page = async ({ params }: { params: { icon: string } }) => {
  const iconExists = allIconsSorted.includes(params.icon);

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
