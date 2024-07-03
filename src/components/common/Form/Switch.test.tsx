import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SwitchWithText from './Switch';

describe('SwitchWithText component', () => {
  it('should be unchecked by default', () => {
    render(<SwitchWithText />);
    const switchElement = screen.getByRole('checkbox') as HTMLInputElement;
    expect(switchElement.checked).toBe(false);
  });

  it('should toggle state when clicked', () => {
    render(<SwitchWithText />);
    const switchElement = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(switchElement);
    expect(switchElement.checked).toBe(true);
    fireEvent.click(switchElement);
    expect(switchElement.checked).toBe(false);
  });
});
