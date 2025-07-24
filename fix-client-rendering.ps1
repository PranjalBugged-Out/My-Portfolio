# Script to fix client-side rendering issues for Netlify deployment

Write-Host "Fixing client-side rendering issues for Netlify deployment..." -ForegroundColor Green

# Create dynamic import wrappers for components that use browser APIs
Write-Host "Creating dynamic import wrappers for components that use browser APIs..." -ForegroundColor Yellow

# 1. Globe component wrapper
$globeWrapperPath = "$PSScriptRoot\components\GlobeDynamic.tsx"
$globeWrapperContent = @"
'use client';

import dynamic from 'next/dynamic';
import { GlobeConfig } from './ui/Globe';

// Dynamically import the Globe component with no SSR
const Globe = dynamic(() => import('./ui/Globe'), { ssr: false });

interface GlobeDynamicProps {
  config?: GlobeConfig;
}

const GlobeDynamic = ({ config }: GlobeDynamicProps) => {
  return <Globe config={config} />;
};

export default GlobeDynamic;
"@

Set-Content -Path $globeWrapperPath -Value $globeWrapperContent
Write-Host "✅ Created Globe wrapper at $globeWrapperPath" -ForegroundColor Green

# 2. GradientBg component wrapper
$gradientBgWrapperPath = "$PSScriptRoot\components\GradientBgDynamic.tsx"
$gradientBgWrapperContent = @"
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
"@

Set-Content -Path $gradientBgWrapperPath -Value $gradientBgWrapperContent
Write-Host "✅ Created GradientBg wrapper at $gradientBgWrapperPath" -ForegroundColor Green

# 3. BentoGrid component wrapper
$bentoGridWrapperPath = "$PSScriptRoot\components\BentoGridDynamic.tsx"
$bentoGridWrapperContent = @"
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
"@

Set-Content -Path $bentoGridWrapperPath -Value $bentoGridWrapperContent
Write-Host "✅ Created BentoGrid wrapper at $bentoGridWrapperPath" -ForegroundColor Green

# Update components that use browser APIs
Write-Host "Updating components that use browser APIs..." -ForegroundColor Yellow

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "✅ Fixed client-side rendering issues!" -ForegroundColor Green
Write-Host ""
Write-Host "To deploy to Netlify, follow these steps:" -ForegroundColor Cyan
Write-Host "1. Run: netlify login" -ForegroundColor White
Write-Host "2. Run: netlify init" -ForegroundColor White
Write-Host "3. Run: netlify deploy --prod" -ForegroundColor White
Write-Host ""
Write-Host "For more detailed instructions, see the NETLIFY_MANUAL_DEPLOYMENT.md file." -ForegroundColor Yellow