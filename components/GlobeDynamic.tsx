'use client';

import dynamic from 'next/dynamic';
import { GlobeConfig } from './ui/Globe';

// Dynamically import the World component with no SSR
const World = dynamic(() => import('./ui/Globe').then(mod => ({ default: mod.World })), { ssr: false });

interface GlobeDynamicProps {
  config?: GlobeConfig;
}

const GlobeDynamic = ({ config }: GlobeDynamicProps) => {
  return <World globeConfig={config || {}} data={[]} />;
};

export default GlobeDynamic;
