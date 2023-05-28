import style from './Input.module.scss';

export function Input({label, type, onChange, ...props}) {
    return (
        <div className={style.root}>
            <label>{label}</label>
            <input type={type} onChange={onChange} {...props}/>
        </div>

    )
}