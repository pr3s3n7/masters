import { observer } from "mobx-react-lite"
import style from './profile.module.scss'
import EditIcon from '@mui/icons-material/Edit';
import {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../../pages/_app";
import {useRouter} from "next/router";

const Profile = () => {
    const {store} = useContext(Context)
    const router = useRouter()

    const [name, setName] = useState(store.user.name)
    const [login, setLogin] = useState(store.user.login)
    const [email, setEmail] = useState(store.user.email)
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState(store.user.about)

    return <div className={style.profile}>
                <div className={style.main__picture}>
                    <button className={style.picture__set}>
                        <input type={"file"} id={"upload"}
                               className={style.set__upload} />
                        <EditIcon
                            sx={{
                                width: 30,
                                height: 30,
                                color: 'white',
                            }}
                            className={style.set__edit} />
                    </button>
                </div>
                <div className={style.main__info}>
                    <div className={style.info__block}>
                        <label>
                            <span className={style.info__title}>Имя</span>
                            <input name={"name"} className={style.info__input} value={name} onChange={(e) => setName(e.currentTarget.value)} />
                        </label>
                        <label>
                            <span className={style.info__title}>Логин</span>
                            <input name={"login"} className={style.info__input} value={login} onChange={(e) => setLogin(e.currentTarget.value)} />
                        </label>
                    </div>
                    <div className={style.info__block}>
                        <label>
                            <span className={style.info__title}>Электронная почта</span>
                            <input name={"email"} type={"email"} className={style.info__input} value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                        </label>
                        <label>
                            <span className={style.info__title}>Пароль</span>
                            <input name={"password"} type={"password"} className={style.info__input} value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                        </label>
                    </div>
                    <label>
                        <span className={style.info__title}>О себе</span>
                        <textarea className={style.info__textarea} rows={5} onChange={(e) => setAbout(e.currentTarget.value)}>
                            {about}
                        </textarea>
                    </label>
                    <div className={style.info__block}>
                        <button className={style.info__button_gradient} onClick={async() => {
                            await store.saveProfileInfo(name, login, email, password, about)
                        }}>Сохранить</button>
                        <button className={style.info__button} onClick={async() => {
                            await store.deleteProfile()
                            if (!store.isAuth) await router.push('/')
                        }}>Удалить профиль</button>
                    </div>
            </div>
    </div>
}

export default observer(Profile)