// CreditUsage.test.tsx

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreditUsage from '.';
import '@testing-library/jest-dom';

describe('CreditUsage component', () => {
  it('renders credit usage information', () => {
    const totalCreditUsage = 50; // Example total credit usage value

    render(<CreditUsage totalCreditUsage={totalCreditUsage} />);

    // Assert that the "Credit usage: {totalCreditUsage} /" text is present
    const creditUsageText = screen.getByText(`Credit usage: ${totalCreditUsage} /`);
    expect(creditUsageText).toBeInTheDocument();
  });
});
