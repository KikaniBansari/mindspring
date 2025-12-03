module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/session/play/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SessionPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// --- SHARED TIMER COMPONENT ---
function GameTimer({ onTimeUp }) {
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(180);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }
        const intervalId = setInterval(()=>{
            setTimeLeft((prev)=>prev - 1);
        }, 1000);
        return ()=>clearInterval(intervalId);
    }, [
        timeLeft,
        onTimeUp
    ]);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-4 right-4 bg-background/80 px-4 py-2 rounded-full shadow-md z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-lg font-semibold text-foreground",
            children: [
                String(minutes).padStart(2, '0'),
                ":",
                String(seconds).padStart(2, '0')
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/session/play/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
// --- WAVE SORTER GAME (New for Overwhelmed) ---
const WaveSorterGame = ({ onThoughtsChange })=>{
    const gameAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [waves, setWaves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draggedWave, setDraggedWave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeElapsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const laneColors = [
        "#AEE4FF",
        "#D8C8FF",
        "#FFD1B3",
        "#C9F7D2"
    ];
    const laneMeanings = [
        "Calm",
        "Focus",
        "Let Go",
        "Pause"
    ];
    // Spawn waves based on elapsed time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const getSpawnInterval = ()=>{
            if (timeElapsed.current < 30) return 1200;
            if (timeElapsed.current < 90) return 900;
            if (timeElapsed.current < 150) return 700;
            return 550;
        };
        const spawnInterval = setInterval(()=>{
            const gameArea = gameAreaRef.current?.getBoundingClientRect();
            if (!gameArea) return;
            const newWave = {
                id: Date.now(),
                color: laneColors[Math.floor(Math.random() * laneColors.length)],
                x: gameArea.width / 2,
                y: gameArea.height + 30,
                originalX: gameArea.width / 2,
                originalY: gameArea.height + 30,
                isReturning: false
            };
            setWaves((prev)=>[
                    ...prev,
                    newWave
                ]);
        }, getSpawnInterval());
        const timerInterval = setInterval(()=>{
            timeElapsed.current += 1;
        }, 1000);
        return ()=>{
            clearInterval(spawnInterval);
            clearInterval(timerInterval);
        };
    }, []);
    // Animate waves rising and returning
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const animationInterval = setInterval(()=>{
            setWaves((prev)=>prev.map((wave)=>{
                    if (wave.isReturning) {
                        // Animate back to center
                        const dx = wave.originalX - wave.x;
                        const dy = wave.originalY - wave.y;
                        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                            return {
                                ...wave,
                                isReturning: false,
                                x: wave.originalX,
                                y: wave.originalY - 1
                            };
                        }
                        return {
                            ...wave,
                            x: wave.x + dx * 0.1,
                            y: wave.y + dy * 0.1
                        };
                    }
                    return {
                        ...wave,
                        y: wave.y - 1
                    };
                }).filter((wave)=>wave.y > -50) // Remove waves that have gone off-screen
            );
        }, 30);
        return ()=>clearInterval(animationInterval);
    }, []);
    const handlePointerDown = (waveId)=>{
        setDraggedWave(waveId);
        setWaves((prev)=>prev.map((w)=>w.id === waveId ? {
                    ...w,
                    isReturning: false
                } : w));
    };
    const handlePointerMove = (e)=>{
        if (draggedWave === null) return;
        const gameArea = gameAreaRef.current?.getBoundingClientRect();
        if (!gameArea) return;
        setWaves((prev)=>prev.map((wave)=>wave.id === draggedWave ? {
                    ...wave,
                    x: e.clientX - gameArea.left,
                    y: e.clientY - gameArea.top
                } : wave));
    };
    const handlePointerUp = ()=>{
        if (draggedWave === null) return;
        const wave = waves.find((w)=>w.id === draggedWave);
        const gameArea = gameAreaRef.current?.getBoundingClientRect();
        if (!wave || !gameArea) {
            setDraggedWave(null);
            return;
        }
        ;
        const laneWidth = gameArea.width / laneColors.length;
        const laneIndex = Math.floor(wave.x / laneWidth);
        const waveColorIndex = laneColors.indexOf(wave.color);
        if (laneIndex >= 0 && laneIndex < laneColors.length && laneIndex === waveColorIndex) {
            // Correctly sorted
            onThoughtsChange((prev)=>prev + "S");
            setWaves((prev)=>prev.filter((w)=>w.id !== draggedWave));
        } else {
            // Incorrectly sorted - send it back
            setWaves((prev)=>prev.map((w)=>w.id === draggedWave ? {
                        ...w,
                        isReturning: true
                    } : w));
        }
        setDraggedWave(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gameAreaRef,
        className: "w-full h-full flex-1 flex flex-col bg-gradient-to-b from-[#E0F7FA] to-[#E7D9FF] rounded-2xl p-4 gap-2 overflow-hidden relative select-none",
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerLeave: handlePointerUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex z-0",
                children: laneColors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 border-r border-white/30 last:border-r-0 flex flex-col items-center pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            style: {
                                color: color,
                                textShadow: '0 0 10px #ffffff'
                            },
                            children: laneMeanings[index]
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/play/page.tsx",
                            lineNumber: 161,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: waves.map((wave)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-16 h-16 rounded-full cursor-grab",
                        style: {
                            backgroundColor: wave.color,
                            left: wave.x - 32,
                            top: wave.y - 32,
                            boxShadow: `0 0 20px ${wave.color}, 0 0 5px white inset`,
                            border: '2px solid white'
                        },
                        onPointerDown: ()=>handlePointerDown(wave.id),
                        animate: {
                            scale: draggedWave === wave.id ? 1.2 : 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.5,
                            transition: {
                                duration: 0.3
                            }
                        },
                        whileHover: {
                            scale: 1.1
                        }
                    }, wave.id, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 150,
        columnNumber: 9
    }, this);
};
// --- TENSION THREADS GAME (New for Stressed) ---
const TensionThreadsGame = ({ onThoughtsChange })=>{
    const NUM_THREADS = 7;
    const initialThreads = Array.from({
        length: NUM_THREADS
    }, (_, i)=>({
            id: i,
            tension: Math.random() * 20,
            angle: i / NUM_THREADS * 360
        }));
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialThreads);
    const gameAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Game loop for tension increase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const gameInterval = setInterval(()=>{
            setThreads((prevThreads)=>prevThreads.map((thread)=>({
                        ...thread,
                        tension: Math.min(100, thread.tension + 0.5)
                    })));
        }, 100);
        // Stress waves
        const waveInterval = setInterval(()=>{
            setThreads((prevThreads)=>prevThreads.map((thread)=>({
                        ...thread,
                        tension: Math.min(100, thread.tension + Math.random() * 15 + 10)
                    })));
            onThoughtsChange((prev)=>prev + "w");
        }, 6000);
        return ()=>{
            clearInterval(gameInterval);
            clearInterval(waveInterval);
        };
    }, [
        onThoughtsChange
    ]);
    const relaxThread = (id)=>{
        setThreads((prevThreads)=>prevThreads.map((thread)=>thread.id === id ? {
                    ...thread,
                    tension: Math.max(0, thread.tension - 25)
                } : thread));
        onThoughtsChange((prev)=>prev + "r");
    };
    const getThreadColor = (tension)=>{
        if (tension > 80) return "hsl(var(--destructive))";
        if (tension > 50) return "#f97316"; // orange-500
        return "hsl(var(--primary))";
    };
    const center = {
        x: (gameAreaRef.current?.clientWidth || 300) / 2,
        y: (gameAreaRef.current?.clientHeight || 400) / 2
    };
    const length = Math.min(center.x, center.y) * 0.8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gameAreaRef,
        className: "w-full h-full flex-1 flex flex-col items-center justify-center bg-card rounded-2xl p-4 gap-2 overflow-hidden relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm text-center z-10 absolute top-10",
                children: "Swipe along the threads to release tension."
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-16 h-16 rounded-full bg-card-foreground/10",
                    animate: {
                        scale: 1 + threads.reduce((acc, t)=>acc + t.tension, 0) / (threads.length * 100) * 0.5
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 10
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 256,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full",
                style: {
                    touchAction: 'none'
                },
                children: threads.map((thread)=>{
                    const tensionRatio = thread.tension / 100;
                    const endX = center.x + Math.cos(thread.angle * Math.PI / 180) * length;
                    const endY = center.y + Math.sin(thread.angle * Math.PI / 180) * length;
                    const controlX = center.x + Math.cos(thread.angle * Math.PI / 180) * length * 0.5;
                    const controlY = center.y + Math.sin(thread.angle * Math.PI / 180) * length * 0.5;
                    const sway = Math.sin(Date.now() / (500 + tensionRatio * 500)) * (tensionRatio * 20);
                    const swayAngle = (thread.angle + 90) * Math.PI / 180;
                    const controlPointX = controlX + Math.cos(swayAngle) * sway;
                    const controlPointY = controlY + Math.sin(swayAngle) * sway;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: `M ${center.x} ${center.y} Q ${controlPointX} ${controlPointY}, ${endX} ${endY}`,
                        stroke: getThreadColor(thread.tension),
                        strokeWidth: 5 + tensionRatio * 10,
                        fill: "none",
                        onPointerEnter: ()=>relaxThread(thread.id),
                        style: {
                            cursor: 'pointer',
                            filter: `drop-shadow(0 0 ${tensionRatio * 10}px ${getThreadColor(thread.tension)})`
                        },
                        animate: {
                            stroke: getThreadColor(thread.tension),
                            strokeWidth: 5 + tensionRatio * 10
                        },
                        transition: {
                            duration: 0.2
                        }
                    }, thread.id, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 281,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 252,
        columnNumber: 9
    }, this);
};
// --- THOUGHT CONSTELLATIONS GAME (New for Full Mind) ---
const ThoughtConstellationsGame = ({ onThoughtsChange })=>{
    const gameAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drawing, setDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previewLine, setPreviewLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const spawnStar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const gameArea = gameAreaRef.current?.getBoundingClientRect();
        const width = gameArea?.width || 340;
        const height = gameArea?.height || 400;
        return {
            id: Date.now() + Math.random(),
            x: Math.random() * (width - 40) + 20,
            y: Math.random() * (height - 40) + 20,
            label: `${Math.floor(Math.random() * 99) + 1}`
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial spawn
        const initialStars = [];
        for(let i = 0; i < 15; i++){
            initialStars.push(spawnStar());
        }
        setStars(initialStars);
    }, [
        spawnStar
    ]);
    // Continuous star generation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setStars((prev)=>{
                if (prev.length < 20) {
                    return [
                        ...prev,
                        spawnStar()
                    ];
                }
                return prev;
            });
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        spawnStar
    ]);
    const handleStarMouseDown = (star, e)=>{
        e.preventDefault();
        if (currentPath.find((p)=>p.id === star.id)) return;
        setDrawing(true);
        setCurrentPath([
            star
        ]);
        const rect = gameAreaRef.current.getBoundingClientRect();
        setPreviewLine({
            x1: star.x,
            y1: star.y,
            x2: e.clientX - rect.left,
            y2: e.clientY - rect.top
        });
    };
    const handleMouseMove = (e)=>{
        if (!drawing || currentPath.length === 0) return;
        const rect = gameAreaRef.current.getBoundingClientRect();
        const lastStar = currentPath[currentPath.length - 1];
        setPreviewLine({
            x1: lastStar.x,
            y1: lastStar.y,
            x2: e.clientX - rect.left,
            y2: e.clientY - rect.top
        });
    };
    const handleStarMouseOver = (hoveredStar)=>{
        if (!drawing || currentPath.length === 0) return;
        if (currentPath.find((p)=>p.id === hoveredStar.id)) return;
        const lastStar = currentPath[currentPath.length - 1];
        setLines((prev)=>[
                ...prev,
                {
                    from: lastStar.id,
                    to: hoveredStar.id,
                    id: Date.now() + Math.random()
                }
            ]);
        setCurrentPath((prev)=>[
                ...prev,
                hoveredStar
            ]);
    };
    const handleMouseUp = ()=>{
        if (drawing) {
            if (currentPath.length > 2) {
                onThoughtsChange((prev)=>prev + `C[${currentPath.length}]`);
                const pathIds = new Set(currentPath.map((s)=>s.id));
                const lineIds = new Set(lines.filter((l)=>pathIds.has(l.from) && pathIds.has(l.to)).map((l)=>l.id));
                // Add flash effect via state
                setStars((prevStars)=>prevStars.map((s)=>pathIds.has(s.id) ? {
                            ...s,
                            justCompleted: true
                        } : s));
                setTimeout(()=>{
                    setStars((prev)=>prev.filter((s)=>!pathIds.has(s.id)));
                    setLines((prev)=>prev.filter((l)=>!lineIds.has(l.id)));
                    const newStars = [];
                    for(let i = 0; i < currentPath.length; i++){
                        newStars.push(spawnStar());
                    }
                    setStars((prev)=>[
                            ...prev,
                            ...newStars
                        ]);
                }, 300);
            }
        }
        setDrawing(false);
        setCurrentPath([]);
        setPreviewLine(null);
    };
    const getStarById = (id)=>stars.find((s)=>s.id === id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex-1 flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-4 gap-2 overflow-hidden",
        ref: gameAreaRef,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-blue-200/80 text-sm text-center mb-2 z-10",
                children: "Draw lines between thought-stars to form constellations."
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 w-full h-full",
                        style: {
                            zIndex: 1
                        },
                        children: [
                            lines.map((line)=>{
                                const fromStar = getStarById(line.from);
                                const toStar = getStarById(line.to);
                                if (!fromStar || !toStar) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                    x1: fromStar.x,
                                    y1: fromStar.y,
                                    x2: toStar.x,
                                    y2: toStar.y,
                                    stroke: "rgba(191, 219, 254, 0.7)",
                                    strokeWidth: "2",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    }
                                }, line.id, false, {
                                    fileName: "[project]/src/app/session/play/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this);
                            }),
                            previewLine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: previewLine.x1,
                                y1: previewLine.y1,
                                x2: previewLine.x2,
                                y2: previewLine.y2,
                                stroke: "hsl(var(--accent))",
                                strokeWidth: "2",
                                strokeDasharray: "4 4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/play/page.tsx",
                                lineNumber: 446,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: stars.map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.5
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: {
                                        duration: 0.3
                                    }
                                },
                                onMouseDown: (e)=>handleStarMouseDown(star, e),
                                onMouseOver: ()=>handleStarMouseOver(star),
                                className: `absolute w-8 h-8 rounded-full flex items-center justify-center cursor-crosshair transition-all duration-200 bg-blue-100/80
                ${currentPath.find((p)=>p.id === star.id) ? 'ring-2 ring-yellow-300' : ''}
              `,
                                style: {
                                    left: star.x - 16,
                                    top: star.y - 16,
                                    zIndex: 2,
                                    boxShadow: '0 0 12px 3px rgba(191, 219, 254, 0.5)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-black font-bold text-sm",
                                    children: star.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/session/play/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 17
                                }, this)
                            }, star.id, false, {
                                fileName: "[project]/src/app/session/play/page.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 416,
        columnNumber: 5
    }, this);
};
// --- FOG LIFT GAME (Foggy) ---
const FoggyGame = ({ onThoughtsChange })=>{
    const [cleared, setCleared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array(5).fill(null).map(()=>Array(5).fill(false)));
    const [fogOpacity, setFogOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const clearedCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const handleSwipe = (r, c)=>{
        if (cleared[r][c]) return;
        const newCleared = cleared.map((row)=>[
                ...row
            ]);
        newCleared[r][c] = true;
        setCleared(newCleared);
        clearedCountRef.current += 1;
        onThoughtsChange((prev)=>prev + ".");
        const totalCleared = clearedCountRef.current;
        const totalCells = 25;
        const newOpacity = Math.max(0.3, 1 - totalCleared / (totalCells * 2)); // Fog regenerates a bit
        setFogOpacity(newOpacity);
        // After some time, fog can reappear to ensure continuous gameplay
        if (totalCleared > totalCells * 0.75) {
            setTimeout(()=>{
                const newClearedGrid = Array(5).fill(null).map(()=>Array(5).fill(false));
                setCleared(newClearedGrid);
                clearedCountRef.current = 0;
                setFogOpacity(1);
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex-1 flex flex-col items-center justify-center bg-gray-200/30 rounded-2xl p-4 gap-2 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm z-10",
                children: "Swipe to clear the mental fog."
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-primary to-secondary z-0"
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 526,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 grid-rows-5 gap-1 w-full h-full aspect-square max-w-sm max-h-sm",
                children: cleared.map((row, r)=>row.map((isCleared, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-full h-full bg-slate-400/80 backdrop-blur-sm transition-opacity duration-700",
                            onMouseEnter: ()=>handleSwipe(r, c),
                            onTouchStart: ()=>handleSwipe(r, c),
                            animate: {
                                opacity: isCleared ? 0 : fogOpacity
                            },
                            transition: {
                                duration: 0.7
                            }
                        }, `${r}-${c}`, false, {
                            fileName: "[project]/src/app/session/play/page.tsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this)))
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 524,
        columnNumber: 5
    }, this);
};
// --- ENERGY THREAD GAME (Tired) ---
const EnergyThreadGame = ({ onThoughtsChange })=>{
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const generateNodes = ()=>{
        const newNodes = [];
        const colors = [
            '#FF5733',
            '#33FF57',
            '#3357FF',
            '#F333FF'
        ];
        for(let i = 0; i < 4; i++){
            newNodes.push({
                id: i * 2,
                x: 50 + Math.random() * 50,
                y: 100 + i * 80,
                color: colors[i]
            });
            newNodes.push({
                id: i * 2 + 1,
                x: 250 + Math.random() * 50,
                y: 100 + i * 80,
                color: colors[i]
            });
        }
        setNodes(newNodes);
        setLines([]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        generateNodes();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (nodes.length > 0 && lines.length === nodes.length / 2) {
            onThoughtsChange((prev)=>prev + "||");
            setTimeout(generateNodes, 1000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        lines,
        nodes.length
    ]);
    const handleNodeClick = (id)=>{
        if (selected === null) {
            setSelected(id);
        } else {
            const node1 = nodes.find((n)=>n.id === selected);
            const node2 = nodes.find((n)=>n.id === id);
            if (node1 && node2 && node1.color === node2.color && !lines.some((l)=>l.from === selected && l.to === id || l.from === id && l.to === selected)) {
                setLines([
                    ...lines,
                    {
                        from: selected,
                        to: id
                    }
                ]);
            }
            setSelected(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex-1 flex flex-col items-center justify-center bg-indigo-100/30 rounded-2xl p-4 gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm",
                children: "Reconnect the energy threads."
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 592,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute w-full h-full",
                        children: lines.map((line, i)=>{
                            const fromNode = nodes.find((n)=>n.id === line.from);
                            const toNode = nodes.find((n)=>n.id === line.to);
                            if (!fromNode || !toNode) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                                x1: fromNode.x,
                                y1: fromNode.y,
                                x2: toNode.x,
                                y2: toNode.y,
                                stroke: fromNode.color,
                                strokeWidth: "4",
                                initial: {
                                    pathLength: 0
                                },
                                animate: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 0.5
                                },
                                style: {
                                    filter: `drop-shadow(0 0 5px ${fromNode.color})`
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/session/play/page.tsx",
                                lineNumber: 600,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 594,
                        columnNumber: 17
                    }, this),
                    nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `absolute w-8 h-8 rounded-full border-4 cursor-pointer`,
                            style: {
                                left: node.x - 16,
                                top: node.y - 16,
                                borderColor: node.color,
                                boxShadow: `0 0 10px ${node.color}${selected === node.id ? ', 0 0 20px ' + node.color : ''}`,
                                backgroundColor: 'white'
                            },
                            onClick: ()=>handleNodeClick(node.id),
                            whileHover: {
                                scale: 1.2
                            },
                            animate: {
                                scale: selected === node.id ? 1.3 : 1
                            }
                        }, node.id, false, {
                            fileName: "[project]/src/app/session/play/page.tsx",
                            lineNumber: 617,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 593,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 591,
        columnNumber: 9
    }, this);
};
const MindAlignGame = ({ onThoughtsChange })=>{
    const [tiles, setTiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCorrect, setIsCorrect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shuffle = (array)=>[
            ...array
        ].sort(()=>Math.random() - 0.5);
    const generateLevel = ()=>{
        setIsCorrect(false);
        const newTiles = Array.from({
            length: 4
        }, (_, i)=>({
                id: i,
                value: i + 1
            }));
        setTiles(shuffle(newTiles));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        generateLevel();
    }, []);
    const onDragEnd = (result)=>{
        if (!result.destination) return;
        const items = Array.from(tiles);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTiles(items);
        const isSorted = items.every((tile, index)=>tile.value === index + 1);
        if (isSorted) {
            setIsCorrect(true);
            onThoughtsChange((prev)=>prev + "#");
            setTimeout(generateLevel, 1000);
        }
    };
    // This game requires react-beautiful-dnd, which is not in the project.
    // We will simulate it with a simpler logic for now.
    const handleTileClick = (clickedIndex)=>{
        // A simple swap logic for demonstration
        const newTiles = [
            ...tiles
        ];
        if (clickedIndex < newTiles.length - 1) {
            [newTiles[clickedIndex], newTiles[clickedIndex + 1]] = [
                newTiles[clickedIndex + 1],
                newTiles[clickedIndex]
            ];
            setTiles(newTiles);
            const isSorted = newTiles.every((tile, index)=>tile.value === index + 1);
            if (isSorted) {
                setIsCorrect(true);
                onThoughtsChange((prev)=>prev + "#");
                setTimeout(generateLevel, 1000);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex-1 flex flex-col items-center justify-center bg-accent/20 rounded-2xl p-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-sm",
                children: "Align the fragments to form a clear thought."
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: tiles.map((tile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        onClick: ()=>handleTileClick(index),
                        className: `w-16 h-24 rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer shadow-md
                ${isCorrect ? 'bg-green-300' : 'bg-white'}`,
                        children: tile.value
                    }, tile.id, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 694,
                        columnNumber: 12
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 692,
                columnNumber: 8
            }, this),
            isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "text-green-600 font-semibold",
                children: "Aligned!"
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 705,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 690,
        columnNumber: 5
    }, this);
};
function PlaySession() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const mood = searchParams.get('mood');
    const [clearedThoughts, setClearedThoughts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleTimeUp = ()=>{
        localStorage.setItem('mindspring-thoughts', clearedThoughts);
        router.replace(`/session/result?mood=${mood}`);
    };
    const renderGameForMood = ()=>{
        switch(mood){
            case 'Overwhelmed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveSorterGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 725,
                    columnNumber: 16
                }, this);
            case 'Stressed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TensionThreadsGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 727,
                    columnNumber: 16
                }, this);
            case 'Confused':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MindAlignGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 729,
                    columnNumber: 16
                }, this);
            case 'Foggy':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FoggyGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 731,
                    columnNumber: 16
                }, this);
            case 'Tired':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EnergyThreadGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 733,
                    columnNumber: 16
                }, this);
            case 'Full Mind':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThoughtConstellationsGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 735,
                    columnNumber: 16
                }, this);
            default:
                // Default to a calming game if mood is not specified
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TensionThreadsGame, {
                    onThoughtsChange: setClearedThoughts
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 738,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col w-full h-full p-4 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GameTimer, {
                onTimeUp: handleTimeUp
            }, void 0, false, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 744,
                columnNumber: 7
            }, this),
            renderGameForMood()
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 743,
        columnNumber: 5
    }, this);
}
function SessionPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading game..."
        }, void 0, false, {
            fileName: "[project]/src/app/session/play/page.tsx",
            lineNumber: 752,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaySession, {}, void 0, false, {
            fileName: "[project]/src/app/session/play/page.tsx",
            lineNumber: 753,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 752,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3ac93979._.js.map