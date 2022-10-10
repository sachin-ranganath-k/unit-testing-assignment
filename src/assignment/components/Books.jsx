import React from "react";

function Books(propsFromBookList) {
  return (
    <div>
      <h2>Welcome to My Favorite Book Portal</h2>
      <table border="2">
        <tbody>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
          </tr>
          <tr>
            <td data-testid="book-name">{propsFromBookList.bookName}</td>
            <td data-testid="book-author">{propsFromBookList.bookAuthor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Books;
