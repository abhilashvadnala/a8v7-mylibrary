import React, { useState } from "react";
import Insert from "./Insert";
import FileUpload from "./FileUpload";
import BookList from "./BookList";
import { Row, Col } from "react-bootstrap";

function MyLibrary(props) {
  const [id, setId] = useState(1);
  const [books, setBooks] = useState([]);

  const addBook = book => {
    book.id = id;
    setBooks([...books, book]);
    setId(id => id + 1);
  };

  const delBook = id => {
    setBooks(
      books.filter(book => {
        return book.id != id;
      })
    );
  };

  return (
    <Row id="library" className="justify-content-md-center">
      <Col sm>
        <Row className="row-padding">
          <h1>
            <span>📚</span> My Library <span>📚</span>
          </h1>
        </Row>
        <Row className="row-padding">
          <Col>
            <Row className="row-padding">
              <Insert setBookCB={addBook} />
            </Row>
            <hr />
            <Row className="row-padding">
              <FileUpload />
            </Row>
          </Col>
        </Row>
        <Row
          className=" row-padding"
          lg={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
        >
          <BookList bookList={books} delBook={delBook} />
          {(books.length == 0) ? <h4>Such Empty Library 🥴</h4> : <></>}
        </Row>
      </Col>
    </Row>
  );
}

export default MyLibrary;
