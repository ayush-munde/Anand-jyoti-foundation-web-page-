import React, { useState } from 'react';
import { Phone, Mail, Heart, Send, ExternalLink } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export function Footer() {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFeedback({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#1f2937] text-stone-300 font-sans py-6 px-4 lg:px-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto space-y-4">
        
        {/* MAIN ROW: INFO (LEFT) & COMPACT FORM (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT COLUMN (LOGO, DONATE & CONTACT) */}
          <div className="lg:col-span-7 space-y-3">
            
            {/* Logo & Headline */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#fcf7f0] flex items-center justify-center font-black text-[#2E528D] text-sm shrink-0">
                AJ
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight leading-none">
                  ANAND JYOTI FOUNDATION
                </h3>
                <p className="text-[10px] text-pink-400 font-bold uppercase tracking-wider mt-0.5">
                  Together, Let's Help Each Other
                </p>
              </div>
            </div>

            {/* Compact Donation Line with 80G */}
            <div className="flex flex-wrap items-center gap-3 bg-stone-800/80 px-3.5 py-2 rounded-xl border border-stone-700/60 w-fit text-xs">
              <span className="text-stone-300 text-[11px]">
                Support rural Melghat • <strong className="text-emerald-400">80G Tax Benefit</strong>
              </span>
              <a
                href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5358024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-[11px] font-bold transition-all"
              >
                <Heart size={12} className="fill-white" />
                Donate
                <ExternalLink size={10} />
              </a>
            </div>

            {/* Quick Contact & Socials */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Phone size={12} className="text-pink-500" />
                +91 8275440011
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={12} className="text-pink-500" />
                contact@anandjyoti.org
              </span>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-auto lg:ml-0">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaFacebookF size={12} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaInstagram size={13} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaLinkedinIn size={12} /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaYoutube size={13} /></a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (TIGHT FEEDBACK FORM) */}
          <div className="lg:col-span-5 bg-stone-800/50 p-3.5 rounded-2xl border border-stone-700/60">
            <h4 className="text-xs font-bold text-white mb-2">
              Send Feedback / Inquiry
            </h4>

            {submitted ? (
              <div className="text-emerald-400 text-xs py-2 text-center font-semibold">
                ✓ Message received! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={feedback.name}
                    onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                    className="bg-stone-900 border border-stone-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-pink-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={feedback.email}
                    onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                    className="bg-stone-900 border border-stone-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Message..."
                    value={feedback.message}
                    onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                    className="flex-1 bg-stone-900 border border-stone-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-pink-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-[#2E528D] hover:bg-[#254273] text-white text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    <Send size={11} />
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-3 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] text-stone-500">
          <p>© {new Date().getFullYear()} Anand Jyoti Foundation.</p>
          <div className="flex items-center gap-2 text-stone-400">
            <a href="#privacy" className="hover:text-stone-200">Privacy Policy</a>
            <span>•</span>
            <a href="#refund" className="hover:text-stone-200">Refund Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-stone-200">Terms</a>
            <span>•</span>
            <a href="#disclaimer" className="hover:text-stone-200">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}