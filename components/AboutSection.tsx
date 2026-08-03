"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, ShieldCheck, BrainCircuit } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-[#050509]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300 font-semibold">
              <Sparkles size={18} />
              נעים להכיר
            </span>

            <h2 className="mt-6 text-5xl font-extrabold">
              MegaClick
            </h2>

            <p className="mt-8 text-xl leading-10 text-white/75">
              MegaClick היא פלטפורמה ליצירת משחקים אינטראקטיביים בזמן אמת,
              המאפשרת לכל אחד ליצור חוויית משחק מהנה במהירות ובקלות.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/60">
              המערכת משלבת בינה מלאכותית, מערכת IVR, תמיכה ב־20 שפות,
              התאמה לכל מכשיר ועדכונים בזמן אמת כדי שכל אירוע,
              שיעור או כנס יהפכו לחוויה שאנשים זוכרים.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/60">
              בין אם אתם מורים, מרצים, בעלי עסקים, מארגני אירועים
              או פשוט רוצים ליצור משחק מהנה —
              MegaClick נבנתה כדי להפוך את התהליך לפשוט,
              מהיר ונגיש לכולם.
            </p>

            <button
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
              🚀 התחילו ליצור משחק
            </button>

          </motion.div>

          {/* FEATURES */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {[
              {
                icon: <BrainCircuit size={30} />,
                title: "AI מתקדם",
                text: "יוצר משחקים ושאלות תוך שניות."
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "אמין ויציב",
                text: "מתאים לאירועים, בתי ספר ועסקים."
              },
              {
                icon: <Rocket size={30} />,
                title: "מהיר במיוחד",
                text: "משחק חדש בתוך דקות."
              },
              {
                icon: <Sparkles size={30} />,
                title: "חוויה מודרנית",
                text: "עיצוב מרשים וחוויית משתמש מתקדמת."
              }
            ].map((card) => (

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
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-white/65 leading-8">
                  {card.text}
                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}