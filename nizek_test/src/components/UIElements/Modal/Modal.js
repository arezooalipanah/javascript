import styles from './Modal.module.scss';

export function Modal({ children, handleClose, show, width }) {
    return (<div className={show ? [styles.modal, styles.displayBlock].join(' ') : [styles.modal, styles.displayNone].join(' ')}>
        <section className={styles.modalMain} style={{ width: width }}>
            <button className={styles.close} onClick={handleClose}>
                close
            </button>
            <div className={styles.body}>
                {children}
            </div>
        </section>
    </div>)
}