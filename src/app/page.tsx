"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Heart, Coffee, Code, Sparkles, ChevronDown, Flame, MailOpen, Star, Music, History, Zap } from "lucide-react"
import Confetti from "react-confetti"

export default function Home() {
  const [vibe, setVibe] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <main className="bg-[#fffafb] text-slate-800 selection:bg-rose-100 selection:text-rose-600 relative overflow-x-hidden">
      {isLetterOpen && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} colors={['#fb7185', '#f43f5e', '#fda4af']} />}

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-rose-100 rounded-full blur-[100px]" 
        />
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase bg-white shadow-sm text-rose-500 rounded-full border border-rose-50">
            <Flame size={12} className="fill-rose-500" />
            76 Day Streak on TikTok
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter text-slate-900 mb-6">
            Appreciation <span className="text-rose-400 italic font-light">Days.</span>
          </h1>
          <p className="max-w-md mx-auto text-slate-400 leading-relaxed mb-12 text-lg font-light">
            Just a small space to celebrate the chaos, the streaks, and the random chats.
          </p>
          <motion.a 
            href="#stats" 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 text-slate-300"
          >
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto space-y-48 py-20 px-6">
        
        <motion.section id="stats" variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Brain Cells Left", value: "2%", icon: <Zap size={16}/> },
            { label: "Sawit Shared", value: "~13k+", icon: <Sparkles size={16}/> },
            { label: "Last Streak", value: "76d", icon: <Flame size={16}/> },
            { label: "Website Lifespan Left", value: "∞", icon: <Coffee size={16}/> },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white border border-slate-50 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-rose-400 mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.section>

        <motion.section variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-serif mb-10 text-slate-900">Current Vibe</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["very n🧊", "HIDUP JOK-", "bad🙁", "gud"].map((item) => (
              <button
                key={item}
                onClick={() => setVibe(item)}
                className={`px-8 py-4 rounded-3xl text-sm font-medium transition-all duration-300 ${
                  vibe === item ? "bg-rose-500 text-white shadow-xl scale-105" : "bg-white border border-slate-100 text-slate-500 hover:border-rose-200 hover:text-rose-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-slate-900">Core Memories</h2>
            <p className="text-slate-400 mt-2 italic text-sm">"The ones that aren't on Instagram"</p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-100 before:to-transparent">
            {[
              { title: "The First Streak", date: "76 Days Ago", desc: "Where the chaos officially began." },
              { title: "HIDUP JOKOWI", date: "Everyday", desc: "nyawit problem" },
              { title: "Today", date: "Feb 14", desc: "I made this website, coz I kinda bored." },
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 text-slate-400 group-hover:text-rose-500 group-hover:bg-rose-50 transition-colors z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <History size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-[2rem] bg-white border border-slate-50 shadow-sm">
                  <div className="font-bold text-rose-400 text-xs mb-1 uppercase tracking-tighter">{item.date}</div>
                  <div className="text-slate-800 font-medium">{item.title}</div>
                  <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative">
          <div className={`p-12 md:p-20 rounded-[4rem] transition-all duration-700 text-center ${isLetterOpen ? 'bg-white shadow-2xl border border-rose-50' : 'bg-rose-50/30 backdrop-blur-sm border border-white/50'}`}>
            {!isLetterOpen ? (
              <div className="space-y-8">
                <motion.div 
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mx-auto shadow-md text-rose-400"
                >
                  <MailOpen size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-serif text-slate-800 mb-2">A small note for you</h3>
                  <p className="text-slate-400 text-sm">Click to reveal the message</p>
                </div>
                <button 
                  onClick={() => setIsLetterOpen(true)}
                  className="bg-slate-900 text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-rose-500 transition-all hover:shadow-xl active:scale-95"
                >
                  Open Letterbox
                </button>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <span className="text-rose-400 font-serif italic text-xl">Dear, OrgiL</span>
                <p className="mt-6 text-slate-600 leading-relaxed max-w-sm mx-auto text-lg">
                  "Lek gendeng ojok di gendeng gendeng i mbak 😭😭🙏🙏"
                </p>
                <p className="mt-4 text-slate-400 text-sm italic">— Stay sane (or not).</p>
                <div className="mt-10 pt-10 border-t border-rose-50 flex justify-center gap-4 text-rose-200">
                  <Heart size={20} /> <Sparkles size={20} /> <Coffee size={20} />
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        <motion.section variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center space-y-10 pb-20">
          <h2 className="text-3xl font-serif text-slate-900 italic">Rate this friendship?</h2>
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setRating(star)}
                className="transition-all hover:scale-125 active:scale-90"
              >
                <Star 
                  size={40} 
                  className={`transition-all duration-300 ${star <= rating ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]" : "text-slate-100"}`} 
                />
              </button>
            ))}
          </div>
          <div className="h-4">
            <AnimatePresence mode="wait">
              <motion.p 
                key={rating}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold"
              >
                {rating === 0 ? "Be honest" : rating === 5 ? "yey" : "xukup tawu 😭😭😭"}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.section>

      </div>

      <footer className="py-20 border-t border-slate-50 text-center relative z-10">
        <p className="text-[10px] text-slate-300 uppercase tracking-[0.5em] font-bold">
          Made with Next.JS &bull; 2026
        </p>
      </footer>
    </main>
  )
}