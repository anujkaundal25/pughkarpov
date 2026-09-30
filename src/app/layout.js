import { EB_Garamond, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

// const dancingScript = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://pughkarpov.vercel.app"),
  title: "Pugh & Karpov Law, PC",
  description:
    "Experienced legal representation in civil litigation, personal injury, bankruptcy, and criminal and traffic defense throughout Tidewater, Virginia.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pugh & Karpov Law, PC",
    description:
      "Experienced legal representation throughout Tidewater, Virginia.",
    url: "https://pughkarpov.vercel.app",
    siteName: "Pugh & Karpov Law, PC",
    images: [
      {
        url: "/new-logo.webp",
        width: 500,
        height: 500,
        alt: "Pugh & Karpov Law, PC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pugh & Karpov Law, PC",
    description:
      "Experienced legal representation throughout Tidewater, Virginia.",
    images: ["/new-logo.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
