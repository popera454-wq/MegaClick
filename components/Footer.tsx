"use client";

import Logo from "./Logo";
import {
  Mail,
  Globe,
  Sparkles
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050509] border-t border-white/10">

      {/* Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Line */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <Logo />

            <p className="mt-6 text-white/60 leading-8">
              MegaClick היא פלטפורמה ליצירת משחקים אינטראקטיביים בזמן אמת,
              עם AI, QR ומערכת IVR.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              קישורים מהירים
            </h3>

            <div className="space-y-3 text-white/65">

              <a href="#">יצירת משחק</a><br />

              <a href="#">הצטרפות למשחק</a><br />

              <a href="#demo">הדגמה</a><br />

              <a href="#faq">שאלות נפוצות</a><br />

              <a href="#about">אודות</a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              יצירת קשר
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-cyan-300"
                />

                <span className="text-white/70">
                  megaclick.quiz@gmail.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Globe
                  size={18}
                  className="text-cyan-300"
                />

                <span className="text-white/70">
                  megaclick-quiz.vercel.app
                </span>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div>

            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-7
              "
            >

              <Sparkles
                className="text-cyan-300 mb-5"
                size={32}
              />

              <h3 className="text-2xl font-bold">
                מוכנים להתחיל?
              </h3>

              <p className="mt-4 text-white/65 leading-8">
                צרו את המשחק הראשון שלכם בחינם בתוך דקות.
              </p>

              <button
                className="
                mt-8
                w-full
                rounded-full
                py-4
                bg-gradient-to-r
                from-purple-500
                via-blue-500
                to-cyan-400
                font-bold
                hover:scale-105
                transition-all
                "
              >
                🚀 יצירת משחק
              </button>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <span className="text-white/45">
            © 2026 MegaClick. All rights reserved.
          </span>

          <span className="text-white/35">
            Built with ❤️ using Next.js
          </span>

        </div>

      </div>

    </footer>
  );
}