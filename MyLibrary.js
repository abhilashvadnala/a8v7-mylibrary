import React, { useState } from "react";
import Insert from "./Insert";
import BookList from "./BookList";
import { Row, Col } from "react-bootstrap";

function MyLibrary(props) {
  const [id, setId] = useState(1);
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    book.id=id;
    setBooks([...books,book]);
    setId(id => id+1);
  } 

  const delBook = (id) => {
    setBooks(books.filter(book => {
      return book.id != id;
    }));
  }

  return (
    <Row id="library" className="justify-content-md-center my-auto">
      <Col>
        <Row className="justify-content-md-center row-padding">
          <h1>My Library</h1>
        </Row>
        <Row className="justify-content-md-center row-padding">
          <Insert setBookCB={addBook} />
        </Row>
        <Row
          className="justify-content-md-center row-padding"
          lg={{ span: 8, offset: 2 }} md={12}
        >
          <BookList bookList={books} delBook={delBook} />
        </Row>
      </Col>
    </Row>
  );
}

export default MyLibrary;
