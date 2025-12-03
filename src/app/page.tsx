"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/mood');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return <SplashScreen />;
}
