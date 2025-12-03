
"use client";

import { Suspense, useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// --- SHARED TIMER COMPONENT ---
function GameTimer({ onTimeUp }: { onTimeUp: () => void }) {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="absolute top-4 right-4 bg-background/80 px-4 py-2 rounded-full shadow-md z-50">
      <span className="font-mono text-lg font-semibold text-foreground">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}


// --- WAVE SORTER GAME (New for Overwhelmed) ---
const WaveSorterGame = ({ onThoughtsChange }: { onThoughtsChange: React.Dispatch<React.SetStateAction<string>> }) => {
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const [waves, setWaves] = useState<{ id: number; color: string; x: number; y: number; originalX: number; originalY: number; isReturning: boolean; }[]>([]);
    const [draggedWave, setDraggedWave] = useState<number | null>(null);
    const timeElapsed = useRef(0);

    const laneColors = ["#AEE4FF", "#D8C8FF", "#FFD1B3", "#C9F7D2"];
    const laneMeanings = ["Calm", "Focus", "Let Go", "Pause"];

    // Spawn waves based on elapsed time
    useEffect(() => {
        const getSpawnInterval = () => {
            if (timeElapsed.current < 30) return 1200;
            if (timeElapsed.current < 90) return 900;
            if (timeElapsed.current < 150) return 700;
            return 550;
        };

        const spawnInterval = setInterval(() => {
            const gameArea = gameAreaRef.current?.getBoundingClientRect();
            if (!gameArea) return;
            const newWave = {
                id: Date.now(),
                color: laneColors[Math.floor(Math.random() * laneColors.length)],
                x: gameArea.width / 2,
                y: gameArea.height + 30,
                originalX: gameArea.width / 2,
                originalY: gameArea.height + 30,
                isReturning: false,
            };
            setWaves(prev => [...prev, newWave]);
        }, getSpawnInterval());
        
        const timerInterval = setInterval(() => {
            timeElapsed.current += 1;
        }, 1000);

        return () => {
            clearInterval(spawnInterval);
            clearInterval(timerInterval);
        }
    }, []);

    // Animate waves rising and returning
    useEffect(() => {
        const animationInterval = setInterval(() => {
            setWaves(prev =>
                prev.map(wave => {
                    if (wave.isReturning) {
                        // Animate back to center
                        const dx = wave.originalX - wave.x;
                        const dy = wave.originalY - wave.y;
                        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                            return { ...wave, isReturning: false, x: wave.originalX, y: wave.originalY -1 };
                        }
                        return { ...wave, x: wave.x + dx * 0.1, y: wave.y + dy * 0.1 };
                    }
                    return { ...wave, y: wave.y - 1 }
                }).filter(wave => wave.y > -50) // Remove waves that have gone off-screen
            );
        }, 30);

        return () => clearInterval(animationInterval);
    }, []);

    const handlePointerDown = (waveId: number) => {
        setDraggedWave(waveId);
        setWaves(prev => prev.map(w => w.id === waveId ? {...w, isReturning: false} : w));
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (draggedWave === null) return;
        const gameArea = gameAreaRef.current?.getBoundingClientRect();
        if (!gameArea) return;
        
        setWaves(prev =>
            prev.map(wave =>
                wave.id === draggedWave
                    ? { ...wave, x: e.clientX - gameArea.left, y: e.clientY - gameArea.top }
                    : wave
            )
        );
    };
    
    const handlePointerUp = () => {
        if (draggedWave === null) return;
        
        const wave = waves.find(w => w.id === draggedWave);
        const gameArea = gameAreaRef.current?.getBoundingClientRect();
        if (!wave || !gameArea) {
            setDraggedWave(null);
            return;
        };

        const laneWidth = gameArea.width / laneColors.length;
        const laneIndex = Math.floor(wave.x / laneWidth);
        const waveColorIndex = laneColors.indexOf(wave.color);

        if (laneIndex >= 0 && laneIndex < laneColors.length && laneIndex === waveColorIndex) {
            // Correctly sorted
            onThoughtsChange(prev => prev + "S");
            setWaves(prev => prev.filter(w => w.id !== draggedWave));
        } else {
            // Incorrectly sorted - send it back
            setWaves(prev => prev.map(w => w.id === draggedWave ? {...w, isReturning: true} : w));
        }
        setDraggedWave(null);
    };

    return (
        <div 
            ref={gameAreaRef}
            className="w-full h-full flex-1 flex flex-col bg-gradient-to-b from-[#E0F7FA] to-[#E7D9FF] rounded-2xl p-4 gap-2 overflow-hidden relative select-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            {/* Lanes */}
            <div className="absolute inset-0 flex z-0">
                {laneColors.map((color, index) => (
                    <div key={index} className="flex-1 border-r border-white/30 last:border-r-0 flex flex-col items-center pt-4">
                        <p className="font-semibold" style={{color: color, textShadow: '0 0 10px #ffffff'}}>{laneMeanings[index]}</p>
                    </div>
                ))}
            </div>

            {/* Waves */}
            <AnimatePresence>
            {waves.map(wave => (
                <motion.div
                    key={wave.id}
                    className="absolute w-16 h-16 rounded-full cursor-grab"
                    style={{
                        backgroundColor: wave.color,
                        left: wave.x - 32,
                        top: wave.y - 32,
                        boxShadow: `0 0 20px ${wave.color}, 0 0 5px white inset`,
                        border: '2px solid white'
                    }}
                    onPointerDown={() => handlePointerDown(wave.id)}
                    animate={{ 
                        scale: draggedWave === wave.id ? 1.2 : 1,
                    }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                    whileHover={{ scale: 1.1 }}
                />
            ))}
            </AnimatePresence>
        </div>
    );
};


// --- TENSION THREADS GAME (New for Stressed) ---
const TensionThreadsGame = ({ onThoughtsChange }: { onThoughtsChange: React.Dispatch<React.SetStateAction<string>> }) => {
    const NUM_THREADS = 7;
    const initialThreads = Array.from({ length: NUM_THREADS }, (_, i) => ({
        id: i,
        tension: Math.random() * 20,
        angle: (i / NUM_THREADS) * 360,
    }));

    const [threads, setThreads] = useState(initialThreads);
    const gameAreaRef = useRef<HTMLDivElement>(null);

    // Game loop for tension increase
    useEffect(() => {
        const gameInterval = setInterval(() => {
            setThreads(prevThreads => 
                prevThreads.map(thread => ({
                    ...thread,
                    tension: Math.min(100, thread.tension + 0.5), // Slow constant increase
                }))
            );
        }, 100);

        // Stress waves
        const waveInterval = setInterval(() => {
            setThreads(prevThreads => 
                prevThreads.map(thread => ({
                    ...thread,
                    tension: Math.min(100, thread.tension + Math.random() * 15 + 10),
                }))
            );
            onThoughtsChange(prev => prev + "w");
        }, 6000);

        return () => {
            clearInterval(gameInterval);
            clearInterval(waveInterval);
        };
    }, [onThoughtsChange]);

    const relaxThread = (id: number) => {
        setThreads(prevThreads =>
            prevThreads.map(thread =>
                thread.id === id ? { ...thread, tension: Math.max(0, thread.tension - 25) } : thread
            )
        );
        onThoughtsChange(prev => prev + "r");
    };

    const getThreadColor = (tension: number) => {
        if (tension > 80) return "hsl(var(--destructive))"; 
        if (tension > 50) return "#f97316"; // orange-500
        return "hsl(var(--primary))"; 
    };

    const center = { x: (gameAreaRef.current?.clientWidth || 300) / 2, y: (gameAreaRef.current?.clientHeight || 400) / 2 };
    const length = Math.min(center.x, center.y) * 0.8;

    return (
        <div ref={gameAreaRef} className="w-full h-full flex-1 flex flex-col items-center justify-center bg-card rounded-2xl p-4 gap-2 overflow-hidden relative select-none">
            <p className="text-muted-foreground text-sm text-center z-10 absolute top-10">Swipe along the threads to release tension.</p>

            <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div
                    className="w-16 h-16 rounded-full bg-card-foreground/10"
                    animate={{ 
                       scale: 1 + threads.reduce((acc, t) => acc + t.tension, 0) / (threads.length * 100) * 0.5,
                     }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                 />
            </div>

            <svg className="absolute inset-0 w-full h-full" style={{ touchAction: 'none' }}>
                {threads.map(thread => {
                    const tensionRatio = thread.tension / 100;
                    const endX = center.x + Math.cos(thread.angle * Math.PI / 180) * length;
                    const endY = center.y + Math.sin(thread.angle * Math.PI / 180) * length;

                    const controlX = center.x + Math.cos(thread.angle * Math.PI / 180) * length * 0.5;
                    const controlY = center.y + Math.sin(thread.angle * Math.PI / 180) * length * 0.5;
                    
                    const sway = Math.sin(Date.now() / (500 + tensionRatio * 500)) * (tensionRatio * 20);
                    const swayAngle = (thread.angle + 90) * Math.PI / 180;
                    
                    const controlPointX = controlX + Math.cos(swayAngle) * sway;
                    const controlPointY = controlY + Math.sin(swayAngle) * sway;

                    return (
                        <motion.path
                            key={thread.id}
                            d={`M ${center.x} ${center.y} Q ${controlPointX} ${controlPointY}, ${endX} ${endY}`}
                            stroke={getThreadColor(thread.tension)}
                            strokeWidth={5 + tensionRatio * 10}
                            fill="none"
                            onPointerEnter={() => relaxThread(thread.id)}
                            style={{ cursor: 'pointer', filter: `drop-shadow(0 0 ${tensionRatio * 10}px ${getThreadColor(thread.tension)})` }}
                            animate={{
                                stroke: getThreadColor(thread.tension),
                                strokeWidth: 5 + tensionRatio * 10
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    );
                })}
            </svg>
        </div>
    );
};


// --- THOUGHT CONSTELLATIONS GAME (New for Full Mind) ---
const ThoughtConstellationsGame = ({ onThoughtsChange }: { onThoughtsChange: React.Dispatch<React.SetStateAction<string>> }) => {
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const [drawing, setDrawing] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<Star[]>([]);
  const [previewLine, setPreviewLine] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null);

  type Star = {
    id: number;
    x: number;
    y: number;
    label: string;
  };
  
  type Line = {
    from: number;
    to: number;
    id: number;
  };

  const spawnStar = useCallback((): Star => {
    const gameArea = gameAreaRef.current?.getBoundingClientRect();
    const width = gameArea?.width || 340;
    const height = gameArea?.height || 400;
    return {
      id: Date.now() + Math.random(),
      x: Math.random() * (width - 40) + 20,
      y: Math.random() * (height - 40) + 20,
      label: `${Math.floor(Math.random() * 99) + 1}`,
    };
  }, []);

  useEffect(() => {
    // Initial spawn
    const initialStars: Star[] = [];
    for (let i = 0; i < 15; i++) {
      initialStars.push(spawnStar());
    }
    setStars(initialStars);
  }, [spawnStar]);
  
  // Continuous star generation
  useEffect(() => {
    const interval = setInterval(() => {
        setStars(prev => {
            if (prev.length < 20) {
                return [...prev, spawnStar()];
            }
            return prev;
        });
    }, 3000);
    return () => clearInterval(interval);
  }, [spawnStar]);

  const handleStarMouseDown = (star: Star, e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath.find(p => p.id === star.id)) return;
    setDrawing(true);
    setCurrentPath([star]);
    const rect = gameAreaRef.current!.getBoundingClientRect();
    setPreviewLine({ x1: star.x, y1: star.y, x2: e.clientX - rect.left, y2: e.clientY - rect.top });
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!drawing || currentPath.length === 0) return;
    const rect = gameAreaRef.current!.getBoundingClientRect();
    const lastStar = currentPath[currentPath.length - 1];
    setPreviewLine({ x1: lastStar.x, y1: lastStar.y, x2: e.clientX - rect.left, y2: e.clientY - rect.top });
  };

  const handleStarMouseOver = (hoveredStar: Star) => {
    if (!drawing || currentPath.length === 0) return;
    if (currentPath.find(p => p.id === hoveredStar.id)) return;

    const lastStar = currentPath[currentPath.length - 1];
    setLines(prev => [...prev, { from: lastStar.id, to: hoveredStar.id, id: Date.now() + Math.random() }]);
    setCurrentPath(prev => [...prev, hoveredStar]);
  };

  const handleMouseUp = () => {
    if (drawing) {
        if (currentPath.length > 2) { // Finalize constellation
            onThoughtsChange(prev => prev + `C[${currentPath.length}]`);
            
            const pathIds = new Set(currentPath.map(s => s.id));
            const lineIds = new Set(lines.filter(l => pathIds.has(l.from) && pathIds.has(l.to)).map(l => l.id));

            // Add flash effect via state
            setStars(prevStars => prevStars.map(s => pathIds.has(s.id) ? {...s, justCompleted: true} : s));

            setTimeout(() => {
                setStars(prev => prev.filter(s => !pathIds.has(s.id)));
                setLines(prev => prev.filter(l => !lineIds.has(l.id) ));
                
                const newStars = [];
                for(let i=0; i<currentPath.length; i++) {
                    newStars.push(spawnStar());
                }
                setStars(prev => [...prev, ...newStars]);
            }, 300);
        }
    }
    setDrawing(false);
    setCurrentPath([]);
    setPreviewLine(null);
  };

  const getStarById = (id: number) => stars.find(s => s.id === id);


  return (
    <div 
        className="w-full h-full flex-1 flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-4 gap-2 overflow-hidden"
        ref={gameAreaRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
    >
      <p className="text-blue-200/80 text-sm text-center mb-2 z-10">Draw lines between thought-stars to form constellations.</p>
      <div className="relative w-full h-full">
        {/* Render lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {lines.map((line) => {
            const fromStar = getStarById(line.from);
            const toStar = getStarById(line.to);
            if (!fromStar || !toStar) return null;
            return (
              <motion.line
                key={line.id}
                x1={fromStar.x}
                y1={fromStar.y}
                x2={toStar.x}
                y2={toStar.y}
                stroke="rgba(191, 219, 254, 0.7)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            );
          })}
          {previewLine && (
             <line
                x1={previewLine.x1}
                y1={previewLine.y1}
                x2={previewLine.x2}
                y2={previewLine.y2}
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
          )}
        </svg>
        
        {/* Render stars */}
        <AnimatePresence>
          {stars.map(star => (
            <motion.div
              key={star.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
              onMouseDown={(e) => handleStarMouseDown(star, e)}
              onMouseOver={() => handleStarMouseOver(star)}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-crosshair transition-all duration-200 bg-blue-100/80
                ${currentPath.find(p => p.id === star.id) ? 'ring-2 ring-yellow-300' : ''}
              `}
              style={{
                left: star.x - 16,
                top: star.y - 16,
                zIndex: 2,
                boxShadow: '0 0 12px 3px rgba(191, 219, 254, 0.5)'
              }}
            >
                <span className="text-black font-bold text-sm">{star.label}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};


// --- FOG LIFT GAME (Foggy) ---
const FoggyGame = ({ onThoughtsChange }: { onThoughtsChange: React.Dispatch<React.SetStateAction<string>> }) => {
  const [cleared, setCleared] = useState<boolean[][]>(
    Array(5).fill(null).map(() => Array(5).fill(false))
  );
  const [fogOpacity, setFogOpacity] = useState(1);
  const clearedCountRef = React.useRef(0);

  const handleSwipe = (r: number, c: number) => {
    if (cleared[r][c]) return;
    const newCleared = cleared.map(row => [...row]);
    newCleared[r][c] = true;
    setCleared(newCleared);
    clearedCountRef.current += 1;
    onThoughtsChange(prev => prev + ".");

    const totalCleared = clearedCountRef.current;
    const totalCells = 25;
    const newOpacity = Math.max(0.3, 1 - (totalCleared / (totalCells * 2))); // Fog regenerates a bit
    setFogOpacity(newOpacity);

    // After some time, fog can reappear to ensure continuous gameplay
    if (totalCleared > totalCells * 0.75) {
       setTimeout(() => {
            const newClearedGrid = Array(5).fill(null).map(() => Array(5).fill(false));
            setCleared(newClearedGrid);
            clearedCountRef.current = 0;
            setFogOpacity(1);
       }, 2000);
    }
  };

  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center bg-gray-200/30 rounded-2xl p-4 gap-2 relative overflow-hidden">
      <p className="text-muted-foreground text-sm z-10">Swipe to clear the mental fog.</p>
       <div 
        className="absolute inset-0 bg-gradient-to-br from-primary to-secondary z-0"
      />
      <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full aspect-square max-w-sm max-h-sm">
        {cleared.map((row, r) =>
          row.map((isCleared, c) => (
            <motion.div
              key={`${r}-${c}`}
              className="w-full h-full bg-slate-400/80 backdrop-blur-sm transition-opacity duration-700"
              onMouseEnter={() => handleSwipe(r, c)}
              onTouchStart={() => handleSwipe(r, c)}
              animate={{ opacity: isCleared ? 0 : fogOpacity }}
              transition={{ duration: 0.7 }}
            />
          ))
        )}
      </div>
    </div>
  );
};


// --- ENERGY THREAD GAME (Tired) ---
const EnergyThreadGame = ({ onThoughtsChange }: { onThoughtsChange: React.Dispatch<React.SetStateAction<string>> }) => {
    const [nodes, setNodes] = useState<{ id: number, x: number, y: number, color: string }[]>([]);
    const [lines, setLines] = useState<{ from: number, to: number }[]>([]);
    const [selected, setSelected] = useState<number | null>(null);

    const generateNodes = () => {
        const newNodes = [];
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
        for (let i = 0; i < 4; i++) {
            newNodes.push({ id: i * 2, x: 50 + Math.random() * 50, y: 100 + i * 80, color: colors[i] });
            newNodes.push({ id: i * 2 + 1, x: 250 + Math.random() * 50, y: 100 + i * 80, color: colors[i] });
        }
        setNodes(newNodes);
        setLines([]);
    };

    useEffect(() => {
        generateNodes();
    }, []);
    
    useEffect(() => {
        if (nodes.length > 0 && lines.length === nodes.length / 2) {
            onThoughtsChange(prev => prev + "||");
            setTimeout(generateNodes, 1000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lines, nodes.length]);

    const handleNodeClick = (id: number) => {
        if (selected === null) {
            setSelected(id);
        } else {
            const node1 = nodes.find(n => n.id === selected);
            const node2 = nodes.find(n => n.id === id);
            if (node1 && node2 && node1.color === node2.color && !lines.some(l => (l.from === selected && l.to === id) || (l.from === id && l.to === selected))) {
                setLines([...lines, { from: selected, to: id }]);
            }
            setSelected(null);
        }
    };

    return (
        <div className="w-full h-full flex-1 flex flex-col items-center justify-center bg-indigo-100/30 rounded-2xl p-4 gap-2">
            <p className="text-muted-foreground text-sm">Reconnect the energy threads.</p>
            <div className="relative w-full h-full">
                <svg className="absolute w-full h-full">
                    {lines.map((line, i) => {
                        const fromNode = nodes.find(n => n.id === line.from);
                        const toNode = nodes.find(n => n.id === line.to);
                        if (!fromNode || !toNode) return null;
                        return (
                            <motion.line
                                key={i}
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke={fromNode.color}
                                strokeWidth="4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ filter: `drop-shadow(0 0 5px ${fromNode.color})`}}
                            />
                        );
                    })}
                </svg>
                {nodes.map(node => (
                    <motion.div
                        key={node.id}
                        className={`absolute w-8 h-8 rounded-full border-4 cursor-pointer`}
                        style={{
                            left: node.x - 16,
                            top: node.y - 16,
                            borderColor: node.color,
                            boxShadow: `0 0 10px ${node.color}${selected === node.id ? ', 0 0 20px ' + node.color : ''}`,
                            backgroundColor: 'white'
                        }}
                        onClick={() => handleNodeClick(node.id)}
                        whileHover={{ scale: 1.2 }}
                        animate={{ scale: selected === node.id ? 1.3 : 1 }}
                    />
                ))}
            </div>
        </div>
    );
};


// --- MIND ALIGN GAME (Confused) ---
type Tile = { id: number; value: number; };
const MindAlignGame = ({ onThoughtsChange }: { onThoughtsChange: React.Dispatch<React.SetStateAction<string>> }) => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const shuffle = (array: Tile[]) => [...array].sort(() => Math.random() - 0.5);

  const generateLevel = () => {
      setIsCorrect(false);
      const newTiles = Array.from({ length: 4 }, (_, i) => ({ id: i, value: i + 1 }));
      setTiles(shuffle(newTiles));
  };
  
  useEffect(() => {
    generateLevel();
  }, []);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(tiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTiles(items);

    const isSorted = items.every((tile, index) => tile.value === index + 1);
    if (isSorted) {
      setIsCorrect(true);
      onThoughtsChange(prev => prev + "#");
      setTimeout(generateLevel, 1000);
    }
  };
  
  // This game requires react-beautiful-dnd, which is not in the project.
  // We will simulate it with a simpler logic for now.
  const handleTileClick = (clickedIndex: number) => {
     // A simple swap logic for demonstration
     const newTiles = [...tiles];
     if (clickedIndex < newTiles.length -1) {
        [newTiles[clickedIndex], newTiles[clickedIndex+1]] = [newTiles[clickedIndex+1], newTiles[clickedIndex]]
        setTiles(newTiles);

        const isSorted = newTiles.every((tile, index) => tile.value === index + 1);
        if (isSorted) {
            setIsCorrect(true);
            onThoughtsChange(prev => prev + "#");
            setTimeout(generateLevel, 1000);
        }
     }
  }

  return (
    <div className="w-full h-full flex-1 flex flex-col items-center justify-center bg-accent/20 rounded-2xl p-4 gap-4">
      <p className="text-muted-foreground text-sm">Align the fragments to form a clear thought.</p>
       <div className="flex gap-3">
        {tiles.map((tile, index) => (
           <motion.div
            key={tile.id}
            layout
            onClick={() => handleTileClick(index)}
            className={`w-16 h-24 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer shadow-md
                ${isCorrect ? 'bg-green-300' : 'bg-white'}`}
            >
            {tile.value}
            </motion.div>
        ))}
      </div>
      {isCorrect && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-green-600 font-semibold">Aligned!</motion.p>}
    </div>
  );
};


function PlaySession() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mood = searchParams.get('mood');
  const [clearedThoughts, setClearedThoughts] = useState('');

  const handleTimeUp = () => {
    localStorage.setItem('mindspring-thoughts', clearedThoughts);
    router.replace(`/session/result?mood=${mood}`);
  };

  const renderGameForMood = () => {
    switch (mood) {
      case 'Overwhelmed':
        return <WaveSorterGame onThoughtsChange={setClearedThoughts} />;
      case 'Stressed':
        return <TensionThreadsGame onThoughtsChange={setClearedThoughts} />;
      case 'Confused':
        return <MindAlignGame onThoughtsChange={setClearedThoughts} />;
      case 'Foggy':
        return <FoggyGame onThoughtsChange={setClearedThoughts} />;
      case 'Tired':
        return <EnergyThreadGame onThoughtsChange={setClearedThoughts} />;
      case 'Full Mind':
        return <ThoughtConstellationsGame onThoughtsChange={setClearedThoughts} />;
      default:
        // Default to a calming game if mood is not specified
        return <TensionThreadsGame onThoughtsChange={setClearedThoughts} />;
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full h-full p-4 relative">
      <GameTimer onTimeUp={handleTimeUp} />
      {renderGameForMood()}
    </div>
  );
}

export default function SessionPage() {
  return (
    <Suspense fallback={<div>Loading game...</div>}>
      <PlaySession />
    </Suspense>
  );
}

    