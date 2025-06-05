import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";

describe("Skills", () => {
  const skills = [
    { title: "React", icon: faReact },
    { title: "JavaScript", icon: faJs },
  ];

  it("Should display each skill title", () => {
    render(<Skills skills={skills} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  it("Should render the skills list with correct aria-label", () => {
    render(<Skills skills={skills}></Skills>);
    expect(screen.getByRole("list", { name: "Skills" })).toBeInTheDocument();
  });

  it("Should renders the correct number of skills", () => {
    render(<Skills skills={skills} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(skills.length);
  });
});
