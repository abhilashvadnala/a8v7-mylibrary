import React from "react";
import { Row, Table } from "react-bootstrap";

function BookList(props) {
  const deleteItem = id => {
    props.delBook(id)
  };
  const bookEmojis = ["📒", "📓", "📔", "📕", "📗", "📘", "📙"]
  const bookTRs = props.bookList.map((book,ind) => {
    return (
      <tr key={book.id}>
        <td> <span>{bookEmojis[Math.floor(bookEmojis.length*Math.random())]}</span> {ind+1}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td onClick={() => deleteItem(book.id)}>
          &#10060;
        </td>
      </tr>
    );
  });

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {bookTRs}
      </tbody>
    </Table>
  );
}

export default BookList;
