"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, Globe } from "lucide-react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;
  const current = t.hero;
  return (
    <section id="hero">
                  className="relative h-screen w-full overflow-hidden">
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/40 via-[#050509]/45 to-[#050509]" />

      {/* GLOW */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-purple-600/20
        blur-[180px]
        "
      />

      {/* CONTENT */}

      <div
        className="
        relative
        z-20
        max-w-7xl
        mx-auto
        h-full
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="
          text-5xl
          md:text-7xl
          font-extrabold
          leading-tight
          max-w-5xl
          "
        >
          {current.titlePart1}
          <br />

          <span
            className="
            bg-gradient-to-r
            from-purple-400
            via-blue-400
            to-cyan-300
            bg-clip-text
            text-transparent
            "
          >
            {current.titleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="
          mt-8
          max-w-3xl
          text-xl
          text-white/75
          leading-9
          "
        >
          {current.subtitle}
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="
          flex
          flex-wrap
          gap-5
          mt-10
          justify-center
          "
        >
          <button
            className="
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-purple-500
            via-blue-500
            to-cyan-400
            font-bold
            text-lg
            shadow-[0_0_60px_rgba(139,92,246,.5)]
            hover:scale-105
            transition-all
            "
          >
            {current.ctaPrimary}
          </button>

          <button
            className="
            flex
            items-center
            gap-2
            px-8
            py-4
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            hover:bg-white/20
            transition
            "
          >
            <Play size={18} />

            {t.demo.watchVideo}
          </button>
        </motion.div>

        {/* FEATURES */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .55 }}
          className="
          flex
          flex-wrap
          justify-center
          gap-8
          mt-12
          text-white/90
          "
        >
          <div className="flex items-center gap-2">
            ⚡
            <span>{current.bullets[0]}</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles size={18} />

            <span>{current.bullets[1]}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe size={18} />

            <span>{current.bullets[2]}</span>
          </div>
        </motion.div>

        {/* SCROLL */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
          absolute
          bottom-8
          text-white/70
          text-3xl
          "
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}