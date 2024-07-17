import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Masthead from "./components/masthead";
import { GoogleAnalytics } from "@next/third-parties/google"

const plexSans = IBM_Plex_Sans({ 
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  preload: true,
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false});

const plexMono = IBM_Plex_Mono({ 
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  preload: true,
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false});

export const metadata = {
  title: "Eric Frommelt",
  description: "Digital Design Engineer based in Los Angeles, California",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plexSans.className}>
      <Masthead />
        {children}
      </body>
      <GoogleAnalytics gaId="G-X9V0K849BR"/>
    </html>
  );
}
