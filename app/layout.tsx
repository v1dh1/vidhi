import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

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
          <link rel="icon" href="/favicon.ico" />
          {/* ^^used to be .svg Additional favicon sizes and types can be included here */}
        </Head>

        
        <main className={inter.className}>{children}</main>
    <Footer />
    <Analytics/>

    </body>

    </html>
  );
}
