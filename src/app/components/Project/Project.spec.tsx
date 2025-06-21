import { render, screen } from "@testing-library/react";
import Project from "./Project";

// Mock EmblaCarousel så att den inte försöker köra riktig kod
jest.mock("../Embla/EmblaCarousel", () => {
  const MockEmbla = () => <div />;
  MockEmbla.displayName = "MockEmblaCarousel";
  return MockEmbla;
});

describe("Project", () => {
  const projects = [
    {
      title: "mockProject",
      description:
        "lorum ipsum dolar sit emet, lorum ipsum dolar sit emet, lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet",
      images: [
        { src: "/patrik.png", alt: "image1" },
        { src: "/tayo.jpg", alt: "image2" },
        { src: "/file.svg", alt: "image3" },
      ],
      url: "test-url",
    },
  ];

  it("Should render project title and description", () => {
    render(<Project projects={projects} />);
    expect(screen.getByRole("heading")).toHaveTextContent("mockProject");
    expect(
      screen.getByText(
        "lorum ipsum dolar sit emet, lorum ipsum dolar sit emet, lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet"
      )
    ).toBeInTheDocument();
  });

  it("Should render project links with correct attributes", () => {
    render(<Project projects={projects} />);
    const link = screen.getByRole("link", {
      name: "Open mockProject in a new tab",
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "test-url");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("aria-label", "Open mockProject in a new tab");
  });
});
