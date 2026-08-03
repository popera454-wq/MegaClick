"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Mic,
  Hash,
  BarChart3,
  Users,
  Languages,
} from "lucide-react";

import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function IVRSection() {

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const current = t.ivr;

  const cards = [
    {
      icon: PhoneCall,
      title: current.cards[0].title,
      text: current.cards[0].text,
    },
    {
      icon: Mic,
      title: current.cards[1].title,
      text: current.cards[1].text,
    },
    {
      icon: Hash,
      title: current.cards[2].title,
      text: current.cards[2].text,
    },
    {
      icon: BarChart3,
      title: current.cards[3].title,
      text: current.cards[3].text,
    },
    {
      icon: Users,
      title: current.cards[4].title,
      text: current.cards[4].text,
    },
    {
      icon: Languages,
      title: current.cards[5].title,
      text: current.cards[5].text,
    },
  ];

  return (

    <section
      id="ivr"
      className="
      relative
      overflow-hidden
      py-32
      px-6
      bg-[#050509]
      "
    >

      <div
        className="
        absolute
        right-0
        top-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      <div className="max-w-7xl mx-auto">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >

          {/* TEXT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <h2 className="text-5xl font-extrabold leading-tight">

              {current.title}

              <span
                className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-purple-400
                bg-clip-text
                text-transparent
                "
              >
                {current.highlight}
              </span>

            </h2>

            <p
              className="
              mt-8
              text-xl
              text-white/70
              leading-9
              "
            >
              {current.description}
            </p>

            <div
  className="
  grid
  grid-cols-2
  gap-4
  mt-10
  "
>

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
        hover:bg-white/10
        hover:border-cyan-400/40
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
          text-sm
          mt-2
          leading-7
          "
        >
          {card.text}
        </p>

      </div>

    );

  })}

</div>


</motion.div>

{/* VIDEO */}

<motion.div
initial={{
opacity: 0,
x: -40,
}}
whileInView={{
opacity: 1,
x: 0,
}}
viewport={{
once: true,
}}
className="relative"
>

<div
className="
absolute
inset-0
bg-cyan-500/20
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
shadow-[0_40px_80px_rgba(0,0,0,.45)]
"
>

<video
autoPlay
muted
loop
playsInline
className="w-full aspect-video object-cover"
>

<source
  src="/videos/ivr.mp4"
  type="video/mp4"
/>

</video>

</div>

</motion.div>

</div>
        {/* Bottom Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-24
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-r
          from-white/5
          to-white/10
          backdrop-blur-xl
          p-10
          text-center
          "
        >

          <div
            className="
            text-5xl
            mb-6
            "
          >
            ☎️
          </div>

          <p
            className="
            text-2xl
            leading-10
            max-w-4xl
            mx-auto
            text-white/85
            "
          >

            {current.bottom.title}

            <br />

            <span
              className="
              font-bold
              text-cyan-300
              "
            >
              {current.bottom.highlight}
            </span>

          </p>

        </motion.div>

      </div>

    </section>

  );

}