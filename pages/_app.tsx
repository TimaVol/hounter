import "@/styles/globals.scss";
import "rodal/lib/rodal.css";
import type { AppProps } from "next/app";
import { Lexend } from "next/font/google";
import "swiper/css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lexend.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
