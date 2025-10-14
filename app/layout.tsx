import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// ✅ Enhanced SEO Metadata
export const metadata: Metadata = {
  title: "UniLink | Linking Togetherness!",
  description:
    "UniLink is the ultimate social network built exclusively for college students — a place where every student gets the spotlight they deserve. Share your thoughts, showcase your talent, and connect with like-minded peers across campuses. From friendships and dating to freelance gigs and startup opportunities, UniLink bridges creativity, collaboration, and connection — all in one vibrant student community.",
  keywords: [
    "UniLink",
    "college media",
    "college social media",
    "college social networking",
    "university app",
    "student community",
    "campus events",
    "college friends",
    "student life",
    "university networking",
    "college app",
    "college connections",
    "college dating",
    "dating app",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "UniLink | Linking Togetherness!",
    description:
      "Making college life a little more connected (and a lot more fun). Discover, connect, and share your college experiences with UniLink.",
    url: "https://letsunilink.com", // <-- Replace with your actual site URL
    siteName: "UniLink",
    images: [
      {
        url: "/og-image.png", // <-- Optional: add your Open Graph image here
        width: 1200,
        height: 630,
        alt: "UniLink - Linking Togetherness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniLink | Linking Togetherness!",
    description:
      "Making college life a little more connected (and a lot more fun).",
    images: ["/og-image.png"], // <-- Optional
    creator: "@your_twitter_handle", // <-- Optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
