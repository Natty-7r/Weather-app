import type { Metadata } from "next";

import "../styles/globals.css";
import "../styles/scroll-bar.css";
import { ReactQueryClientProvider } from "@/utils/providers/react-query-provider";
import ContextProvider from "@/utils/providers/context-provider";
import MainHeader from "@/components/header/main-header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Weather app",
  description: "Weather app for assigment ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <ContextProvider>
            <main className="h-screen flex flex-col">
              <MainHeader />
              <Suspense>{children}</Suspense>
            </main>
          </ContextProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
