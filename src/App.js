import { useState, useCallback } from "react"
import Heading from './Heading';
import Form from './Form';
import BookList from "./BookList"
import './App.css';


function App() {
  const [data, setData] = useState([
    // { title: "The Alchemist", author: "Paulo Coelho", isbn: "9788172234980" },
    // { title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", isbn: "9788172234981" },
    // { title: "The Secret", author: "Rhonda Byrne", isbn: "9788172234982" },
  ]);

  const onAdd = useCallback((isbn, bookTitle, author, ) => {
    if (bookTitle === "" || author === "" || isbn === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      Number(isbn)
    } catch (error) {
      alert("ISBN should be a number");
      return;
    }
    
    const newList = {
      title: bookTitle,
      author: author,
      isbn: isbn
    }

    const newBookList = [...data, newList];
    setData(newBookList);
  });

  const onDelete = useCallback((isbn) => {
    const newBookList = data.filter((book) => {
      return book.isbn !== isbn
    })
    setData(newBookList)
  });

  const deleteAll = useCallback(() => {
    setData([])
  });

  return (

    <div className="App" >
      <Heading />
      <div className="content">
        <Form onAddData={(isbn, title, author) => {
          onAdd(isbn, title, author)
        }} />
        <BookList
          books={data}
          deleteBook={(isbn) => {
            onDelete(isbn)
          }}
          removeAll={() => { deleteAll() }} />
      </div>
    </div>
  );
}

export default App;
