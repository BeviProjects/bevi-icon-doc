import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { allIconsSorted } from '@/utils/icons';
import { Modal } from '@/components/Modal';

const IconContent = async ({ iconName }: { iconName: string }) => {
  // Agora verificamos se o ícone existe no array allIconsSorted
  const iconExists = allIconsSorted.includes(iconName);
  
  if (!iconExists) {
    notFound();
  }

  return (
    <div>
      <h1>Icon: {iconName}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  // Agora geramos os parâmetros diretamente do array allIconsSorted
  return allIconsSorted.map(iconName => ({
    icon: iconName // 'icon' corresponde ao [icon] da rota
  }));
}

const Page = async ({ params }: { params: { icon: string } }) => {
  return(
    <Modal closeHref='/icons'>
      <Suspense fallback={<div>Loading...</div>}>
        <IconContent iconName={params.icon} />
      </Suspense>
    </Modal>
  )
}

export default Page