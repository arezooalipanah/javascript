import { BookContext } from '../../../../context/BookContext';
import { useContext, useState, useRef } from "react";
import style from './AddBooks.module.scss';
import { Button, Input } from "../../../UIElements";

export default function AddBooks({ onChange, addSelectedBooks }) {
  const ref = useRef([]);
  const { books } = useContext(BookContext);
  const [bookList, setBookList] = useState(books);

  const Unchecked = () => {
    for (let i = 0; i < ref.current.length; i++) {
        ref.current[i].checked = false;
    }
}

  const search = (e) => {
    if (e.target.value.length !== 0) {
      const filterdBooks = bookList.filter(book => book.title.toLowerCase().search(e.target.value) !== -1)
      setBookList(filterdBooks);
    } else { setBookList(books) }
  }

  return (<div className={style.root}>
    <Input type='text' label='Add books to History' placeholder='Search' onChange={search} />
    <ul>
      {bookList.length !== 0 && bookList.map((book, index) => (<li key={book.id}>
        <input type="checkbox" ref={(element) => { ref.current[index] = element }} onChange={() => onChange(book)} />{book.title}</li>))}
    </ul>
    <Button onClick={() => {addSelectedBooks(); Unchecked()}} style={{ float: 'right' }}>Add Selected Books</Button>
  </div>)
}