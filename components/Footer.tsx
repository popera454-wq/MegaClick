"use client";

import { useRouter } from "next/navigation";
import Logo from "./Logo";
import {
  Mail,
  Globe,
  Sparkles,
} from "lucide-react";

import { translations } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {

  const { language } = useLanguage();

  const t =
    translations[language] ??
    translations.en;

  const current = t.footer;
  const router = useRouter();

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

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
              {current.logoParagraph}
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              {current.linksTitle}
            </h3>

            <div className="space-y-3 text-white/65">
            <button onClick={() => scrollToSection("features")}>
           {current.links[0]}
            </button>
            <br />

            <button onClick={() => scrollToSection("ai")}>
             {current.links[1]}
             </button>
            <br />

            <button onClick={() => scrollToSection("demo")}>
              {current.links[2]}
            </button>
            <br />

            <button onClick={() => scrollToSection("faq")}>
              {current.links[3]}
              </button>
            <br />

            <button onClick={() => scrollToSection("about")}>
              {current.links[4]}
              </button>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="font-bold text-xl mb-5">
            {current.contactTitle}
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <Mail
                size={18}
                className="text-cyan-300"
              />

              <span className="text-white/70">
                {current.email}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Globe
                size={18}
                className="text-cyan-300"
              />

              <span className="text-white/70">
                {current.site}
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
                {current.readyTitle}
              </h3>

              <p className="mt-4 text-white/65 leading-8">
                {current.readyDesc}
              </p>

              <button
               onClick={() => router.push("/coming-soon")}
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
                {current.ctaButton}
              </button>

            </div>

          </div>

        </div>

        <div
          className="
          mt-20
          border-t
          border-white/10
          pt-8
          flex
          justify-center
          items-center
          "
        >

          <span className="text-white/45">
            {current.copyright}
          </span>

        </div>

      </div>

    </footer>

  );

}