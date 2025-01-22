import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Porject",
  description: "This is a new project",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // const messages = await getMessages();
  const { locale } = await params;
  console.log("locle is : ", await params);

  const isArabic = locale === "ar";
  metadata.title = isArabic ? "مشروع جديد" : "New Project";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={isArabic ? "arabicFont" : "englishFont"}
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/*  <NextIntlClientProvider messages={messages}>
        </NextIntlClientProvider> */}
        {children}
      </body>
    </html>
  );
}
