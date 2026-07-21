import React from 'react';

const chapters = [
  {
    chapter: "Chapter 01",
    tag: "2018 & Origin",
    title: "An Informal Youth Collective",
    text: "Our story began in 2018 as an informal collective of youth determined to make a tangible difference in the Melghat tribal area of Maharashtra. We started by collaborating with local schools—offering tutoring sessions, distributing learning materials, and working alongside teachers to understand the unique challenges these students faced.",
    color: "#2E528D"
  },
  {
    chapter: "Chapter 02",
    tag: "Expansion Phase",
    title: "Interconnected Education, Health & Livelihoods",
    text: "Recognizing that education, health, and livelihoods are deeply interconnected, we expanded our vision. We partnered with medical professionals to run health camps addressing critical issues like malnutrition, maternal health, and disease prevention. Simultaneously, we launched skill development workshops aimed at creating sustainable income opportunities for youth and adults.",
    color: "#4C9F38"
  },
  {
    chapter: "Chapter 03",
    tag: "Jan 2023 Milestone",
    title: "Registering Anand Jyoti Foundation",
    text: "As our impact grew and we earned the trust of the community, we realized the need to formalize our efforts to ensure scalability. In January 2023, we officially registered as the Anand Jyoti Foundation, marking a new chapter in our mission to serve.",
    color: "#E5243B"
  }
];

export default function Journey() {
  return (
    <section className="bg-[#fcf7f0] py-16 px-6 lg:px-16 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E528D]">
            Melghat Grassroots Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-1">
            Our Journey
          </h2>
        </div>

        <div className="space-y-8">
          {chapters.map((ch) => (
            <div 
              key={ch.chapter}
              className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="shrink-0">
                <span 
                  className="px-3 py-1 text-xs font-bold text-white rounded-md uppercase"
                  style={{ backgroundColor: ch.color }}
                >
                  {ch.chapter}
                </span>
                <span className="block text-xs font-semibold text-stone-600 mt-2">
                  {ch.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {ch.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {ch.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}