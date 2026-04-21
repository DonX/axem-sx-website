import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alan_Sans, JetBrains_Mono } from "next/font/google";
import { appWithTranslation } from "next-i18next";

// Primary typeface — Alan Sans, grotesque sans-serif
const alanSans = Alan_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-allan",
  preload: true,
});

// Monospace — for CLI snippets and code elements only
const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${alanSans.variable} ${jetbrainsMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
