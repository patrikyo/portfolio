import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PersonalInfoItem from "@/app/models/interfaces/PersonalInfoItem";

describe("About", () => {
  const personalInfo: PersonalInfoItem[] = [
    { label: "name", value: "patrik", icon: faUser },
    { label: "Linkedin", value: "Lorum Ipsum", icon: faLinkedin },
  ];

  it("renderar listan (ul) med rätt attribut", () => {
    render(<About personalInfo={personalInfo} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(personalInfo.length);
    expect(items[0]).toHaveTextContent("patrik");
    expect(items[0]).toHaveTextContent("name");
  });
});
