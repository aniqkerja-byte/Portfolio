import { Metadata } from "next";
import AllProjects from "@/components/AllProjects";

export const metadata: Metadata = {
  // No "| JomBina" — layout.tsx applies the "%s | JomBina Digital" template.
  title: "All Projects & Case Studies",
  description:
    "Explore our full portfolio of websites, high-converting landing pages, e-commerce stores, and web applications built for growing businesses.",
  openGraph: {
    title: "Portfolio & Case Studies | JomBina",
    description:
      "Explore our full portfolio of websites, high-converting landing pages, e-commerce stores, and web applications.",
  },
};

export default function WorkPage() {
  return <AllProjects />;
}
