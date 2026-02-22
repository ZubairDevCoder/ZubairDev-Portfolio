import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModeToggle } from "@/components/darkmode";
import { Analytics } from "@vercel/analytics/next";

import { Inter, Poppins } from "next/font/google";

/* ✅ FAST GOOGLE FONTS */
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

/* ✅ STRONG SEO METADATA */
export const metadata = {
  metadataBase: new URL("https://zubair-dev-portfolio-pi.vercel.app"),

  title: {
    default: "Muhammad Zubair | Full Stack SaaS Developer",
    template: "%s | Muhammad Zubair",
  },

  description:
    "Muhammad Zubair is a Full Stack Developer specializing in SaaS platforms, admin dashboards, chatbots, and scalable web applications using Next.js, React, Firebase, and Tailwind CSS.",

  keywords: [
    "Muhammad Zubair",
    "Zubair Dev",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "SaaS Developer",
    "Portfolio Website",
    "Pakistan Web Developer",
  ],

  authors: [{ name: "Muhammad Zubair" }],
  creator: "Muhammad Zubair",

  openGraph: {
    title: "Muhammad Zubair | Full Stack SaaS Developer",
    description:
      "Explore the portfolio of Muhammad Zubair – building scalable SaaS platforms and production-ready web applications.",
    url: "/",
    siteName: "Muhammad Zubair Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zubair Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zubair | Full Stack Developer",
    description:
      "Full Stack Developer specializing in SaaS, dashboards & modern web apps.",
    images: ["/og-image.png"],
  },

  verification: {
    google: "googlee2480a318705e5c1", // 👈 yahan sirf code dalna
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ✅ VIEWPORT (NEXT 16 FIX) */
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
      className={`${inter.variable} ${poppins.variable}`}
    >
      <meta
        name="google-site-verification"
        content="v8MZvG8XOHVTu6bd_307APE4IvEwf7MXBp1eO0945iI"
      />
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* HEADER */}
          <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
            <Navbar />
          </header>

          {/* MAIN */}
          <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>

          {/* FOOTER */}
          <Footer />

          {/* UI UTILITIES */}
          <ModeToggle />
          <Toaster position="top-center" />

          {/* ANALYTICS */}
          <Analytics />
          
        </ThemeProvider>

        {/* ✅ STRUCTURED DATA (BOOST GOOGLE SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Zubair",
              url: "https://zubair-dev-portfolio-pi.vercel.app",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/ZubairDevCoder",
                "https://www.linkedin.com/in/zubair-dev-coder-11a02a3aa/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
