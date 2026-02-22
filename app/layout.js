import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import MusicPlayer from "@/components/MusicPlayer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/darkmode";
import { Inter, Poppins, Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

/* ✅ SEO Optimized Metadata */
export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // 🔥 Apna domain dalna
  title: {
    default: "Muhammad Zubair | SaaS Full Stack Developer",
    template: "%s | Muhammad Zubair",
  },
  description:
    "Muhammad Zubair is a SaaS-focused Full Stack Developer & Automation Engineer specializing in scalable web applications using Next.js, React, and Tailwind CSS.",
  keywords: [
    "Muhammad Zubair",
    "Full Stack Developer",
    "SaaS Developer",
    "Next.js Developer",
    "React Developer",
    "Automation Engineer",
    "Pakistan Developer",
  ],
  authors: [{ name: "Muhammad Zubair" }],
  creator: "Muhammad Zubair",
  openGraph: {
    title: "Muhammad Zubair | SaaS Full Stack Developer",
    description:
      "Building scalable SaaS platforms and automation systems using modern web technologies.",
    url: "https://yourdomain.com",
    siteName: "Muhammad Zubair Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zubair | SaaS Full Stack Developer",
    description: "Portfolio of Muhammad Zubair - Full Stack SaaS Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ✅ NEXT 16 FIX — Viewport Separate Export */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}
    >
      <body className="text-white antialiased relative overflow-x-hidden animated-gradient">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />

          <header>
            <Navbar />
          </header>

          <main>{children}</main>

          <MusicPlayer />

          <div className="fixed bottom-6 right-6 z-50">
            <ModeToggle />
          </div>

          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
