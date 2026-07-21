import React from 'react';

const mentors = [
  {
    name: "Dr. Manisha Jape",
    role: "Advisory Board Member",
    tag: "Medical & Health",
    bio: "Dedicated medical professional bringing strategic guidance and domain expertise to our health and community initiatives in Melghat.",
    image: "/images/team/manisha-jape.jpg", // Replace with actual image path
    ringColor: "#E5243B" // SDG Red
  },
  {
    name: "Mr. Santosh Dimble",
    role: "Advisory Board Member",
    tag: "Social Work & Welfare",
    bio: "A dedicated social worker who has championed the welfare of the blind and underprivileged in Pune for over a decade.",
    image: "/images/team/santosh-dimble.jpg", // Replace with actual image path
    ringColor: "#2E528D" // Deep Brand Blue
  },
  {
    name: "Dr. Shrikant Kalamkar",
    role: "Advisory Board Member",
    tag: "Agro-Economic Research",
    bio: "Director, Agro Economic Research Centre at Sardar Patel University, Gujarat, guiding sustainable rural economic models.",
    image: "/images/team/shrikant-kalamkar.jpg", // Replace with actual image path
    ringColor: "#4C9F38" // SDG Green
  },
  {
    name: "Mr. Vaijnath Ippar",
    role: "Advisory Board Member",
    tag: "State Awardee Educator",
    bio: "Distinguished educator and recipient of the Government of Maharashtra's ‘Krantijyoti Savitribai Phule State Teacher Award’.",
    image: "/images/team/vaijnath-ippar.jpg", // Replace with actual image path
    ringColor: "#FF3A21" // Warm Orange
  }
];

export default function LeadershipTeam() {
  return (
    <section className="bg-[#fcf7f0] py-16 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* CENTERED HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E528D] block mb-1.5">
            Governance & Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Our Leadership & Advisors
          </h2>
          <div className="w-10 h-0.5 bg-[#2E528D] mx-auto mt-3 rounded-full" />
        </div>

        {/* 4-COLUMN HORIZONTAL ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {mentors.map((person) => (
            <div 
              key={person.name} 
              className="flex flex-col items-center text-center group"
            >
              
              {/* ROUND PHOTO PORTRAIT (~80px / 20 in Tailwind) */}
              <div className="relative mb-4">
                {/* Outer Ring Accent */}
                <div 
                  className="w-[84px] h-[84px] rounded-full p-[2px] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${person.ringColor}, transparent 85%)`
                  }}
                >
                  {/* 80px Photo Frame */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-stone-200 border-2 border-[#fcf7f0] shadow-sm">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=e7e2d7&color=2E528D&size=160`;
                      }}
                    />
                  </div>
                </div>

                {/* Tag Pill below photo */}
                <span 
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-xs whitespace-nowrap"
                  style={{ backgroundColor: person.ringColor }}
                >
                  {person.tag}
                </span>
              </div>

              {/* TEXT DETAILS */}
              <h3 className="text-base font-bold text-stone-900 mt-1 leading-snug">
                {person.name}
              </h3>
              
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                {person.role}
              </span>

              <p className="text-stone-600 text-xs leading-relaxed max-w-xs">
                {person.bio}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}