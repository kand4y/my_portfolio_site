import "./globals.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Kanda Yuki - Portfolio",
  description: "Kanda Yuki's portfolio site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head />
      <body className="bg-black">
        <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
