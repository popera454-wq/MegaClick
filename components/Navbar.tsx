"use client";

import { motion } from "framer-motion";
import { ChevronDown, Gamepad2, Plus } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const menuItems = [
    "יכולות",
    "מערכת IVR",
    "AI",
    "הדגמה",
    "שאלות נפוצות",
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50

      w-[92%]
      max-w-[1500px]

      h-[82px]

      rounded-[30px]

      border
      border-white/15

      bg-gradient-to-r
      from-white/[0.12]
      via-white/[0.08]
      to-white/[0.12]

      backdrop-blur-2xl

      shadow-[0_20px_80px_rgba(0,0,0,0.45)]

      flex
      items-center
      justify-between

      px-8
      "
    >

      {/* Glow ברקע */}
      <div
        className="
        absolute
        inset-0
        rounded-[30px]
        bg-gradient-to-r
        from-purple-500/10
        via-blue-500/10
        to-cyan-400/10
        pointer-events-none
        "
      />


      {/* לוגו */}
      <div className="relative z-10">
        <Logo />
      </div>



      {/* תפריט */}
      <div
        className="
        hidden
        lg:flex
        items-center
        gap-9
        relative
        z-10
        "
      >

        {menuItems.map((item) => (
          <button
            key={item}
            className="
            text-white/80
            text-[15px]
            font-medium

            transition-all
            duration-300

            hover:text-white
            hover:-translate-y-0.5
            "
          >
            {item}
          </button>
        ))}

      </div>



      {/* פעולות */}
      <div
        className="
        flex
        items-center
        gap-3
        relative
        z-10
        "
      >

        {/* שפה */}
        <button
          className="
          hidden
          md:flex
          items-center
          gap-1
          text-white/90
          hover:text-white
          transition
          "
        >
          🌍 עברית
          <ChevronDown size={15}/>
        </button>



        {/* הצטרפות */}
        <button
          className="
          hidden
          xl:flex

          items-center
          gap-2

          px-5
          py-3

          rounded-full

          border
          border-white/20

          bg-white/5

          text-white

          transition-all
          duration-300

          hover:bg-white/15
          hover:scale-[1.03]
          "
        >
          <Gamepad2 size={18}/>
          הצטרפות למשחק
        </button>



        {/* ראשי */}
        <button
          className="
          flex
          items-center
          gap-2

          px-6
          py-3

          rounded-full

          bg-gradient-to-r
          from-purple-500
          via-blue-500
          to-cyan-400

          text-white

          font-bold

          shadow-[0_0_35px_rgba(139,92,246,0.45)]

          transition-all
          duration-300

          hover:scale-[1.05]
          hover:shadow-[0_0_55px_rgba(34,211,238,0.55)]
          "
        >
          <Plus size={18}/>
          יצירת משחק בחינם
        </button>


      </div>


    </motion.nav>
  );
}