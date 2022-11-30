import {observer} from "mobx-react-lite";
import LoginForm from "../../components/LoginForm";
import {useContext} from "react";
import {Context} from "../_app";

const Auth = () => {
    const {store} = useContext(Context)

    return <>
        <h1>{store.isAuth ? 'Пользователь авторизован' : 'Пользователь не авторизован'}</h1>
        <LoginForm />
    </>
}

export default observer(Auth)