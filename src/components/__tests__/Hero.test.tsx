import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';

// Mock IntersectionObserver required by framer-motion
class IntersectionObserverMock {
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('Hero Component', () => {
    it('renders the main heading and start project link', () => {
        render(<Hero />);
        
        const heading = screen.getByText(/we build/i);
        expect(heading).toBeInTheDocument();
        
        const digitalAuthority = screen.getAllByText(/digital/i)[0];
        expect(digitalAuthority).toBeInTheDocument();

        const link = screen.getByText(/Start a Project/i);
        expect(link).toBeInTheDocument();
    });
});
