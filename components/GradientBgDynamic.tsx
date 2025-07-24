'use client';

import dynamic from 'next/dynamic';

// Dynamically import the BackgroundGradientAnimation component with no SSR
const BackgroundGradientAnimation = dynamic(
  () => import('./ui/GradientBg').then((mod) => mod.BackgroundGradientAnimation),
  { ssr: false }
);

interface GradientBgDynamicProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

const GradientBgDynamic = (props: GradientBgDynamicProps) => {
  return <BackgroundGradientAnimation {...props} />;
};

export default GradientBgDynamic;
