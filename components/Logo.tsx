import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <Image
        src="/images/megaclick-logo.png"
        alt="MegaClick Logo"
        width={120}
        height={120}
        className="
          w-[56px]
          h-[56px]
          object-contain
        "
        priority
      />

      <div className="flex flex-col leading-none">

        <span
          className="
          text-2xl
          font-extrabold
          tracking-tight

          bg-gradient-to-r
          from-purple-400
          via-blue-400
          to-cyan-300

          bg-clip-text
          text-transparent
          "
        >
          MegaClick
        </span>


        <span
          className="
          text-[10px]
          text-white/60
          tracking-[0.18em]
          uppercase
          mt-1
          "
        >
          Interactive Games
        </span>

      </div>

    </div>
  );
}