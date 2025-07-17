import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const elements = screen.getAllByText(/YOUR FEET DESERVE THE BEST/i);
  expect(elements.length).toBeGreaterThan(0);
});

test('renders navbar links', () => {
  render(<App/>);
  expect(screen.getByText(/menu/i)).toBeInTheDocument();
  expect(screen.getByText(/location/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});

test('renders text', () => {
  render(<App />);
  const elements = screen.getAllByText(/YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES./i);
  expect(elements.length).toBeGreaterThan(0);
});

test('renders text', () => {
  render(<App />);
  const elements = screen.getAllByText(/YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES./i);
  expect(elements.length).toBeGreaterThan(0);
});
