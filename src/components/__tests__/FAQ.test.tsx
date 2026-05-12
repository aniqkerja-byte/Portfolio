import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FAQ from '../FAQ';

// Mock IntersectionObserver required by framer-motion FadeIn
class IntersectionObserverMock {
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('FAQ Component', () => {
    it('renders and toggles FAQ answers', () => {
        render(<FAQ />);
        
        // Check main heading
        expect(screen.getByText(/Common Questions/i)).toBeInTheDocument();
        
        // Find a question
        const questionBtn = screen.getByText(/How long does it take to build a website/i);
        expect(questionBtn).toBeInTheDocument();
        
        // Answer shouldn't be in document before click
        expect(screen.queryByText(/For a standard 'Landing Page', we typically deliver/i)).not.toBeInTheDocument();

        // Click to open
        fireEvent.click(questionBtn);
        
        // Answer should now be in the document
        const answer = screen.getByText(/For a standard 'Landing Page', we typically deliver/i);
        expect(answer).toBeInTheDocument();
        
        // Click to close
        fireEvent.click(questionBtn);
    });
});
