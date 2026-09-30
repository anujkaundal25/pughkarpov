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
  title: "Pugh & Karpov Law, PC",
  description: "Pugh & Karpov Law, PC",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}