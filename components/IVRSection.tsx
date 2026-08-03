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

const cards = [
  {
    icon: PhoneCall,
    title: "שיחת טלפון",
    text: "הצטרפות למשחק באמצעות חיוג.",
  },
  {
    icon: Mic,
    title: "הקראת שאלות",
    text: "שאלות מוקלטות או מוקראות אוטומטית.",
  },
  {
    icon: Hash,
    title: "מקשי הטלפון",
    text: "מענה מהיר באמצעות הספרות.",
  },
  {
    icon: BarChart3,
    title: "זמן אמת",
    text: "כל התוצאות מתעדכנות מיד.",
  },
  {
    icon: Users,
    title: "לכולם",
    text: "מתאים לכל גיל ולכל רמת ידע.",
  },
  {
    icon: Languages,
    title: "רב שפות",
    text: "משחקים במגוון שפות.",
  },
];

export default function IVRSection() {
  return (
    <section id="ivr">
    className="relative py-32 px-6 bg-[#050509] overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold leading-tight">
              מערכת IVR חכמה
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                למשחקים טלפוניים
              </span>
            </h2>

            <p className="mt-8 text-xl text-white/70 leading-9">
              גם בלי אינטרנט וגם בלי אפליקציה.
              המשתתפים פשוט מחייגים, שומעים את השאלות
              ומשתתפים בזמן אמת.
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
                    hover:bg-white/10
                    hover:border-cyan-400/40
                    hover:-translate-y-1
                    transition-all
                    "
                  >
                    <Icon
                      className="text-cyan-300 mb-4"
                      size={28}
                    />

                    <h3 className="font-bold text-lg">
                      {card.title}
                    </h3>

                    <p className="text-white/60 text-sm mt-2 leading-7">
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
              from-cyan-500
              via-blue-500
              to-purple-500
              font-bold
              text-lg
              shadow-[0_0_60px_rgba(34,211,238,.4)]
              hover:scale-105
              transition-all
              "
            >
              🎮 נסו משחק טלפוני
            </button>

          </motion.div>

          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[90px] rounded-full scale-110" />

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          <div className="text-5xl mb-6">☎️</div>

          <p className="text-2xl leading-10 max-w-4xl mx-auto text-white/85">
            כשאין אינטרנט, אין סמארטפון או פשוט רוצים דרך נגישה יותר —
            <br />
            <span className="font-bold text-cyan-300">
              מערכת ה־IVR של MegaClick מאפשרת לכולם להשתתף.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}