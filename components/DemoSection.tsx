"use client";

import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import {
  Smartphone,
  Zap,
  Gamepad2,
  ExternalLink,
} from "lucide-react";

export default function DemoSection() {
  return (
    <section id="demo">
      className="relative overflow-hidden py-32 bg-[#050509]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050509] via-[#09090f] to-[#050509]" />

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold">
            התנסו ב־
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              MegaClick
            </span>
            {" "}כבר עכשיו
          </h2>

          <p className="mt-6 text-xl text-white/70 max-w-3xl mx-auto leading-9">
            אל תסתפקו בתמונות. הצטרפו למשחק לדוגמה וחוו את MegaClick בדיוק כמו המשתתפים שלכם.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source
                  src="/videos/demo.mp4"
                  type="video/mp4"
                />
              </video>

            </div>
          </motion.div>

          {/* DEMO CARD */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              shadow-[0_30px_80px_rgba(0,0,0,.4)]
              "
            >

              <div className="flex items-center justify-between mb-8">

                <span className="font-bold text-2xl">
                  🎮 משחק הדגמה חי
                </span>

                <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-bold animate-pulse">
                  ● LIVE
                </span>

              </div>

              <div className="flex justify-center mb-8">

                <div className="bg-white rounded-2xl p-4">

                  <QRCode
                    value="https://megaclick.co.il/demo"
                    size={190}
                  />

                </div>

              </div>

              <a
                href="/demo"
                className="
                w-full
                flex
                justify-center
                items-center
                gap-2
                rounded-full
                py-4
                bg-gradient-to-r
                from-purple-500
                via-blue-500
                to-cyan-400
                font-bold
                text-lg
                hover:scale-105
                transition-all
                "
              >
                🎮 הצטרפו למשחק עכשיו
              </a>

              <p className="text-center mt-6 text-white/60">
                או סרקו את קוד ה־QR מהטלפון
              </p>

              <a
                href="/demo"
                className="
                mt-3
                flex
                justify-center
                items-center
                gap-2
                text-cyan-300
                hover:text-cyan-200
                transition
                "
              >
                megaclick.co.il/demo

                <ExternalLink size={17} />
              </a>

            </div>

          </motion.div>

        </div>

        {/* BENEFITS */}

        <div className="grid md:grid-cols-3 gap-5 mt-14">

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">

            <Zap className="mx-auto text-yellow-400 mb-4" size={34} />

            <h3 className="font-bold text-lg">
              התחברות תוך שניות
            </h3>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">

            <Smartphone className="mx-auto text-cyan-300 mb-4" size={34} />

            <h3 className="font-bold text-lg">
              ללא התקנת אפליקציה
            </h3>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">

            <Gamepad2 className="mx-auto text-purple-300 mb-4" size={34} />

            <h3 className="font-bold text-lg">
              בדיוק כמו משחק אמיתי
            </h3>

          </div>

        </div>

        {/* CTA */}

        <div className="flex justify-center mt-16">

          <a
            href="#"
            className="
            px-10
            py-5
            rounded-full
            bg-gradient-to-r
            from-purple-500
            via-blue-500
            to-cyan-400
            text-xl
            font-extrabold
            shadow-[0_0_70px_rgba(139,92,246,.45)]
            hover:scale-105
            transition-all
            "
          >
            🚀 התחילו ליצור משחק משלכם בחינם
          </a>

        </div>

      </div>

    </section>
  );
}