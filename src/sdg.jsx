import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake,  // SDG 1 - Poverty / Livelihood
  HeartPulse,      // SDG 3 - Health & Well-being
  GraduationCap,   // SDG 4 - Quality Education
  Scale,           // SDG 5 - Gender Equality
  Briefcase,       // SDG 8 - Decent Work
  Users            // SDG 10 - Reduced Inequalities
} from 'lucide-react';

const sdgData = [
  {
    id: 1,
    goal: "SDG 1: No Poverty",
    title: "Project Jivika",
    subTitle: "Economic Self-Sufficiency",
    description: "Empowering tribal families through sustainable livelihood models and skill development, breaking the cycle of rural poverty in Melghat.",
    color: "#E5243B", // Red
    icon: HeartHandshake
  },
  {
    id: 3,
    goal: "SDG 3: Good Health & Well-being",
    title: "Project Sehat",
    description: "Enhancing healthcare access, preventive care, and adolescent nutritional awareness for tribal children in remote villages.",
    color: "#4C9F38", // Green
    icon: HeartPulse
  },
  {
    id: 4,
    goal: "SDG 4: Quality Education",
    title: "Project Padhai",
    description: "Fostering lifelong learning, digital literacy, and financial knowledge through interactive sessions and VR tools for rural students.",
    color: "#C5192D", // Deep Red
    icon: GraduationCap
  },
  {
    id: 5,
    goal: "SDG 5: Gender Equality",
    title: "Equal Rights & Opportunity",
    description: "Ensuring tribal young women have equal access to educational resources, economic tools, and leadership mentoring.",
    color: "#FF3A21", // Orange-Red
    icon: Scale
  },
  {
    id: 8,
    goal: "SDG 8: Decent Work & Economic Growth",
    title: "Skill Development",
    description: "Promoting productive employment and practical vocational training tailored to regional economic opportunities.",
    color: "#A21942", // Maroon
    icon: Briefcase
  },
  {
    id: 10,
    goal: "SDG 10: Reduced Inequalities",
    title: "Inclusive Outreach",
    description: "Serving marginalized tribal communities in Melghat so no child or family is left behind.",
    color: "#DD1367", // Pink
    icon: Users
  }
];

export default function SdgImpactSection() {
  const [activeSdg, setActiveSdg] = useState(sdgData[0]);

  return (
    <section className="bg-[#fcf7f0] py-16 px-6 lg:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* CENTERED HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-stone-200/70 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Melghat Region Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
            Our Commitment to the SDGs
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg leading-relaxed">
            Our interventions are intentionally aligned with the United Nations Sustainable Development Goals to ensure holistic progress for tribal youth.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: FIXED / STICKY FEATURED CARD */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-10">
            <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-md relative overflow-hidden transition-all duration-300">
              
              {/* WIDE GRADIENT BACKGROUND ACCENT */}
              <div 
                className="absolute -top-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-25 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: activeSdg.color }}
              />
              <div 
                className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: activeSdg.color }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSdg.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10"
                >
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-colors duration-300"
                      style={{ backgroundColor: activeSdg.color }}
                    >
                      {React.createElement(activeSdg.icon, { size: 28 })}
                    </div>

                    <span 
                      className="px-3 py-1 text-xs font-bold text-white rounded-full tracking-wide shadow-sm"
                      style={{ backgroundColor: activeSdg.color }}
                    >
                      Goal #{activeSdg.id}
                    </span>
                  </div>

                  {/* Goal Tag */}
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1">
                    {activeSdg.goal}
                  </span>

                  {/* Program Title */}
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-3 leading-snug">
                    {activeSdg.title}
                  </h3>

                  {/* Program Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {activeSdg.description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* RIGHT COLUMN: CARDS THAT SCROLL UP */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {sdgData.map((sdg) => {
              const isActive = sdg.id === activeSdg.id;
              const IconComponent = sdg.icon;

              return (
                <div
                  key={sdg.id}
                  onMouseEnter={() => setActiveSdg(sdg)}
                  onClick={() => setActiveSdg(sdg)}
                  className={`group cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-white border-stone-300 shadow-lg translate-x-2'
                      : 'bg-white/60 hover:bg-white border-stone-200/70 hover:border-stone-300'
                  }`}
                >
                  {/* WIDE CARD GRADIENT OVERLAY */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                      isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${sdg.color} 0%, transparent 80%)`
                    }}
                  />

                  <div className="flex items-start gap-5 relative z-10">
                    
                    {/* SDG Icon Badge */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{ 
                        backgroundColor: isActive ? sdg.color : `${sdg.color}18`,
                        color: isActive ? '#ffffff' : sdg.color 
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span 
                          className="text-xs font-bold tracking-wide uppercase"
                          style={{ color: sdg.color }}
                        >
                          {sdg.goal}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-stone-900 group-hover:text-black">
                        {sdg.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed line-clamp-2">
                        {sdg.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}