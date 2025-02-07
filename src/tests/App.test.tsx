import { test, expect, describe, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import App from '../App';

describe('App.tsx', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('App is rendering', () => {
    expect(screen.findByText('Testing')).toBeDefined();
  });

  test('App content is rendering', async () => {
    const button =  await screen.findByTestId('button');
    const checkbox =  await screen.findByTestId('checkbox');
  
    expect(button).toBeDefined();
    expect(checkbox).toBeDefined();
  });

  test('Button is disabled', async () => {
    const button =  await screen.findByTestId('button');
    const checkbox =  await screen.findByTestId('checkbox');
  
    fireEvent(checkbox, new MouseEvent('click', { bubbles: true }));

    expect(button).toHaveProperty('disabled');
  });

  test('Button changes its color', async () => {
    const button =  await screen.findByTestId('button');
  
    expect(button.classList.contains('bg-blue-500')).toBeTruthy();
    fireEvent(button, new MouseEvent('click', { bubbles: true }));
    expect(button.classList.contains('bg-red-500')).toBeTruthy();
  });
}); 
