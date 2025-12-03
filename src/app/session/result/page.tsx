"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generatePersonalizedInsights, PersonalizedInsightsOutput } from '@/ai/flows/personalized-insights';
import { Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

type HistoryItem = {
    id: number;
    date: string;
    mood: string;
    score: number;
    clearedThoughts: string;
};

function ResultContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const mood = searchParams.get('mood');
    
    const [clearedThoughts, setClearedThoughts] = useState('');
    const [clarityScore, setClarityScore] = useState(0);
    const [insights, setInsights] = useState<PersonalizedInsightsOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const thoughts = localStorage.getItem('mindspring-thoughts') || '';
        setClearedThoughts(thoughts);
        
        // More sensitive scoring
        const score = Math.min(100, 10 + Math.floor(thoughts.length / 20));
        setClarityScore(score);

        if (mood) {
            const newHistoryItem: HistoryItem = {
                id: Date.now(),
                date: new Date().toISOString(),
                mood,
                score,
                clearedThoughts: thoughts,
            };

            const history: HistoryItem[] = JSON.parse(localStorage.getItem('mindspring-history') || '[]');
            history.unshift(newHistoryItem);
            localStorage.setItem('mindspring-history', JSON.stringify(history.slice(0, 100)));
        }
    }, [mood]);

    const handleGenerateInsights = async () => {
        if (!clearedThoughts || !mood) return;
        setIsLoading(true);
        try {
            const result = await generatePersonalizedInsights({ clearedThoughts, mood });
            setInsights(result);
        } catch (error) {
            console.error("Failed to generate insights:", error);
            // Optionally, show a toast notification for the error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center h-full w-full animate-in fade-in duration-500">
            <Badge variant="secondary" className="mb-4 text-lg py-2 px-4 shadow-sm bg-secondary/80 text-secondary-foreground">+50 XP</Badge>
            <h1 className="text-3xl font-bold font-headline mb-2">Your mind is</h1>
            <p className="text-7xl font-bold text-primary mb-8 drop-shadow-md">{clarityScore}% clearer</p>

            {clearedThoughts.length > 10 && !insights && (
                <Button onClick={handleGenerateInsights} disabled={isLoading} size="lg" className="mb-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Get AI Insight
                </Button>
            )}

            {insights && (
                 <Card className="w-full text-left animate-in fade-in duration-500 shadow-md bg-card/80">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl"><Sparkles className="text-accent"/> AI Insight</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{insights.insights}</p>
                    </CardContent>
                </Card>
            )}

            <div className="mt-auto w-full pt-8 space-y-3">
                 <Link href="/history" className="w-full">
                    <Button variant="outline" className="w-full" size="lg">View History</Button>
                </Link>
                <Link href="/mood" className="w-full">
                    <Button className="w-full" size="lg">Done</Button>
                </Link>
            </div>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div>Calculating results...</div>}>
            <ResultContent />
        </Suspense>
    )
}
