
"use client";

import { useState, useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Sparkles, Brain, Flame, Target, Settings, Award } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type HistoryItem = {
    date: string;
    score: number;
};

export default function ProfilePage() {
    const [streak, setStreak] = useState(0);
    const [sessions, setSessions] = useState(0);
    const [avgClarity, setAvgClarity] = useState(0);
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(500);

    useEffect(() => {
        const history: HistoryItem[] = JSON.parse(localStorage.getItem('mindspring-history') || '[]');
        
        const totalSessions = history.length;
        setSessions(totalSessions);

        if (totalSessions > 0) {
            // Calculate Streak
            let currentStreak = 1;
            const dates = history.map(item => new Date(item.date).toDateString()).reverse();
            let lastDate = new Date(dates[0]);

            for (let i = 1; i < dates.length; i++) {
                const currentDate = new Date(dates[i]);
                const diffTime = currentDate.getTime() - lastDate.getTime();
                const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays === 1) {
                    currentStreak++;
                } else if (diffDays > 1) {
                    currentStreak = 1; // Reset if there's a gap
                }
                lastDate = currentDate;
            }
             // Check if the last session was yesterday or today
            const today = new Date();
            const lastSessionDate = new Date(history[0].date);
            const diffTime = today.getTime() - lastSessionDate.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 1) {
                currentStreak = 0;
            }

            setStreak(currentStreak);
        } else {
            setStreak(0);
        }
        
        if (totalSessions > 0) {
            const totalScore = history.reduce((acc, item) => acc + item.score, 0);
            setAvgClarity(Math.round(totalScore / totalSessions));
        }

        // Gamification: Level and XP
        const xpPerSession = 50;
        const totalXp = totalSessions * xpPerSession;
        const levelThreshold = 500;
        
        const calculatedLevel = Math.floor(totalXp / levelThreshold) + 1;
        setLevel(calculatedLevel);

        const xpForCurrentLevel = totalXp % levelThreshold;
        setXp((xpForCurrentLevel / levelThreshold) * 100);
        setXpToNextLevel(levelThreshold);

    }, []);
    
    const currentXp = Math.round((xp / 100) * xpToNextLevel);

    return (
        <div className="flex-1 flex flex-col w-full">
            <ScrollArea className="flex-1">
                <div className="flex-1 flex flex-col w-full p-6 pt-12">
                    <header className="relative text-center mb-8">
                        <h1 className="text-3xl font-bold font-headline text-foreground">
                            Your Profile
                        </h1>
                        <Button variant="ghost" size="icon" className="absolute top-0 right-0">
                            <Settings className="w-6 h-6 text-muted-foreground" />
                        </Button>
                    </header>

                    <main className="flex-1 flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar className="w-24 h-24 border-4 border-primary/50 shadow-lg">
                                <AvatarFallback className="bg-primary/20">
                                    <Sparkles className="w-12 h-12 text-primary" />
                                </AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold">Clarity Spirit</h2>
                                <p className="text-muted-foreground">Level {level}</p>
                            </div>
                        </div>
                        
                        <div className="w-full space-y-2">
                            <div className="flex justify-between text-sm font-medium text-muted-foreground">
                                <span>Level {level}</span>
                                <span>Level {level + 1}</span>
                            </div>
                            <Progress value={xp} className="h-3 bg-accent/30" />
                            <p className="text-center text-sm text-muted-foreground mt-1">{currentXp} / {xpToNextLevel} XP</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full text-center">
                            <Card className="bg-card/80">
                                <CardContent className="p-4 flex flex-col items-center justify-center gap-1">
                                    <Flame className="w-8 h-8 text-orange-400 mb-1"/>
                                    <p className="text-2xl font-bold">{streak}</p>
                                    <p className="text-sm text-muted-foreground">Day Streak</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/80">
                                <CardContent className="p-4 flex flex-col items-center justify-center gap-1">
                                    <Brain className="w-8 h-8 text-sky-400 mb-1"/>
                                    <p className="text-2xl font-bold">{sessions}</p>
                                    <p className="text-sm text-muted-foreground">Sessions</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/80">
                                <CardContent className="p-4 flex flex-col items-center justify-center gap-1">
                                    <Target className="w-8 h-8 text-green-400 mb-1"/>
                                    <p className="text-2xl font-bold">{avgClarity}%</p>
                                    <p className="text-sm text-muted-foreground">Avg. Clarity</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/80">
                                <CardContent className="p-4 flex flex-col items-center justify-center gap-1">
                                    <Award className="w-8 h-8 text-yellow-400 mb-1"/>
                                    <p className="text-2xl font-bold">3</p>
                                    <p className="text-sm text-muted-foreground">Badges</p>
                                </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
            </ScrollArea>
            <BottomNav />
        </div>
    );
}
