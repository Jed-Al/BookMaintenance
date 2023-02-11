import './BookList.css';
import Form from './Form';
import { useState, useEffect } from "react"
import { Card, CardText, Table, Button } from "reactstrap"

function BookList({ books, deleteBook, removeAll }) {
  const [hasBooks, setHasBooks] = useState(false);

  useEffect(() => {
    console.log(books);
    if (books === undefined) {
      setHasBooks(false);
      return;
    }

    if (books.length > 0) {
      setHasBooks(true);
    } else {
      setHasBooks(false);
    }
  }, [books])


  return (
    <Card className="books-container">
      {hasBooks ? (
        <div className="books">
          <Table className="books-table" borderless responsive>
            <thead>
              <tr>
                <th>
                  ISBN#
                </th>
                <th>
                  Title
                </th>
                <th>
                  Author
                </th>
                <th>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.isbn}>
                  <td>
                    {book.isbn}
                  </td>
                  <td>
                    {book.title}
                  </td>
                  <td>
                    {book.author}
                  </td>
                  <td>
                    <Button block color="danger" onClick={() => deleteBook(book.isbn)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button block color="danger" onClick={() => removeAll()}>Remove All</Button>
        </div>
      ) : (
        <CardText className="card-label">
          No books are added yet
        </CardText>
      )}

    </Card>
  );
}

export default BookList;
