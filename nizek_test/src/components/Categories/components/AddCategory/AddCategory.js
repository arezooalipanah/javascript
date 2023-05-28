import { Button, Input } from "../../../UIElements";
import style from './AddCategory.module.scss';

export default function AddCategory({ handleAddNewCategory , handleChange }) {
    return (
        <div className={style.root}>
            <label className={style.label}>New Category Modal</label>
            <Input type='text' label='Title' onChange={handleChange} />
            <Button onClick={handleAddNewCategory} style={{ float: 'right' }}>Add</Button>
        </div>
    )
}