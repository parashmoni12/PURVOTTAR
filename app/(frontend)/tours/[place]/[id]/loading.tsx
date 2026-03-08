export default function Loading() {
    return (
      <div className="min-h-screen bg-black p-8 space-y-8">
        {/* Skeleton for the Hero Tag */}
        <div className="w-40 h-8 bg-white/5 animate-pulse rounded-full mx-auto" />
        
        {/* Skeleton for the Title */}
        <div className="space-y-4">
          <div className="w-3/4 h-16 bg-white/10 animate-pulse rounded-lg mx-auto" />
          <div className="w-1/2 h-16 bg-white/5 animate-pulse rounded-lg mx-auto" />
        </div>
  
        {/* Skeleton for the Image Area */}
        <div className="w-full h-[60vh] bg-white/5 animate-pulse rounded-3xl" />
      </div>
    );
  }