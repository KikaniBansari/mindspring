
"use client";

import { useState, useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';
import { Flame } from 'lucide-react';

type HistoryItem = {
    id: number;
    date: string;
    mood: string;
    score: number;
};

const chartConfig = {
  clarity: {
    label: "Clarity",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function HistoryPage() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('mindspring-history') || '[]');
        setHistory(storedHistory);
    }, []);

    const chartData = history.slice(0, 7).reverse().map(item => ({
        date: format(parseISO(item.date), 'EEE'),
        clarity: item.score,
    }));
    
    // Placeholder for streak calculation
    const streak = history.length > 0 ? 1 : 0;

    return (
        <div className="flex-1 flex flex-col w-full">
            <ScrollArea className="flex-1">
                <div className="flex-1 flex flex-col w-full p-6 pt-12">
                    <header className="text-center mb-10">
                        <h1 className="text-3xl font-bold font-headline text-foreground">
                            Your Clarity Journey
                        </h1>
                        <p className="text-muted-foreground">Track your emotional evolution over time.</p>
                    </header>
                    <main className="flex-1 flex flex-col gap-8">
                        <Card className="bg-card/80">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Flame className="text-orange-400" />
                                    {streak}-Day Clarity Streak!
                                </CardTitle>
                                <CardDescription>Keep decluttering daily for deeper calm.</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card/80">
                            <CardHeader>
                                <CardTitle>Weekly Clarity Trend</CardTitle>
                                <CardDescription>Your clarity scores over the last 7 sessions.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {history.length > 0 ? (
                                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                    <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                                        <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tickMargin={8} />
                                        <RechartsTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent indicator="dot" />}
                                        />
                                        <Line dataKey="clarity" type="monotone" stroke="var(--color-clarity)" strokeWidth={3} dot={{r: 5, fill: "var(--color-clarity)"}} activeDot={{r: 7}} />
                                    </LineChart>
                                </ChartContainer>
                                ) : <p className="text-muted-foreground text-center py-8">No session data yet. Complete a session to see your trend!</p>
                                }
                            </CardContent>
                        </Card>
                        
                        <div className="flex-1 flex flex-col min-h-0">
                            <h2 className="text-xl font-bold mb-4">Session Log</h2>
                            {history.length > 0 ? (
                            <div className="space-y-4">
                            {history.map((item) => (
                                <Card key={item.id} className="flex items-center justify-between p-4 bg-card/80">
                                    <div>
                                        <p className="font-semibold">{format(parseISO(item.date), 'MMM d, yyyy')}</p>
                                        <Badge variant="outline" className="mt-1">{item.mood}</Badge>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-primary">{item.score}%</p>
                                        <p className="text-sm text-muted-foreground">Clarity</p>
                                    </div>
                                </Card>
                            ))}
                            </div>
                            ) : <p className="text-muted-foreground text-center py-8">Your past sessions will appear here.</p>}
                        </div>
                    </main>
                </div>
            </ScrollArea>
            <BottomNav />
        </div>
    );
}
