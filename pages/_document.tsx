import { Html, Head, Main, NextScript } from "next/document";
import { GlobalDataProvider } from "@/hooks/useGlobalData";

export default function Document() {
  return (
    <Html
      lang="en"
      className="h-full bg-gray-100"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head />
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
