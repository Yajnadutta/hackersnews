import React from "react";
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Ask = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await response.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []);
  return <div>
        <Container>
        <h5> Ask</h5>

        {/* display books from the API */}
        {books && (
          <div className="books">

            {/* loop over the books */}
            {books.map((book, index) => (
              <div key={index}>
                <h2>{book.country}</h2>
              </div>
            ))}

  </div>
)}
        </Container>
    </div>;
};

export default Ask;
