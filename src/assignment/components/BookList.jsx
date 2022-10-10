import React, { Component } from "react";
import Books from "./Books";

class BookList extends Component {
  render() {
    const bookName = "Web Programming";
    const bookAuthor = "Stalin";

    return (
      <div>
        <Books bookName={bookName} bookAuthor={bookAuthor} />
      </div>
    );
  }
}

export default BookList;
