
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sparkles, BookHeart } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';

type DiaryEntry = {
    id: number;
    date: string;
    words: string[];
};

export default function DiaryPage() {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [word3, setWord3] = useState('');
    const [entries, setEntries] = useState<DiaryEntry[]>([]);

    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem('mindspring-diary') || '[]');
        setEntries(savedEntries);
    }, []);

    const handleSave = () => {
        if (!word1) return; // Word 1 is required

        const newEntry: DiaryEntry = {
            id: Date.now(),
            date: new Date().toISOString(),
            words: [word1, word2, word3].filter(Boolean), // Filter out empty optional words
        };

        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem('mindspring-diary', JSON.stringify(updatedEntries));

        // Clear inputs
        setWord1('');
        setWord2('');
        setWord3('');
    };

    return (
        <div className="flex-1 flex flex-col w-full">
            <ScrollArea className="flex-1">
                <div className="flex-1 flex flex-col w-full p-6 pt-12">
                    <header className="text-center mb-10">
                        <h1 className="text-3xl font-bold font-headline text-foreground">
                            Magic Diary
                        </h1>
                        <p className="text-muted-foreground">Your private space for reflection and clarity.</p>
                    </header>

                    <main className="flex-1 flex flex-col gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Your Magical Words</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Input
                                    value={word1}
                                    onChange={(e) => setWord1(e.target.value)}
                                    placeholder="Word 1 (required)"
                                />
                                <Input
                                    value={word2}
                                    onChange={(e) => setWord2(e.target.value)}
                                    placeholder="Word 2 (optional)"
                                />
                                <Input
                                    value={word3}
                                    onChange={(e) => setWord3(e.target.value)}
                                    placeholder="Word 3 (optional)"
                                />
                                <Button onClick={handleSave} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <Sparkles className="mr-2" />
                                    Save to Diary
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="flex-1 flex flex-col min-h-0">
                            <h2 className="text-xl font-bold mb-4">Past Entries</h2>
                            {entries.length > 0 ? (
                                <div className="space-y-4">
                                    {entries.map((entry) => (
                                        <Card key={entry.id} className="p-4">
                                            <p className="text-sm text-muted-foreground mb-2">{format(new Date(entry.date), 'MMM d, yyyy')}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {entry.words.map((word, index) => (
                                                    <div key={index} className="bg-primary/20 text-primary-foreground font-semibold px-3 py-1 rounded-full text-sm">
                                                        {word}
                                                    </div>
                                                ))}
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            ) : (
                                <Card className="flex-1 flex flex-col items-center justify-center text-center p-8 border-dashed">
                                    <BookHeart className="w-12 h-12 text-muted-foreground mb-4" />
                                    <p className="text-muted-foreground">No entries yet. Start by adding your <br/> first magical words! ✨</p>
                                </Card>
                            )}
                        </div>
                    </main>
                </div>
            </ScrollArea>
            <BottomNav />
        </div>
    );
}
