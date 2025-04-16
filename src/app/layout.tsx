import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
    title: "東京フレッシュマンガイド",
    description: "上京した社会人1年目の方のための生活ガイド",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${notoSansJP.variable} font-sans antialiased min-h-screen flex flex-col`}
            >
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
