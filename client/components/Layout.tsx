import Header from "./Header";
import style from './layout.module.scss'
import Sidebar from "./Sidebar";
import {Context} from "../pages/_app";
import {useContext, useEffect} from 'react'
import { observer } from "mobx-react-lite";
import ProfileDropDown from "./ProfileDropDown";
import {useRouter} from "next/router";

const Layout = ({ children }) => {
    const {store} = useContext(Context)
    const router = useRouter()

    store.currentPageName = router.asPath

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    return <div>
        <Header />
        <Sidebar />
        {store.isProfileDropDown && <ProfileDropDown />}
        <div className={store.isSidebarOpen ? style.main_sidebarOpen : style.main}>
            {children}
        </div>
    </div>
}

export default observer(Layout)