import { createContext, useState, useEffect } from 'react';
import bookService from "../services/bookService";

export const BookContext = createContext({});

const { Provider } = BookContext;

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { payload } = await bookService.getAll();
      setBooks(payload);
    }
    fetchData();
  }, []);

  return <Provider value={{ books }}>{children}</Provider>;
};

export default BookProvider;
