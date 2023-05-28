import { categoryReducer, initialState } from './categoryReducer'
import AddCategory from './components/AddCategory'
import Category from './components/Category';
import { useState, useReducer } from 'react';
import style from './Categories.module.scss';
import { Button } from "../UIElements";
import { Modal } from '../UIElements';

export default function Categories() {
    const [title, setTitle] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [state, dispatch] = useReducer(
        categoryReducer,
        initialState()
    );

    return <div className={style.root}>
        <div className={style.topBar}>
            <h3 className={style.title}>Categories</h3>
            <Button onClick={() => setShowModal(true)}>New Category</Button>
            <Modal show={showModal} handleClose={() => setShowModal(false)} width={310}>
                <AddCategory handleAddNewCategory={() => {
                    dispatch({
                        type: 'add-category',
                        payload: title,
                    }); setShowModal(false)
                }} handleChange={(e) => setTitle(e.target.value)} />
            </Modal>
        </div>
        {
            state?.categories?.length !== 0 && state.categories.map((category) => {
                return <Category key={category.id} title={category.title} id={category.id} state={state} books={category.books} dispatch={dispatch} />
            })
        }
    </div>
}