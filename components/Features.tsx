"use client";

import {
  BrainCircuit,
  ImageIcon,
  Trophy,
  Smartphone,
  PhoneCall,
  Languages,
  Palette,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

export default function Features() {

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const section = t.features;

  const icons = [
    BrainCircuit,
    ImageIcon,
    Trophy,
    Smartphone,
    PhoneCall,
    Languages,
    Palette,
    Zap,
  ];

  const features = section.items.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (

    <section
      id="features"
      className="relative py-28 px-6 bg-[#050509]"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-extrabold">

            {section.titlePart1}

            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              {section.titleHighlight}
            </span>

          </h2>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto text-xl leading-9">
            {section.description}
          </p>

        </motion.div>

        {/* GRID */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .05,
                  duration: .45,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-7
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
                "
              >

                {/* Glow */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  bg-gradient-to-br
                  from-purple-500/10
                  via-blue-500/10
                  to-cyan-400/10
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-purple-500/20
                    to-cyan-400/20
                    mb-6
                    "
                  >

                    <Icon
                      size={30}
                      className="text-cyan-300 transition-transform group-hover:rotate-6 group-hover:scale-110"
                    />

                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-white/65 leading-8">
                    {feature.description}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}