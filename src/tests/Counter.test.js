import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter"

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialMessage = screen.getByTestId("count");
  expect(initialMessage).toBeInTheDocument("0");
});

test('clicking + increments the count', () => {
  const incrementMessage = screen.getByText("+");
  const incCount = screen.getByTestId("count")

  fireEvent.click(incrementMessage);
  expect(incCount).toBeInTheDocument("1");
});

test('clicking - decrements the count', () => {
  const decrementMessage = screen.getByText("-");
  const decCount = screen.getByTestId("count")

  fireEvent.click(decrementMessage);
  expect(decCount).toBeInTheDocument("-1");
});
