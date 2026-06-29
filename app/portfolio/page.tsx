import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio · Visual Design Portfolio",
  description: "Selected brand identity, editorial, and character design projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
