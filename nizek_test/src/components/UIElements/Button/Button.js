import style from './Button.module.scss';

export function Button({ onClick, children, ...props }) {
    return (
        <button
            onClick={onClick}
            className={style.root}
            type='button'
            {...props}
        >
            {children}
        </button>)
}