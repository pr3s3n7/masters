import {FC, useContext, useEffect} from "react";
import {Context} from "./_app";
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

const Main: FC = () => {
    const {store} = useContext(Context)
    const router = useRouter()

    if (store.isAuth) router.push('/dashboard')

    return <>
    </>
}

export default observer(Main)