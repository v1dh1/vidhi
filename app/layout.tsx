import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Nav from './components/Nav';
import Footer from "./components/Footer";
import NewNav from "./components/NewNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidhi Gokani",
  description: "Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

      
        <Head>
          <title>Vidhi Gokani</title>
          <meta name="description" content="Product Designer" />
          <link rel="icon" href="/favicon.svg" />
          {/* Additional favicon sizes and types can be included here */}
        </Head>

        
        <main className={inter.className}>{children}</main>
    <Footer />

    </body>

    </html>
  );
}
