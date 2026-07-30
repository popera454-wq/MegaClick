"use client";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav
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
      border-white/20
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      flex
      items-center
      justify-between
      px-6
      "
    >

      <Logo />

      <div className="hidden lg:flex gap-8 text-white">
        <span>יכולות</span>
        <span>מערכת IVR</span>
        <span>AI</span>
        <span>הדגמה</span>
        <span>שאלות נפוצות</span>
      </div>


      <div className="flex items-center gap-3">

        <button className="text-white">
          🌍 עברית
        </button>

        <button
          className="
          px-4
          py-2
          rounded-full
          border
          border-white/30
          text-white
          "
        >
          🎮 הצטרפות למשחק
        </button>


        <button
          className="
          px-5
          py-2
          rounded-full
          bg-gradient-to-r
          from-purple-500
          to-blue-500
          text-white
          font-bold
          "
        >
          ➕ יצירת משחק בחינם
        </button>

      </div>


    </nav>
  );
}