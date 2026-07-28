import type { Metadata } from "next";

import {
  Henny_Penny,
  Fredoka,
  Caveat,
  Poppins,
  JetBrains_Mono,
  Kaisei_Decol,
  Noto_Sans_JP,
} from "next/font/google";

import "./globals.css";

const hennyPenny = Henny_Penny({
  variable: "--font-henny-penny",
  weight: "400",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-kaisei-decol",
  weight: ["400", "500", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Carla M. Quintanar — Web Developer",
  description: "Portfolio de Carla M. Quintanar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${hennyPenny.variable} ${fredoka.variable} ${caveat.variable} ${poppins.variable} ${jetbrainsMono.variable} ${kaiseiDecol.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
