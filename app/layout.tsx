import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MegaClick - משחקים אינטראקטיביים בזמן אמת",
  description:
    "צרו משחקים אינטראקטיביים בחינם בעזרת AI, QR ומערכת IVR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}