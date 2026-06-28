import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visual Design Portfolio",
  description: "A visual communication designer's portfolio, crafting playful, intentional design experiences.",
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
