import React from "react";

export default function Hero() {
  return (
    <header
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Smart matches, happy homes – discover your{" "}
          <span className="text-green-400"> perfect roommate </span> <br />
          today.
        </h1>
        <button className="mt-6 px-6 py-3 bg-green-400 text-white rounded-lg font-medium hover:bg-green-500 transition">
          Give it a try →
        </button>
      </div>
    </header>
  );
}
