"use client";

import { motion } from "framer-motion";
import { ChevronDown, Gamepad2, Plus } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      w-[92%]
      max-w-[1400px]
      h-[72px]
      rounded-[24px]
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      flex
      items-center
      justify-between
      px-6
      "
    >

      {/* צד ימין - לוגו */}
      <Logo />


      {/* מרכז */}
      <div className="hidden lg:flex items-center gap-8 text-white/90">

        <a href="#features">
          יכולות
        </a>

        <a href="#ivr">
          מערכת IVR
        </a>

        <a href="#ai">
          AI
        </a>

        <a href="#demo">
          הדגמה
        </a>

        <a href="#faq">
          שאלות נפוצות
        </a>

      </div>


      {/* צד שמאל */}
      <div className="flex items-center gap-3">


        <button
          className="
          flex items-center gap-1
          text-white/90
          px-3
          "
        >
          🌍 עברית
          <ChevronDown size={16}/>
        </button>


        <button
          className="
          hidden md:flex
          items-center gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/20
          text-white
          "
        >
          <Gamepad2 size={18}/>
          הצטרפות למשחק
        </button>


        <button
          className="
          flex
          items-center
          gap-2
          px-5
          py-2.5
          rounded-full
          bg-gradient-to-r
          from-purple-500
          via-blue-500
          to-cyan-400
          text-white
          font-bold
          shadow-lg
          shadow-purple-500/30
          "
        >
          <Plus size={18}/>
          יצירת משחק בחינם
        </button>


      </div>

    </motion.nav>
  );
}