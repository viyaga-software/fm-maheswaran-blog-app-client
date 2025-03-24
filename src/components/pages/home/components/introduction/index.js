const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-4 md:py-8">
      {/* Titles */}
      <div className="max-w-2xl">
        <h1 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Elevate Your Chess Knowledge & Strategy
        </h1>
        <p className="mt-6 text-muted-foreground text-lg md:text-xl">
          Explore expert insights, strategies, and stories from the world of professional chess.
        </p>
      </div>

      {/* Decorative Chessboard Design */}
      <div className="hidden md:flex items-center justify-center w-40 h-40 bg-secondary rounded-lg shadow-lg p-4 border border-border">
        <div className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`w-full h-full ${i % 2 === 0 ? 'bg-muted' : 'bg-background'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
