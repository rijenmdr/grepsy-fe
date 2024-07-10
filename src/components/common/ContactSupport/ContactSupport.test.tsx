import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactSupport from './index';
import '@testing-library/jest-dom';

describe('ContactSupport component', () => {
  it('renders "Need any help?"', () => {
    render(<ContactSupport />);

    // Assert that the text "Need any help?" is present in the component
    const helpTextElement = screen.getByText(/Need any help?/i);
    expect(helpTextElement).toBeInTheDocument();
  });

  it('renders "Contact Support" button', () => {
    render(<ContactSupport />);

    // Assert that the "Contact Support" button is rendered
    const contactButtonElement = screen.getByRole('button', { name: /Contact Support/i });
    expect(contactButtonElement).toBeInTheDocument();
  });
});
