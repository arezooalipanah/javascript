import { useState } from "react";
import style from './BookCard.module.scss';
import { Button } from "../../../UIElements";
import { Modal } from '../../../../components/UIElements'

export default function BookCard({ book, confirmDelete }) {
    const { title, thumbnail } = book;
    const [showModal, setShowModal] = useState(false);


    return (
        <div className={style.root}>
            <Button onClick={() => setShowModal(true)} >Delete</Button>
            <div className={style.top}>
                <img src={thumbnail} />
            </div>
            <div className={style.titleBar}>{title}</div>
            <Modal show={showModal} handleClose={() => setShowModal(false)} width={310}>
                <h4>Are you sure??</h4>
                <div>
                    <Button onClick={() => { confirmDelete(); setShowModal(false) }} style={{ marginRight: 8 }}>Yes</Button>
                    <Button onClick={() => setShowModal(false)} >NO</Button>
                </div>
            </Modal>
        </div>
    )
}