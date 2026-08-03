"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Gamepad2, Plus } from "lucide-react";

import Logo from "./Logo";
import { languages, translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, changeLanguage } = useLanguage();

  const [open, setOpen] = useState(false);

  const t = translations[language] || translations.en;

  const menu = [
    {
      label: t.nav.menu.features,
      id: "features",
    },
    {
      label: t.nav.menu.ai,
      id: "ai",
    },
    {
      label: t.nav.menu.ivr,
      id: "ivr",
    },
    {
      label: t.nav.menu.demo,
      id: "demo",
    },
    {
      label: t.nav.menu.faq,
      id: "faq",
    },
    {
      label: t.nav.menu.about,
      id: "about",
    },
  ];

  function scrollTo(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
      fixed
      top-5
      left-4
      right-4
      z-50
      mx-auto
      max-w-[1500px]
      min-h-[82px]
      rounded-[28px]
      border
      border-white/15
      bg-[#08080c]/75
      backdrop-blur-2xl
      shadow-[0_25px_80px_rgba(0,0,0,.55)]
      flex
      items-center
      justify-between
      px-6
      "
    >
      <div
        className="
        absolute
        inset-0
        rounded-[28px]
        bg-gradient-to-r
        from-purple-500/10
        via-blue-500/10
        to-cyan-400/10
        pointer-events-none
      "
      />

      <div className="relative z-10 shrink-0">
        <Logo />
      </div>

      <div className="hidden xl:flex items-center gap-8 relative z-10">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="
            relative
            group
            text-[15px]
            font-semibold
            text-white/75
            hover:text-white
            transition
            "
          >
            {item.label}

            <span
              className="
              absolute
              bottom-[-7px]
              right-0
              h-[2px]
              w-0
              bg-gradient-to-r
              from-purple-400
              to-cyan-400
              transition-all
              duration-300
              group-hover:w-full
            "
            />
          </button>
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-full
            text-white
            font-semibold
            hover:bg-white/10
            transition
            "
          >
            🌍

            <span className="hidden md:block">
              {languages.find((x) => x.code === language)?.name}
            </span>

            <ChevronDown size={15} />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: -10,
                }}
                className="
                absolute
                top-12
                right-0
                w-56
                max-h-[360px]
                overflow-y-auto
                rounded-2xl
                border
                border-white/15
                bg-[#09090d]/95
                backdrop-blur-xl
                p-2
                shadow-2xl
                "
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setOpen(false);
                    }}
                    className="
                    w-full
                    text-right
                    rounded-xl
                    px-4
                    py-2.5
                    text-white/80
                    hover:bg-white/10
                    hover:text-white
                    transition
                    "
                  >
                    {lang.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className="
          hidden
          lg:flex
          items-center
          gap-2
          rounded-full
          border
          border-white/20
          bg-white/5
          px-5
          py-3
          text-white
          font-semibold
          hover:bg-white/15
          hover:scale-[1.03]
          transition-all
          "
        >
          <Gamepad2 size={18} />

          {t.nav.join}
        </button>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-gradient-to-r
          from-purple-500
          via-blue-500
          to-cyan-400
          px-5
          py-3
          font-extrabold
          text-white
          shadow-[0_0_40px_rgba(139,92,246,.45)]
          hover:scale-[1.05]
          hover:shadow-[0_0_70px_rgba(34,211,238,.55)]
          transition-all
          "
        >
          <Plus size={18} />

          {t.nav.create}
        </button>
      </div>
    </motion.nav>
  );
}
