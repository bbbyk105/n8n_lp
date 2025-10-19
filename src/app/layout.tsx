// app/layout.tsx
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "n8n Business Automation | 次世代の業務自動化ソリューション",
  description:
    "n8nを活用した業務自動化で、手作業を削減し、ビジネスを加速させます。Slack、Gmail、データ収集など400種類以上のツールと連携可能。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
