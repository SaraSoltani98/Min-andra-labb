import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../components/Header";

describe("Header", () => {
  it("visar huvudrubriken", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "Task Board" }),
    ).toBeInTheDocument();
  });
});
it("visar introduktionstexten", () => {
  render(<Header />);

  expect(
    screen.getByText("Laboration 2")
  ).toBeInTheDocument();
});