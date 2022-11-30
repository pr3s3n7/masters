import { observer } from "mobx-react-lite"
import style from './index.module.scss'
import {useContext, useState} from "react";
import {Context} from "../_app";
import LoginForm from "../../components/LoginForm";
import Profile from "../../components/profile";

const Master = () => {
    const {store} = useContext(Context)
    const [isEditMode, setEditMode] = useState(false)

    return <div className={style.wrapper}>
        {isEditMode ? <Profile /> :
            <button onClick={() => setEditMode(true)}>
                Режим редактирования
            </button>}
    </div>
}

export default observer(Master)