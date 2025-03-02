import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { config } from '@fortawesome/fontawesome-svg-core';
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./css/card.scss";
import "./css/globals.scss";

config.autoAddCss = false
const jbmono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Nguyen Phuc Khang",
  description: "Hi! I'm Khang Nguyen, a software developer from HCMC, VN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-transparent">
      <body className={jbmono.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[82rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
