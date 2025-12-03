import OrbIcon from './OrbIcon';

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full flex-1 animate-in fade-in duration-1000">
      <div className="flex flex-col items-center justify-center gap-8">
        <OrbIcon />
        <div className="text-center">
          <h1 className="text-5xl font-bold text-foreground font-headline tracking-wide">
            MindSpring
          </h1>
          <p className="text-xl italic text-muted-foreground mt-4">
            Clear your mind in 3 minutes
          </p>
        </div>
      </div>
    </div>
  );
}
