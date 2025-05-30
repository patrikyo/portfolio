import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Should render the logo with the correct aria-label", () => {
    render(<Header />);
    expect(screen.getByLabelText("Sites logo")).toBeInTheDocument();
  });

  it("Should display the site title 'Patrik'", () => {
    render(<Header />);
    expect(screen.getByText("Patrik")).toBeInTheDocument();
  });

  it("Should render navigation with the links 'About me', 'Projects', and 'Contact'", () => {
    render(<Header />);
    expect(
      screen.getAllByRole("link", { name: "About me" }).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "Projects" }).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: "Contact" }).length
    ).toBeGreaterThan(0);
  });
});
