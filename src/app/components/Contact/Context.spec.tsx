import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  it("Should show all the fileds and send button", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("Should show validation error for invalid email", () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: "not-an-email" } });
    fireEvent.blur(emailInput);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("Should show success message after successful submit", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
    ) as jest.Mock;
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/First name/i), {
      target: { value: "Test" },
    });
    fireEvent.change(screen.getByLabelText(/Last name/i), {
      target: { value: "User" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/Message sent!/i)).toBeInTheDocument();
    });
  });
});
