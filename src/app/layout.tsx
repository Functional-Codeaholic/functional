import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import Header from './components/Header/Header'
import './layout.scss'

export const metadata: Metadata = {
  title: "Functional Codeaholic",
  description: "Web Development by Brian Quinney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
