// __tests__/index.test.tsx（または .js）
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /welcome/i });
    expect(heading).toBeInTheDocument();
  });
});