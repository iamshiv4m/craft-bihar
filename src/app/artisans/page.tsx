import { Metadata } from "next";
import { ArtisansClient } from "@/components/artisans/artisans-client";

export const metadata: Metadata = {
  title: "Master Artisans of Bihar | Bihar Bazaar",
  description:
    "Meet the skilled artisans preserving Bihar's rich cultural heritage through traditional crafts and art forms",
};

export default function ArtisansPage() {
  return <ArtisansClient />;
}
