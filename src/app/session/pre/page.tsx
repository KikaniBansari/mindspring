"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function AnimatedShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <style jsx>{`
                .shape {
                    position: absolute;
                    border-radius: 50%;
                    animation: float 20s infinite linear;
                }
                .shape1 {
                    width: 80px; height: 80px;
                    left: 10%; top: 15%;
                    background-color: hsl(var(--accent) / 0.3);
                    animation-duration: 15s;
                }
                .shape2 {
                    width: 120px; height: 120px;
                    left: 70%; top: 25%;
                    background-color: hsl(var(--primary) / 0.3);
                    animation-duration: 25s;
                    animation-delay: 3s;
                }
                .shape3 {
                    width: 50px; height: 50px;
                    left: 40%; top: 60%;
                    background-color: hsl(var(--secondary) / 0.3);
                    animation-duration: 18s;
                    animation-delay: 1s;
                }
                .shape4 {
                    width: 100px; height: 100px;
                    left: 20%; top: 80%;
                    background-color: #FFB6C150;
                    animation-duration: 22s;
                    animation-delay: 5s;
                }
                 .shape5 {
                    width: 60px; height: 60px;
                    left: 80%; top: 70%;
                    background-color: #87CEEB50;
                    animation-duration: 17s;
                    animation-delay: 2s;
                }
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-20px) translateX(20px) rotate(90deg); }
                    50% { transform: translateY(0) translateX(0) rotate(180deg); }
                    75% { transform: translateY(20px) translateX(-20px) rotate(270deg); }
                    100% { transform: translateY(0) rotate(360deg); }
                }
            `}</style>
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
            <div className="shape shape4"></div>
            <div className="shape shape5"></div>
        </div>
    )
}

function PreSessionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mood = searchParams.get('mood');

  useEffect(() => {
    if (!mood) {
      router.push('/mood');
    }
  }, [mood, router]);

  if (!mood) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center h-full w-full">
        <Link href="/mood" className="absolute top-6 left-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-6 h-6" />
        </Link>
      <AnimatedShapes />
      <div className="inline-block bg-accent/80 text-accent-foreground font-semibold px-6 py-2 rounded-full mb-8">
        Your mind feels: {mood}
      </div>
      <h1 className="text-4xl font-bold font-headline mb-4">Ready to clear your mind?</h1>
      <p className="text-muted-foreground mb-12">Take a deep breath. You have 3 minutes.</p>
      <Button
        size="lg"
        className="w-full text-xl py-8 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/40"
        onClick={() => router.push(`/session/play?mood=${mood}`)}
      >
        Start Clearing
      </Button>
    </div>
  );
}

export default function PreSessionPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PreSessionContent />
        </Suspense>
    )
}
