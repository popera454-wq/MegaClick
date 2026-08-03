"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Rocket,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function AboutSection() {

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const current = t.about;
  const router = useRouter();

  const cards = [
    {
      icon: BrainCircuit,
      title: current.cards[0].title,
      text: current.cards[0].text,
    },
    {
      icon: ShieldCheck,
      title: current.cards[1].title,
      text: current.cards[1].text,
    },
    {
      icon: Rocket,
      title: current.cards[2].title,
      text: current.cards[2].text,
    },
    {
      icon: Sparkles,
      title: current.cards[3].title,
      text: current.cards[3].text,
    },
  ];

  return (

    <section
      id="about"
      className="
      relative
      overflow-hidden
      py-32
      bg-[#050509]
      "
    >

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div
        className="
        absolute
        right-0
        top-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-500/10
        blur-[160px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          "
        >

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

            <span
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-4
              py-2
              font-semibold
              text-cyan-300
              "
            >

              <Sparkles size={18} />

              {current.badge}

            </span>

            <h2 className="mt-6 text-5xl font-extrabold">
            {current.title}
            </h2>

            <p
              className="
              mt-8
              text-xl
              leading-10
              text-white/75
              "
            >
              {current.description}
            </p>

            <p
              className="
              mt-6
              text-lg
              leading-9
              text-white/60
              "
            >
              {current.description2}
            </p>

            <p
              className="
              mt-6
              text-lg
              leading-9
              text-white/60
              "
            >
              {current.description3}
            </p>

            <button
  onClick={() => router.push("/coming-soon")}
  className="
  mt-10
  rounded-full
  bg-gradient-to-r
  from-purple-500
  via-blue-500
  to-cyan-400
  px-8
  py-4
  font-bold
  hover:scale-105
  transition-all
  shadow-[0_0_60px_rgba(139,92,246,.4)]
  "
>
  {current.button}
</button>

          </motion.div>

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
            className="
            grid
            sm:grid-cols-2
            gap-6
            "
          >
            {cards.map((card) => {

const Icon = card.icon;

return (

  <div
    key={card.title}
    className="
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-7
    hover:border-cyan-400/30
    transition-all
    "
  >

    <div className="text-cyan-300 mb-5">

      <Icon size={30} />

    </div>

    <h3 className="text-xl font-bold">
      {card.title}
    </h3>

    <p
      className="
      mt-3
      text-white/65
      leading-8
      "
    >
      {card.text}
    </p>

  </div>

);

})}

</motion.div>

</div>

</div>

</section>

);

}