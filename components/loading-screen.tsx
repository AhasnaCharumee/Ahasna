export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-background via-background to-background/95 transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Animated loader background */}
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin"
          style={{ animationDuration: "3s" }}
        />

        {/* Middle rotating ring - reverse direction */}
        <div
          className="absolute inset-4 rounded-full border-2 border-transparent border-b-accent border-l-accent animate-spin"
          style={{ animationDuration: "4s", animationDirection: "reverse" }}
        />

        {/* Inner pulsing circle */}
        <div className="absolute inset-8 rounded-full bg-linear-to-r from-primary to-accent opacity-60 animate-pulse" />

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-20 text-center">
        <p className="text-sm font-medium text-foreground/60 animate-pulse">Loading portfolio...</p>
      </div>
    </div>
  )
}
