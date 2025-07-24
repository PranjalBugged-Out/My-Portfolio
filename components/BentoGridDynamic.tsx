'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the BentoGrid components with no SSR
const BentoGrid = dynamic(
  () => import('./ui/BentoGrid').then((mod) => mod.BentoGrid),
  { ssr: false }
);

const BentoGridItem = dynamic(
  () => import('./ui/BentoGrid').then((mod) => mod.BentoGridItem),
  { ssr: false }
);

interface BentoGridDynamicProps {
  className?: string;
  children?: React.ReactNode;
}

const BentoGridDynamic = ({ className, children }: BentoGridDynamicProps) => {
  return <BentoGrid className={className}>{children}</BentoGrid>;
};

interface BentoGridItemDynamicProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGridItemDynamic = (props: BentoGridItemDynamicProps) => {
  return <BentoGridItem {...props} />;
};

export default BentoGridDynamic;
