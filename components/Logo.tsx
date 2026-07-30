import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center h-full">
      <Image
        src="/images/megaclick-logo.png"
        alt="MegaClick Logo"
        width={140}
        height={45}
        className="object-contain max-h-[45px] w-auto"
        priority
      />
    </div>
  );
}