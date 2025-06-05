import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";

describe("HamburgerMenu", () => {
  const links = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  it("Should show the toggle button", () => {
    render(<HamburgerMenu links={links} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should  ot show navigation links before menu is opened", () => {
    render(<HamburgerMenu links={links} />);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();

    links.forEach((link) => {
      expect(screen.queryByText(link.title)).not.toBeVisible();
    });
  });

  it("Should shows navigation links when menu is opened", () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    links.forEach((ele) => {
      expect(screen.getByText(ele.title)).toBeVisible();
    });
  });

  it("Should set aria-expanded correctly", () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
