import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "MegaClick - משחקים אינטראקטיביים בזמן אמת",
  description: "צרו משחקים אינטראקטיביים בחינם בעזרת AI, QR ומערכת IVR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}