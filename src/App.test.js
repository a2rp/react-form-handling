import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the React form workspace", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /collect details with confidence/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit form/i })).toBeInTheDocument();
});
