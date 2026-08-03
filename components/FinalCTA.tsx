"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function FinalCTA() {

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const current = t.final;
  const router = useRouter();

function scrollToDemo() {
  document.getElementById("demo")?.scrollIntoView({
    behavior: "smooth",
  });
}

  const stats = [
    {
      number: "20",
      title: current.stats[0],
    },
    {
      number: "AI",
      title: current.stats[1],
    },
    {
      number: "IVR",
      title: current.stats[2],
    },
  ];

  return (

    <section
      className="
      relative
      overflow-hidden
      py-40
      "
    >

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/final.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/70 via-[#050509]/40 to-[#050509]" />

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[650px]
        w-[650px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/15
        blur-[170px]
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-6xl
        px-6
        text-center
        "
      >

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
          transition={{
            duration: 0.8,
          }}
        >

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-5
            py-2
            text-cyan-300
            font-semibold
            mb-8
            "
          >
            <Sparkles size={18} />

            {current.badge}

          </div>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            {current.title1}

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
              {current.highlight}
            </span>

            <br />

            {current.title2}

          </h2>

          <p
            className="
            mt-8
            text-xl
            text-white/75
            leading-10
            max-w-3xl
            mx-auto
            "
          >
            {current.description}
          </p>
                    {/* Buttons */}

                    <div
            className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-5
            "
          >

              <button
              onClick={() => router.push("/coming-soon")}
              className="
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-blue-500
              to-cyan-400
              px-10
              py-5
              text-xl
              font-extrabold
              shadow-[0_0_70px_rgba(34,211,238,.45)]
              hover:scale-105
              transition-all
              "
            >
              {current.createButton}
            </button>

              <button
              onClick={scrollToDemo}
              className="
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              px-10
              py-5
              text-xl
              font-bold
              hover:bg-white/15
              transition-all
              flex
              items-center
              justify-center
              gap-3
              "
            >
              {current.demoButton}

              <ArrowLeft size={20} />

            </button>

          </div>

          {/* Stats */}

          <div
            className="
            mt-20
            grid
            md:grid-cols-3
            gap-6
            "
          >

            {stats.map((item) => (

              <div
                key={item.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                "
              >

                <div
                  className="
                  text-5xl
                  font-black
                  bg-gradient-to-r
                  from-purple-400
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                  "
                >
                  {item.number}
                </div>

                <div
                  className="
                  mt-3
                  text-lg
                  text-white/70
                  "
                >
                  {item.title}
                </div>

              </div>

            ))}
                      </div>

</motion.div>

</div>

</section>

);

}