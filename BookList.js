import React from "react";
import { Row } from "react-bootstrap";

function BookList(props) {
  const deleteItem = id => {
    props.delBook(id)
  };

  const bookTRs = props.bookList.map(book => {
    return (
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td onClick={() => deleteItem(book.id)} style={{ color: "red" }}>
          X
        </td>
      </tr>
    );
  });

  return (
    <table style={{ width: "60%" }}>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Delete</th>
      </tr>
      {bookTRs}
    </table>
  );
}

export default BookList;
