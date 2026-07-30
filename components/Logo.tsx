import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/megaclick-logo.svg"
        alt="MegaClick"
        width={150}
        height={50}
        priority
      />
    </div>
  );
}