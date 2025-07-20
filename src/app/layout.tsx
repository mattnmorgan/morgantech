import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morgantech",
  description: "Personal website of Matthew Morgan, software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased select-none">{children}</body>
    </html>
  );
}
