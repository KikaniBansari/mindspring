export default function OrbIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-48 h-48 ${className}`}>
      <div className="absolute inset-0 bg-secondary rounded-full opacity-50 blur-2xl animate-pulse"></div>
      <div className="absolute inset-4 bg-primary rounded-full opacity-30 blur-xl animate-pulse delay-500"></div>
      <svg
        className="relative animate-[spin_20s_linear_infinite]"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M 50,5 A 45,45 0 1 1 5,50"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 50,95 A 45,45 0 1 1 95,50"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="4"
          strokeLinecap="round"
        />
         <path
          d="M 50,15 A 35,35 0 1 0 15,50"
          stroke="hsl(var(--secondary))"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
