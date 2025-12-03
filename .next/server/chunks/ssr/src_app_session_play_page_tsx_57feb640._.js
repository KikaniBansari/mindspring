module.exports = {

"[project]/src/app/session/play/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OverflowGridGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Improved OverflowGridGame (replace your previous version)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
"use client";
;
;
;
;
const GRID_SIZE = 10;
const DIRECTIONS = [
    "left",
    "right",
    "up",
    "down"
];
function OverflowGridGame({ onThoughtsChange, initialThoughts = "" }) {
    // refs & state
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Array.from({
            length: GRID_SIZE
        }, ()=>Array.from({
                length: GRID_SIZE
            }, ()=>({
                    type: "empty"
                }))));
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(grid);
    gridRef.current = grid;
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [renderTick, setRenderTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // small state to trigger react render
    const particleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSpawnTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const runningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const MAX_PARTICLES = 80;
    const SPAWN_INTERVAL_MS = 800; // spawn rate per available source
    // helpers: create empty grid copy
    const createEmptyGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>Array.from({
            length: GRID_SIZE
        }, ()=>Array.from({
                length: GRID_SIZE
            }, ()=>({
                    type: "empty"
                }))), []);
    // get a random empty cell (safe)
    const getRandomEmptyCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((g)=>{
        const empties = [];
        for(let y = 0; y < GRID_SIZE; y++){
            for(let x = 0; x < GRID_SIZE; x++){
                if (g[y][x].type === "empty") empties.push({
                    x,
                    y
                });
            }
        }
        if (empties.length === 0) return null;
        return empties[Math.floor(Math.random() * empties.length)];
    }, []);
    // add a flow: mark a source and a basin with same id
    const addNewFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((currentGrid)=>{
        const newGrid = currentGrid.map((row)=>row.slice());
        const a = getRandomEmptyCell(newGrid);
        const b = getRandomEmptyCell(newGrid);
        if (!a || !b) return newGrid;
        const id = Date.now() + Math.floor(Math.random() * 1000);
        newGrid[a.y][a.x] = {
            type: "source",
            id
        };
        newGrid[b.y][b.x] = {
            type: "basin",
            id
        };
        return newGrid;
    }, [
        getRandomEmptyCell
    ]);
    // initialize grid with a couple flows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let g = createEmptyGrid();
        g = addNewFlow(g);
        g = addNewFlow(g);
        setGrid(g);
    }, [
        addNewFlow,
        createEmptyGrid
    ]);
    // utility to rotate direction for redirector
    const rotateDirection = (d)=>d ? DIRECTIONS[(DIRECTIONS.indexOf(d) + 1) % DIRECTIONS.length] : "left";
    // API to toggle/rotate redirector on click/touch
    const toggleRedirector = (row, col)=>{
        setGrid((prev)=>{
            const next = prev.map((r)=>r.slice());
            const cell = next[row][col];
            if (cell.type === "empty") {
                next[row][col] = {
                    type: "redirector",
                    direction: "left"
                };
            } else if (cell.type === "redirector") {
                next[row][col].direction = rotateDirection(cell.direction);
            } else if (cell.type === "source" || cell.type === "basin") {
            // maybe provide a small pulse feedback but don't overwrite
            }
            return next;
        });
    };
    // spawn particle at a source cell (computes pixel positions later)
    const spawnParticleFromSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sourceX, sourceY)=>{
        const id = particleId.current++;
        const p = {
            id,
            gx: sourceX,
            gy: sourceY,
            px: 0,
            py: 0,
            dir: "down",
            path: [
                {
                    gx: sourceX,
                    gy: sourceY
                }
            ]
        };
        particlesRef.current.push(p);
    }, []);
    // remove basin flow by id and add a new flow
    const absorbBasinAndReplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((basinId)=>{
        setGrid((g)=>{
            const gcopy = g.map((row)=>row.map((c)=>({
                        ...c
                    })));
            for(let y = 0; y < GRID_SIZE; y++){
                for(let x = 0; x < GRID_SIZE; x++){
                    if (gcopy[y][x].id === basinId) gcopy[y][x] = {
                        type: "empty"
                    };
                }
            }
            const withNew = addNewFlow(gcopy);
            return withNew;
        });
        // nudge thoughts string (safe)
        onThoughtsChange((prev)=>prev + ".");
    }, [
        addNewFlow,
        onThoughtsChange
    ]);
    // compute pixel position from grid coords
    const gridCellRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = containerRef.current;
        if (!el) return {
            cellW: 32,
            cellH: 32,
            left: 0,
            top: 0
        };
        const rect = el.getBoundingClientRect();
        const cellW = rect.width / GRID_SIZE;
        const cellH = rect.height / GRID_SIZE;
        return {
            cellW,
            cellH,
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        };
    }, []);
    // main loop via requestAnimationFrame
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        runningRef.current = true;
        lastSpawnTimeRef.current = performance.now();
        const loop = (now)=>{
            if (!runningRef.current) return;
            // spawn logic: spawn probabilistically based on number of sources and spawn interval
            const cellRect = gridCellRect();
            const currentGrid = gridRef.current;
            const sources = currentGrid.flatMap((row, y)=>row.map((cell, x)=>({
                        ...cell,
                        x,
                        y
                    })).filter((c)=>c.type === "source"));
            // spawn if under MAX_PARTICLES and spawn interval passed
            if (now - lastSpawnTimeRef.current > SPAWN_INTERVAL_MS && particlesRef.current.length < MAX_PARTICLES) {
                lastSpawnTimeRef.current = now;
                if (sources.length > 0) {
                    const src = sources[Math.floor(Math.random() * sources.length)];
                    spawnParticleFromSource(src.x, src.y);
                }
            }
            // move particles one step toward their current direction
            const newParticles = [];
            for (const p of particlesRef.current){
                let nextX = p.gx, nextY = p.gy, nextDir = p.dir;
                if (p.dir === "up") nextY -= 1;
                if (p.dir === "down") nextY += 1;
                if (p.dir === "left") nextX -= 1;
                if (p.dir === "right") nextX += 1;
                // out of bounds -> drop
                if (nextX < 0 || nextX >= GRID_SIZE || nextY < 0 || nextY >= GRID_SIZE) {
                    continue;
                }
                const nextCell = currentGrid[nextY][nextX];
                // if basin, absorb
                if (nextCell.type === "basin") {
                    const basinId = nextCell.id;
                    absorbBasinAndReplace(basinId);
                    continue; // particle removed
                }
                // if redirector exists, update direction
                if (nextCell.type === "redirector" && nextCell.direction) {
                    nextDir = nextCell.direction;
                }
                // prevent infinite long path
                if (p.path.length > 30) {
                    continue;
                }
                const updated = {
                    ...p,
                    gx: nextX,
                    gy: nextY,
                    dir: nextDir,
                    path: [
                        ...p.path,
                        {
                            gx: nextX,
                            gy: nextY
                        }
                    ]
                };
                // compute pixel positions (center of cell)
                const px = nextX * cellRect.cellW + cellRect.cellW / 2 - 4; // -4 to center marker
                const py = nextY * cellRect.cellH + cellRect.cellH / 2 - 4;
                updated.px = px;
                updated.py = py;
                newParticles.push(updated);
            }
            // replace particle list
            particlesRef.current = newParticles;
            // trigger a react re-render occasionally, not every frame (throttle)
            setRenderTick((t)=>(t + 1) % 6);
            animationFrameRef.current = requestAnimationFrame(loop);
        };
        animationFrameRef.current = requestAnimationFrame(loop);
        return ()=>{
            runningRef.current = false;
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        gridCellRect,
        spawnParticleFromSource,
        absorbBasinAndReplace
    ]);
    // small helper to reset the grid & particles
    const resetGame = ()=>{
        particlesRef.current = [];
        particleId.current = 1;
        const g = createEmptyGrid();
        const withFlows = addNewFlow(addNewFlow(g));
        setGrid(withFlows);
    };
    // render redirector arrow
    const renderRedirector = (dir)=>{
        const className = "text-green-600 transition-transform w-full h-full";
        switch(dir){
            case "up":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                    className: className
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 273,
                    columnNumber: 16
                }, this);
            case "right":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: className
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 275,
                    columnNumber: 16
                }, this);
            case "down":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                    className: className
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 277,
                    columnNumber: 16
                }, this);
            case "left":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                    className: className
                }, void 0, false, {
                    fileName: "[project]/src/app/session/play/page.tsx",
                    lineNumber: 279,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    // compute cell size style for container responsiveness
    const [cellCssSize, setCellCssSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("32px");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const update = ()=>{
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const size = Math.max(24, Math.min(48, Math.floor(rect.width / GRID_SIZE)));
            setCellCssSize(`${size}px`);
        };
        update();
        window.addEventListener("resize", update);
        return ()=>window.removeEventListener("resize", update);
    }, []);
    // transform particlesRef.current into an array for rendering
    const particlesToRender = particlesRef.current.slice();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex-1 flex flex-col items-center justify-center bg-green-100/30 rounded-2xl p-4 gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Channel the overflowing thoughts into basins. Tap squares to place/rotate redirectors."
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetGame,
                        className: "ml-2 px-3 py-1 bg-white/60 rounded shadow text-sm text-foreground",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative",
                style: {
                    width: `calc(${GRID_SIZE} * ${cellCssSize})`,
                    height: `calc(${GRID_SIZE} * ${cellCssSize})`
                },
                // touch handler for mobile (calculate cell from touch coords)
                onTouchStart: (e)=>{
                    const touch = e.touches[0];
                    if (!containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const x = Math.floor((touch.clientX - rect.left) / rect.width * GRID_SIZE);
                    const y = Math.floor((touch.clientY - rect.top) / rect.height * GRID_SIZE);
                    if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) toggleRedirector(y, x);
                },
                children: [
                    grid.map((row, y)=>row.map((cell, x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>toggleRedirector(y, x),
                                style: {
                                    top: `calc(${y} * ${cellCssSize})`,
                                    left: `calc(${x} * ${cellCssSize})`,
                                    width: cellCssSize,
                                    height: cellCssSize
                                },
                                className: "absolute flex items-center justify-center border border-green-300/30 cursor-pointer select-none",
                                children: [
                                    cell.type === "source" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3/4 h-3/4 rounded-full bg-green-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/session/play/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 42
                                    }, this),
                                    cell.type === "basin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3/4 h-3/4 rounded-full border-4 border-green-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/session/play/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 41
                                    }, this),
                                    cell.type === "redirector" && cell.direction && renderRedirector(cell.direction)
                                ]
                            }, `${y}-${x}-${cell.id || ""}`, true, {
                                fileName: "[project]/src/app/session/play/page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: particlesToRender.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.5,
                                    left: p.px,
                                    top: p.py
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    left: p.px,
                                    top: p.py
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0
                                },
                                transition: {
                                    duration: 0.12,
                                    ease: "linear"
                                },
                                style: {
                                    position: "absolute",
                                    width: 8,
                                    height: 8,
                                    borderRadius: 999,
                                    background: "#86efac",
                                    left: p.px,
                                    top: p.py,
                                    transform: "translate(-50%,-50%)",
                                    boxShadow: "0 0 6px rgba(134,239,172,0.7)"
                                }
                            }, p.id, false, {
                                fileName: "[project]/src/app/session/play/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/play/page.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/play/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/play/page.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_session_play_page_tsx_57feb640._.js.map