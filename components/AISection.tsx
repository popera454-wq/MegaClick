"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Languages,
  BrainCircuit,
  ImageIcon,
  Zap,
} from "lucide-react";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

export default function AISection() {

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const current = t.ai;

  const cards = [
    {
      icon: Sparkles,
      title: current.cards[0].title,
      text: current.cards[0].text,
    },
    {
      icon: FileText,
      title: current.cards[1].title,
      text: current.cards[1].text,
    },
    {
      icon: Languages,
      title: current.cards[2].title,
      text: current.cards[2].text,
    },
    {
      icon: BrainCircuit,
      title: current.cards[3].title,
      text: current.cards[3].text,
    },
    {
      icon: ImageIcon,
      title: current.cards[4].title,
      text: current.cards[4].text,
    },
    {
      icon: Zap,
      title: current.cards[5].title,
      text: current.cards[5].text,
    },
  ];

  return (

    <section
      id="ai"
      className="relative overflow-hidden py-32"
    >

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/ai-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#050509]/80" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/70 via-[#050509]/75 to-[#050509]" />

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-purple-600/20
        blur-[180px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div
              className="
              absolute
              inset-0
              bg-purple-500/20
              blur-[90px]
              rounded-full
              scale-110
              "
            />

            <div
              className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_40px_80px_rgba(0,0,0,.5)]
              "
            >

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-square object-cover"
              >
                <source
                  src="/videos/ai-demo.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-extrabold leading-tight">

              {current.title}

              <span
                className="
                block
                bg-gradient-to-r
                from-purple-400
                via-blue-400
                to-cyan-300
                bg-clip-text
                text-transparent
                "
              >
                {current.brand}
              </span>

            </h2>

            <p
              className="
              mt-8
              text-xl
              text-white/75
              leading-9
              "
            >
              {current.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
            {cards.map((card) => {

const Icon = card.icon;

return (

  <div
    key={card.title}
    className="
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-5
    hover:border-cyan-400/40
    hover:bg-white/10
    hover:-translate-y-1
    transition-all
    duration-300
    "
  >

    <Icon
      size={28}
      className="text-cyan-300 mb-4"
    />

    <h3
      className="
      font-bold
      text-lg
      "
    >
      {card.title}
    </h3>

    <p
      className="
      text-white/60
      mt-2
      text-sm
      leading-7
      "
    >
      {card.text}
    </p>

  </div>

);

})}

</div>

<button
className="
mt-10
px-8
py-4
rounded-full
bg-gradient-to-r
from-purple-500
via-blue-500
to-cyan-400
font-bold
text-lg
shadow-[0_0_60px_rgba(139,92,246,.45)]
hover:scale-105
hover:shadow-[0_0_80px_rgba(34,211,238,.55)]
transition-all
"
>
🚀 {current.button}
</button>

</motion.div>

</div>

</div>

</section>

);

}