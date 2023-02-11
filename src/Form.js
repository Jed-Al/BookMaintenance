import { useState } from "react"
import { Input, Button } from "reactstrap"
import "./Form.css"

export default function Form({ onAddData }) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");

    return (
        <div className="form-container">
            <span>Title</span>
            <Input
                onChange={e => setTitle(e.target.value)}
                value={title}>
            </Input>
            <span>Author</span>
            <Input
                onChange={e => setAuthor(e.target.value)}
                value={author}>
            </Input>
            <span>ISBN#</span>
            <Input
                type="number"
                onChange={e => setIsbn(e.target.value)}
                value={isbn}>
            </Input>
            <div>
                <Button block color="success" onClick={() => onAddData(isbn, title, author)}>Add</Button>
            </div>
        </div>
    )
}