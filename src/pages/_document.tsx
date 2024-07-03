import { FixAutoScrollAnchor } from "@/components/FixAutoScroll";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="container max-lg p-4 mx-auto">
        <Main />
        <FixAutoScrollAnchor />
        <NextScript />
      </body>
    </Html>
  );
}
