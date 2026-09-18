import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Column from "../components/Column";

describe("Column", () => {
  it("visar rubriken", () => {
    render(
      <Column title="Todo">
        <p>Testuppgift</p>
      </Column>,
    );

    expect(screen.getByRole("heading", { name: "Todo" })).toBeInTheDocument();
    expect(screen.getByText("Testuppgift")).toBeInTheDocument();
  });
});
