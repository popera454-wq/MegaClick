"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "האם השימוש ב־MegaClick באמת בחינם?",
    a: "כן. כל הכלים המרכזיים זמינים ללא תשלום."
  },
  {
    q: "האם צריך להתקין אפליקציה?",
    a: "לא. המשתתפים נכנסים באמצעות קישור או קוד QR ישירות מהדפדפן."
  },
  {
    q: "כמה משתתפים יכולים לשחק יחד?",
    a: "המערכת תומכת במספר רב של משתתפים בו־זמנית."
  },
  {
    q: "באילו מכשירים אפשר לשחק?",
    a: "בטלפון, בטאבלט ובמחשב."
  },
  {
    q: "האם אפשר ליצור משחק בעזרת AI?",
    a: "כן. מחולל ה־AI מסייע ביצירת משחקים תוך שניות."
  },
  {
    q: "האם אפשר להוסיף תמונות וסרטונים?",
    a: "כן. ניתן לשלב מדיה בכל שאלה."
  },
  {
    q: "האם המערכת תומכת במספר שפות?",
    a: "כן. MegaClick זמינה ב־20 שפות."
  },
  {
    q: "איך מצטרפים למשחק?",
    a: "באמצעות קישור, קוד QR או מערכת IVR."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
    className="absolute inset-0 overflow-hidden">

    <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-20"
    >
        <source
            src="/videos/faq-bg.mp4"
            type="video/mp4"
        />
    </video>

    <div className="absolute inset-0 bg-[#050509]/90" />

      {/* Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold">
            כל מה שרציתם לדעת
          </h2>

          <p className="mt-6 text-xl text-white/70 leading-9">
            ריכזנו את השאלות הנפוצות ביותר.
            <br />
            אם לא מצאתם תשובה, נשמח לעזור.
          </p>

        </motion.div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {

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
                      rotate: active ? 180 : 0
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
                        opacity: 0
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
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