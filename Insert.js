import React, { useState } from "react";
import { Row } from "react-bootstrap";

function Insert(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setBookCB(
      {
        title,
        author
      }
    )
    setTitle("");
    setAuthor("");
  };

  const titleChange = e => {
    setTitle(e.target.value);
  };

  const authorChange = e => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-field">
        <em>
          <strong>Title</strong>
        </em>
        <br />
        <input
          name="title"
          required="required"
          placeholder="Book Title"
          type="text"
          value={title}
          onChange={titleChange}
        />
      </label>
      <label className="form-field">
        <em>
          <strong>Author</strong>
        </em>
        <br />
        <input
          name="author"
          required="required"
          placeholder="Author Name"
          type="text"
          value={author}
          onChange={authorChange}
        />
      </label>
      <input
        className="form-field"
        type="submit"
        value="Add"
        style={{ backgroundColor: "lightgreen" }}
      />
    </form>
  );
}

export default Insert;
