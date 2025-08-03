import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/system/navigation-layout";
import Header from "@/components/app/header";
import Footer from "@/components/app/footer";
import HeaderDrawer from "@/components/app/header-drawer";

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
      <body className="antialiased select-none">
        <div className="h-screen flex flex-col">
          <Layout
            headerDrawer={<HeaderDrawer />}
            header={<Header />}
            body={children}
            footer={<Footer />}
          />
        </div>
      </body>
    </html>
  );
}
