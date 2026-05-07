import type { Metadata } from "next";
import { Fredoka, Signika, Source_Sans_3 } from "next/font/google";
import { SITE_CONFIG } from "@/types/qualykids";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Clínica especializada em pediatria`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  openGraph: {
    title: `${SITE_CONFIG.name} | Clínica especializada em pediatria`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/images/qualykids/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sourceSans.variable} ${signika.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
