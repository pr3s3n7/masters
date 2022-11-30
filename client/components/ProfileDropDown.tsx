import {observer} from "mobx-react-lite";
import style from './profile-drop-down.module.scss'
import BadgeIcon from '@mui/icons-material/Badge';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import {useContext} from "react";
import {Context} from "../pages/_app";
import Link from "next/link";
import {useRouter} from "next/router";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ChatIcon from '@mui/icons-material/Chat';

const ProfileDropDown = () => {
    const {store} = useContext(Context)
    const router = useRouter()

    const blueGradient = {
        background: 'linear-gradient(135deg, #38cbd2, #34afdb)',
        color: 'white'
    }

    return <div className={style.wrapper} onClick={() => store.isProfileDropDown = !store.isProfileDropDown}>
        <div className={style.dropdown} onClick={(e) => e.stopPropagation()}>
        <ul className={style.dropdown__list}>
            <li className={style.list__item} style={store.currentPageName.split('/')[1] == 'master' ? blueGradient : null}>
                <Link href={`/master/${store.user.login}`}>
                    <div className={style.item__wrapper}>
                        <span>Профиль</span>
                        <BadgeIcon sx={{
                            width: 60,
                            height: 60,
                            color: 'var(--light-gold);'
                        }} />
                    </div>
                </Link>
            </li>
            <li className={style.list__item} style={store.currentPageName.split('/')[1] == 'settings' ? blueGradient : null}>
                <Link href={`/settings`}>
                    <div className={style.item__wrapper}>
                        <span>Настройки</span>
                        <SettingsIcon sx={{
                            width: 60,
                            height: 60,
                            color: 'var(--light-gold);'
                        }} />
                    </div>
                </Link>
            </li>
            {window.screen.width <= 600 && <li className={style.list__item} style={store.currentPageName.split('/')[1] == 'chats' ? blueGradient : null}>
                <Link href={`/chats`}>
                    <div className={style.item__wrapper}>
                        <span>Чаты</span>
                        <ChatIcon sx={{
                            width: 60,
                            height: 60,
                            color: 'var(--light-gold);'
                        }} />
                    </div>
                </Link>
            </li>}
            <li className={style.list__item}>
                <div className={style.item__wrapper} onClick={async() => {
                    store.isProfileDropDown = false
                    await store.logout()
                    if (!store.isAuth) await router.push('/auth')
                }}>
                    <span style={{ fontSize: '1rem'}}>ВЫЙТИ</span>
                    <ExitToAppIcon sx={{
                        width: 32,
                        height: 32,
                        color: 'var(--light-gold);'
                    }}
                    className={style.exit__picture} />
                </div>
            </li>
        </ul>
    </div>
    </div>
}

export default observer(ProfileDropDown)