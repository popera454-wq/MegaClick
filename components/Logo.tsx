import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/megaclick-logo.png"
      alt="MegaClick Logo"
      width={160}
      height={50}
      priority
    />
  );
}