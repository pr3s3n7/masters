import style from './header.module.scss'
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ChatIcon from '@mui/icons-material/Chat';
import {useContext} from "react";
import {Context} from "../pages/_app";
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

const Header = () => {
    const {store} = useContext(Context)
    const router = useRouter()

    return <header className={style.header}>
        <button onClick={() => {
            if (window.screen.width <= 600) store.isProfileDropDown = false
            store.isSidebarOpen = !store.isSidebarOpen
        }} className={style.header__burger}>
            {store.isSidebarOpen ? <CloseIcon sx={{
                width: 40,
                height: 40,
                color: 'var(--blue);'
            }} /> : <MenuIcon sx={{
                width: 40,
                height: 40,
                color: 'var(--blue);'
            }} />}
        </button>
        {/*<div className={style.header__wrapper}>*/}
        {/*<nav className={style.header__navigation}>*/}
        {/*    <ul className={style.navigation__list}>*/}
        {/*        <li className={style.list__item}><Link href={"/services"}>услуги</Link></li>*/}
        {/*        <li className={style.list__item}><Link href={"/registration"}>стать мастером</Link></li>*/}
        {/*    </ul>*/}
        {/*</nav>*/}
        {/*</div>*/}
        <Link href={"/"}>
            <div className={style.header__index}>
                <span className={style.header__title}>MASTERS</span>
            </div>
        </Link>
        {store.isAuth ?
        <div className={style.right_side}>
            <button className={style.header__chats}>
                <Link href={'/chats'}>
                    <ChatIcon sx={{
                        width: 40,
                        height: 40,
                        color: 'var(--blue);'
                    }}/>
                </Link>
            </button>
            {/*MarkUnreadChatAltIcon*/}
            <button className={style.header__button} onClick={() => {
                if (window.screen.width <= 600) store.isSidebarOpen = false
                store.isProfileDropDown = !store.isProfileDropDown
            }}>
                <AccountCircleIcon sx={{
                    width: 40,
                    height: 40,
                    color: 'var(--blue);'
                }}
                className={style.profile__picture}/>
                <ArrowDropDownIcon sx={{
                    width: 20,
                    height: 20,
                    color: 'var(--blue);'
                }}
                className={store.isProfileDropDown ? style.profile__dropdown_opened : style.profile__arrowPicture} />
            </button>
        </div> : <div className={style.header__auth} onClick={() => router.push('/auth')} style={store.currentPageName == '/auth' ? {backgroundColor: '#BF4342', color: 'white'} : null}>
                Вход
        </div>}
    </header>
}

export default observer(Header)