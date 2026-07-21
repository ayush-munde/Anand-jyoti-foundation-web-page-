import React from 'react';
import { GraduationCap, HeartPulse, Sparkles, Compass, Eye } from 'lucide-react';
import { RiPlantFill } from 'react-icons/ri';

export function Identity() {
  return (
    <section className="bg-[#fcf7f0] py-16 px-6 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E528D] block mb-2">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Our Identity
          </h2>
          <div className="w-10 h-0.5 bg-[#2E528D] mx-auto mt-3 rounded-full" />
        </div>

        {/* VISION & APPROACH (2-COLUMN SPLIT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* OUR VISION */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#2E528D]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2E528D]/10 text-[#2E528D] flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#2E528D] block mb-1">
                Guiding Light
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Our Vision
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We envision a society where every marginalized and excluded individual is empowered through access to quality healthcare, education, and sustainable livelihood opportunities. We believe true development occurs when every person, regardless of their background, has the fair chance to thrive and realize their full potential.
              </p>
            </div>
            
            <div className="w-full h-1 bg-[#2E528D] rounded-full mt-6 opacity-80" />
          </div>

          {/* OUR APPROACH */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#4C9F38]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4C9F38]/10 text-[#4C9F38] flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#4C9F38] block mb-1">
                How We Work
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Our Approach
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Meaningful change comes from within. Our approach is deeply rooted in participatory development and community engagement. We work hand-in-hand with local leaders, educators, healthcare providers, and stakeholders to identify pressing needs and co-create effective, long-term solutions.
              </p>
            </div>

            <div className="w-full h-1 bg-[#4C9F38] rounded-full mt-6 opacity-80" />
          </div>

        </div>

        {/* OUR MISSION (3 PILLARS) */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 block mb-1">
              Purpose & Focus
            </span>
            <h3 className="text-2xl font-extrabold text-stone-900">
              Our Mission
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              Driving transformative change across three critical pillars in rural Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PILLAR 1: EDUCATION */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#C5192D]/10 text-[#C5192D] flex items-center justify-center mb-4">
                <GraduationCap size={22} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">
                Promote Quality Education
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We foster environments where every child has access to superior educational opportunities. By partnering with local schools, providing supplementary resources, and implementing skill-based learning, we help unlock student potential for a brighter future.
              </p>
            </div>

            {/* PILLAR 2: HEALTHCARE */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#4C9F38]/10 text-[#4C9F38] flex items-center justify-center mb-4">
                <HeartPulse size={22} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">
                Enhance Healthcare Access
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We work to improve community well-being through comprehensive initiatives. By organizing health camps, running awareness programs, and partnering with medical professionals, we bring essential healthcare knowledge and services within reach for all.
              </p>
            </div>

            {/* PILLAR 3: LIVELIHOODS */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#E5243B]/10 text-[#E5243B] flex items-center justify-center mb-4">
                <RiPlantFill size={22} />
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">
                Foster Sustainable Livelihoods
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We empower individuals with the skills required for dignified, sustainable living. Through targeted entrepreneurship and skill development programs, we aim to break the cycle of poverty and promote economic self-reliance.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}