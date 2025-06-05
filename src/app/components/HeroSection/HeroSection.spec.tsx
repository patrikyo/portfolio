import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("Should render portrait image with correct alt text", () => {
    render(<HeroSection />);
    const image = screen.getByAltText(
      "Portrait of Patrik Youssef, a frontend developer"
    );
    expect(image).toBeInTheDocument();
  });

  it("Should have the name and title", () => {
    render(<HeroSection />);
    expect(screen.getByText("Hi, I am Patrik Youssef")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });

  it("Should have a download CV link with correct aria-label and download attribute", () => {
    render(<HeroSection />);
    const downloadLink = screen.getByLabelText("Download Patrik Youssef CV");
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink.closest("a")).toHaveAttribute(
      "download",
      "patrik_youssef_cv.pdf"
    );
  });

  it("Should have a contact me link with correct href", () => {
    render(<HeroSection />);
    expect(screen.getByText("Contact me")).toBeInTheDocument();
    expect(screen.getByText("Contact me").closest("a")).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
