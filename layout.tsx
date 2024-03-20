import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "@/lib/theme-provider";
import Footer from "./components/Footer";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doraowo",
  description: "Hi! You're having a problem don't you?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
