import { render, screen } from "@testing-library/react";
import type React from "react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@/components/ProjectShowcase", () => ({
  default: () => <div data-testid="project-showcase" />,
}));

vi.mock("@/components/FadeIn", () => ({
  FadeIn: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

import Hero from "../Hero";

// Mock IntersectionObserver required by framer-motion
class IntersectionObserverMock {
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
}
vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

describe("Hero Component", () => {
  it("renders the main heading and start project link", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      name: /website kemas untuk bisnes/i,
    });
    expect(heading).toBeInTheDocument();

    const businessCopy = screen.getAllByText(/bisnes/i)[0];
    expect(businessCopy).toBeInTheDocument();

    const link = screen.getByText(/Saya Nak Website/i);
    expect(link).toBeInTheDocument();
  });
});
