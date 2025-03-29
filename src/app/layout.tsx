import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import Nav from "@/components/Nav";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOLS VISUALS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${montserrat.variable} font-[var(--font-montserrat)] antialiased`}
        >
          <Nav />
          {children}
          <InstagramSection />
          <Footer />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
