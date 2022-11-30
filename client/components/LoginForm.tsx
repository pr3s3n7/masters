import React, {FC, useContext, useState} from 'react';
import {Context} from "../pages/_app";
import {observer} from 'mobx-react-lite'
import {useRouter} from "next/router";

const LoginForm: FC = () => {
    const [login, setLogin] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)
    const router = useRouter()

    return (
        <div>
            <input
                onChange={e => setLogin(e.currentTarget.value)}
                value={login}
                type="text"
                placeholder={"Введите свой логин:"}/>
            <input
                onChange={e => setEmail(e.currentTarget.value)}
                value={email}
                type="email"
                placeholder={"Введите свой E-mail:"}/>
            <input
                onChange={e => setPassword(e.currentTarget.value)}
                value={password}
                type="password"
                placeholder={"Введите свой пароль:"}/>
            <button onClick={async() => {
                await store.login(email, password)
                if (store.isAuth) await router.push('/dashboard')
            }}>Логин</button>
            <button onClick={async() => {
                await store.registration(login, email, password)
                if (store.isAuth) await router.push('/dashboard')
            }}>Регистрация</button>
            <button onClick={() => store.logout()}>Выйти</button>
        </div>
    );
};

export default observer(LoginForm);