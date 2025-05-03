import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saad Mustafa | Front-End Developer",
  description:
    "Portfolio of Malahima Amir - a passionate Front-End developer specializing in modern web applications, UI/UX, and scalable backend systems.",
  openGraph: {
    title: "Saad Mustafa | Front-End Developer",
    description:
      "Check out Malahima's portfolio featuring dynamic projects, skills, and achievements in Front-End development.",
    url: "https://malahima-amir.vercel.app",
    siteName: "Malahima Amir Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Malahima Amir Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malahima Amir | Front-End Developer",
    description:
      "Explore Malahima Amir's projects, skills, and achievements in web development.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
