import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import BookList from "../components/BookList";
import Books from "../components/Books";

describe("BookList component", () => {
  it("should render BookList component", () => {
    render(<BookList />);
  });

  it("receive props from BookList component", () => {
    render(<Books bookName="Web Programming" bookAuthor="Stalin" />);
    expect(screen.getByTestId("book-name")).toHaveTextContent("Web Programming");
    expect(screen.getByTestId("book-author")).toHaveTextContent("Stalin");
  });

  it("snapshot testing", () => {
    const snapshot = renderer.create(
      <Books bookName="Web Programming" bookAuthor="Stalin" />
    );
    expect(snapshot).toMatchSnapshot();
  });

  it("should check for a text", () => {
    render(<Books />);
    const text = screen.getByText("Welcome to My Favorite Book Portal");
    expect(text).toBeInTheDocument();
  });
});
