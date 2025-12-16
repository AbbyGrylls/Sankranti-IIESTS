export default function Sparkles() {
  return (
    <div className="relative w-full h-4 bg-black z-20 shrink-0 flex items-start justify-center overflow-visible">  
      <div className="absolute top-0 w-full h-[2px] bg-yellow-50 z-30 shadow-[0_0_5px_1px_rgba(255,255,200,0.8)]" />
      <div className="absolute top-[-1px] w-full h-[4px] bg-orange-400 z-20 blur-[2px] opacity-100" />
      <div className="absolute top-[-3px] w-full h-[8px] bg-orange-600 z-10 blur-[6px] opacity-80" />
      <div className="absolute top-[-10px] w-full h-[20px] bg-red-600 z-0 blur-[15px] opacity-30" />
    </div>
  );
}