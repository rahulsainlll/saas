export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Verson 2.0 is here
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-1 items-center mt-[30px">
            <button className="btn btn-primary">Get started for free</button>
            <button className="btn btn-text">Learn more</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

