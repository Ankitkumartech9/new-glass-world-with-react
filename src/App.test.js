import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the glass experts landing page and its main sections", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /opens up possibility/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /our services/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /our projects/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
});

test("mobile navigation can be opened and closed", () => {
  render(<App />);

  const menuButton = screen.getByRole("button", { name: /open navigation/i });
  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute("aria-expanded", "true");

  fireEvent.click(within(screen.getByRole("navigation", { name: /main navigation/i })).getByRole("link", { name: "Services" }));
  expect(menuButton).toHaveAttribute("aria-expanded", "false");
});
