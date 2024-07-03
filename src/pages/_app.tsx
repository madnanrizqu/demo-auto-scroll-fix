import { FixFlagProvider } from "@/contexts/fix-flag-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FixFlagProvider>
      <Component className="container" {...pageProps} />
    </FixFlagProvider>
  );
}
