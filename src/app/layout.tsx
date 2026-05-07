import type { Metadata } from "next";
import { Fredoka, Signika, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Qualykids | Clínica especializada em pediatria",
  description: "Clínica especializada em pediatria no Tatuapé, São Paulo.",
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
