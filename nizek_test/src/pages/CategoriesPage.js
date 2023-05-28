import { useContext } from "react";
import style from './index.module.scss';
import { Navigate } from "react-router-dom";
import Categories from "../components/Categories";
import { UserContext } from '../context/UserContext';

export default function CategoriesPage() {
    const { user } = useContext(UserContext);

    return <>{user ? <div className={style.pages}><Categories /></div>: <Navigate replace to="/" />}</>
}