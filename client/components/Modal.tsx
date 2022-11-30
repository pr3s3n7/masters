import style from './modal.module.scss'

const Modal = ({ modalActive, setModalActive, children }) => {
    const handleBackgroundClick = (e) => {
        e.preventDefault()
        setModalActive(false)
    }

    return <div className={style.modal__background} onClick={handleBackgroundClick}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
}

export default Modal