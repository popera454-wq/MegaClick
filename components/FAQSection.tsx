"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function FAQSection() {

  const [open, setOpen] = useState<number | null>(0);

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const current = t.faq;

  return (

    <section
      id="faq"
      className="
      relative
      py-32
      bg-[#050509]
      overflow-hidden
      "
    >
      {/* Background Video */}

      <div className="absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source
            src="/videos/faq-bg.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#050509]/40" />

      </div>

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-blue-500/10
        blur-[180px]
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-extrabold">
            {current.title}
          </h2>

          <p
            className="
            mt-6
            text-xl
            text-white/70
            leading-9
            whitespace-pre-line
            "
          >
            {current.description}
          </p>

        </motion.div>

        <div className="space-y-5">

        {current.items.map((faq, index) => {

const active = open === index;

return (

  <motion.div
    key={faq.q}
    layout
    className="
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    overflow-hidden
    "
  >

    <button
      onClick={() =>
        setOpen(active ? null : index)
      }
      className="
      w-full
      flex
      items-center
      justify-between
      px-8
      py-6
      text-right
      "
    >

      <h3 className="font-bold text-xl">
        {faq.q}
      </h3>

      <motion.div
        animate={{
          rotate: active ? 180 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <ChevronDown />
      </motion.div>

    </button>

    <AnimatePresence>

      {active && (

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >

          <div
            className="
            px-8
            pb-7
            text-white/70
            leading-8
            text-lg
            "
          >
            {faq.a}
          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </motion.div>

);

})}

</div>

</div>

</section>

);

}