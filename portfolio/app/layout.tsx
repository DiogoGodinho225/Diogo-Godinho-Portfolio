
import type { Metadata } from "next";
import { } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/app/contexts/LanguageContext'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export const metadata: Metadata = {
  title: "Diogo Godinho",
  description: "This website have the objective to show details about me and some of my projects that I developed during my academic journey and my own personal projects",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
    >
      <LanguageProvider>
        <body>
          <header>
            <Navbar />
          </header>
          <main>

            {children}

          </main>
          <Footer />
        </body>

      </LanguageProvider>
    </html>
  );
}
