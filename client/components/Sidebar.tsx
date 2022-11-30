import style from './sidebar.module.scss'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useContext} from "react";
import {Context} from "../pages/_app";
import {observer} from "mobx-react-lite";
import Link from 'next/link'

const Sidebar = () => {
    const {store} = useContext(Context)
    const blueGradient = {
        background: 'linear-gradient(135deg, #38cbd2, #34afdb)',
        color: 'white'
    }

    return <aside className={store.isSidebarOpen ? style.sidebar : style.sidebar_closed}>
        <ul>
            <li className={store.isSidebarOpen ? style.list__item : style.list__item_closed} style={(store.currentPageName == '/' || store.currentPageName == '/dashboard') ? blueGradient : null}>
                <Link href={'/'}>
                <div className={style.item__wrapper}>
                    <DashboardIcon sx={{
                        width: 60,
                        height: 60
                    }} />
                    <span className={store.isSidebarOpen ? style.item__title : style.item__title_closed}>Главная</span>
                </div>
                </Link>
            </li>
            <li className={store.isSidebarOpen ? style.list__item : style.list__item_closed} style={store.currentPageName == '/services' ? blueGradient : null}>
                <Link href={'/services'}>
                <div className={style.item__wrapper}>
                <LocalLaundryServiceIcon sx={{
                    width: 60,
                    height: 60
                }} />
                <span className={store.isSidebarOpen ? style.item__title : style.item__title_closed}>Услуги</span>
                </div>
                </Link>
            </li>
            <li className={store.isSidebarOpen ? style.list__item : style.list__item_closed} style={store.currentPageName == '/requests' ? blueGradient : null}>
                <Link href={'/requests'}>
                <div className={style.item__wrapper}>
                <EmergencyShareIcon sx={{
                    width: 60,
                    height: 60,
                }} />
                <span className={store.isSidebarOpen ? style.item__title : style.item__title_closed}>Запросы</span>
                </div>
                </Link>
            </li>
            <li className={store.isSidebarOpen ? style.list__item : style.list__item_closed} style={store.currentPageName == '/ratings' ? blueGradient : null}>
                <Link href={"/ratings"}>
                <div className={style.item__wrapper}>
                    <TrendingUpIcon sx={{
                        width: 60,
                        height: 60,
                    }} />
                    <span className={store.isSidebarOpen ? style.item__title : style.item__title_closed}>Рейтинг</span>
                </div>
                </Link>
            </li>
        </ul>
    </aside>
}

export default observer(Sidebar)