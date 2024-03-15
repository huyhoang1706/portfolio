import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const notoSans = Noto_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-notoSans",
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${notoSans.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
