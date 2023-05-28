import { Button, Modal } from '../../../UIElements';
import { useState } from 'react';
import style from './Category.module.scss';
import BookCard from '../BookCard';
import AddBooks from '../AddBooks';

export default function Category({ title, id, state, dispatch, books }) {
    const [selectedBooks, setSelectedBook] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const confirmAdd = (book) => {
        const category = state?.categories?.filter(cat => cat.id === id);
        if (category[0]?.books?.length !== 0) {
            const findedBook = category[0]?.books?.filter(b => b.id === book.id);
            return findedBook[0]?.id ? false : true;
        } else {
            return true;
        }
    }

    return (<div className={style.root}>
        <div className={style.topBar}>
            <h3 className={style.title}>{title}</h3>
            <Button onClick={() => setShowModal(true)}>Add Books</Button>
            <Modal show={showModal} handleClose={() => setShowModal(false)} width={310}>
                <AddBooks onChange={(book) => { confirmAdd(book) && setSelectedBook([...selectedBooks, book]) }} addSelectedBooks={() => {
                    dispatch({
                        type: 'update-category',
                        payload: { books: selectedBooks, id: id },
                    }); setShowModal(false)
                }} />
            </Modal>
        </div>
        <div className={style.booksContainer}>
            {
                books.length !== 0 && books.map((book) => {
                    return <BookCard key={book.id} book={book} confirmDelete={() => {
                        dispatch({
                            type: 'delete-book',
                            payload: { bookId: book.id, categoryId: id },
                        });

                    }} />
                })
            }

        </div>
    </div>)
}