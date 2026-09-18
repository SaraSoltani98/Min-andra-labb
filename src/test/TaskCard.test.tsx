import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TaskCard from "../components/TaskCard";

describe("TaskCard", () => {
  it("visar taskens information", () => {
    render(
      <TaskCard
        id={1}
        title="Testuppgift"
        description="Detta är en testbeskrivning"
        assignee="Sara"
        category="Test"
        priority="Hög"
      />,
    );
    expect(screen.getByText("Testuppgift")).toBeInTheDocument();
    expect(screen.getByText("Detta är en testbeskrivning")).toBeInTheDocument();
    expect(screen.getByText("Sara", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Prioritet: Hög")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
