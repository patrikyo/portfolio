import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  const links = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  it("Should show the correct number of navigation items", () => {
    render(<Navigation links={links} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(links.length);
  });

  it("Should show each link with correct text and href", () => {
    render(<Navigation links={links} />);
    links.forEach((link) => {
      const anchor = screen.getByText(link.title);
      expect(anchor).toBeInTheDocument();
      expect(anchor.closest("a")).toHaveAttribute("href", link.href);
    });
  });
});
