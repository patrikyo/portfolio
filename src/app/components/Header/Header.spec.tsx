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
});
