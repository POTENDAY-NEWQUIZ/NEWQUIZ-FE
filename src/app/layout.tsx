import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ModalProvider } from "@context/modal-context";
import Script from "next/script";

const pretendard = localFont({
  src: "/fonts/pretendard-variable.woff2",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "뉴퀴즈 | NewQuiz",
  description: "퀴즈 하나로 뉴스를 더 쉽게 🔍",
  keywords: "퀴즈, 어휘력, 문해력, 뉴스, 공부, 학습",
  robots: "index, follow",
  openGraph: {
    title: "뉴퀴즈 | NewQuiz",
    description: "퀴즈 하나로 뉴스를 더 쉽게 🔍",
    url: "https://new-quiz.site",
    type: "website",
    images: [
      {
        url: "https://new-quiz.site/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "뉴퀴즈 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "뉴퀴즈 (NewQuiz)",
    description: "퀴즈 하나로 뉴스를 더 쉽게 🔍",
    images: ["https://new-quiz.site/open-graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WRSHVPKHXN"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WRSHVPKHXN');`}
        </Script>
      </head>
      <body
        className={`${pretendard.className} antialiased tracking-tighter`}
      >
        <div className="max-w-[480px] min-h-screen mx-auto border-x-[1px] border-[#F2F2F2] box-content">
          <ModalProvider>{children}</ModalProvider>
        </div>
      </body>
    </html>
  );
}
