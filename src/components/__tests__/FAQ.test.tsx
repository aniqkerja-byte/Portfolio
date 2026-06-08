import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FAQ from "../FAQ";

// Mock IntersectionObserver required by framer-motion FadeIn
class IntersectionObserverMock {
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
}
vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

describe("FAQ Component", () => {
  it("renders and toggles FAQ answers", () => {
    render(<FAQ />);

    // Check main heading
    expect(screen.getByText(/Selalu Ditanya Sebelum Buat Website/i)).toBeInTheDocument();

    // Find a question
    const questionBtn = screen.getByText(/Berapa lama biasanya website boleh siap/i);
    expect(questionBtn).toBeInTheDocument();

    // Answer shouldn't be in document before click
    expect(screen.queryByText(/Untuk landing page/i)).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(questionBtn);

    // Answer should now be in the document
    const answer = screen.getByText(/Untuk landing page/i);
    expect(answer).toBeInTheDocument();

    // Click to close
    fireEvent.click(questionBtn);
  });
});
