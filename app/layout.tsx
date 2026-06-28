import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riko — Visual Design Portfolio",
  description: "Portfolio of Riko, a visual communication designer who crafts playful, intentional design experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
