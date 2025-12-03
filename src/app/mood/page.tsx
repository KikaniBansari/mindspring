"use client";

import Link from 'next/link';
import { BrainCircuit, CloudLightning, CloudDrizzle, BrainCog, Battery, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BottomNav from '@/components/BottomNav';

const moods = [
  { name: 'Stressed', icon: BrainCircuit, color: 'text-red-400' },
  { name: 'Overwhelmed', icon: CloudLightning, color: 'text-purple-400' },
  { name: 'Foggy', icon: CloudDrizzle, color: 'text-sky-400' },
  { name: 'Confused', icon: BrainCog, color: 'text-yellow-400' },
  { name: 'Tired', icon: Battery, color: 'text-slate-400' },
  { name: 'Full Mind', icon: Brain, color: 'text-green-400' },
];

export default function MoodSelectionPage() {
  return (
    <div className="flex-1 flex flex-col w-full">
      <div className="p-6 pt-16 flex-1 flex flex-col">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold font-headline text-foreground">
            How does your mind feel?
          </h1>
          <p className="text-muted-foreground mt-2">Select a feeling to begin your session.</p>
        </header>
        <main className="flex-1">
          <div className="grid grid-cols-2 gap-5">
            {moods.map((mood) => (
              <Link href={`/session/pre?mood=${mood.name}`} key={mood.name}>
                <Card className={`aspect-video group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer bg-card/60 hover:bg-card hover:shadow-accent/20`}>
                  <CardContent className="flex flex-col items-center justify-center h-full gap-2">
                    <mood.icon className={`w-10 h-10 ${mood.color} transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />
                    <p className="font-semibold text-foreground">{mood.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
