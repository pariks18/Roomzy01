import React from "react";

export default function About() {
  return (
    <section className="px-8 py-16 bg-white grid md:grid-cols-2 gap-10 items-center">
      {/* Left Side */}
      <div>
        <h2 className="text-green-600 uppercase tracking-widest text-sm font-bold">
          About Us
        </h2>
        <h3 className="mt-2 text-3xl font-semibold text-gray-800 leading-snug">
          Find roommates who actually get you! Match lifestyles, habits, and
          vibes for a stress-free shared living experience.
        </h3>
      </div>

      <div className="text-gray-600">
        <p>
          Trusted proudly by 200+{" "}
          <span className="font-semibold">Indore Students</span>.
        </p>
      </div>
    </section>
  );
}
