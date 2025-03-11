import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MirageCloud2",
  description: "A Next.js clone of Huly.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* <Navbar /> ✅ Persistent Navbar */}
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> ✅ Persistent Footer */}
      </body>
    </html>
  );
}
