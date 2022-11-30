import {observer} from "mobx-react-lite";
import style from './index.module.scss'
import Tool from "../../components/dashboard/Tool";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {useContext, useEffect} from "react";
import {Context} from "../_app";
import {useRouter} from "next/router";

const Dashboard = () => {
    const {store} = useContext(Context)
    const router = useRouter()

    useEffect(() => {
        !store.isAuth && router.push('/')
        console.log(store)
    }, [])

    return <div className={style.wrapper}>
        <h1 className={style.dashboard__title}>Панель инструментов</h1>
        <div className={style.dashboard__tools}>
            <Tool background={"linear-gradient(135deg, #DFC1FF, #34afdb)"} uri={"/dashboard/analytic"}>
                <AutoGraphIcon sx={{
                    width: 80,
                    height: 80,
                    color: 'white'
                }} />
                <div className={style.tool__info}>
                    <h4 className={style.info__title}>Аналитика</h4>
                    <p className={style.info__description}>Вся аналитика в одном месте</p>
                </div>
            </Tool>
            <Tool background={"linear-gradient(135deg, #39c, #96c)"} uri={"/dashboard/achievements"}>
                <EmojiEventsIcon sx={{
                    width: 80,
                    height: 80,
                    color: 'white'
                }} />
                <div className={style.tool__info}>
                    <h4 className={style.info__title}>Уровни и достижения</h4>
                    <p className={style.info__description}>Бонусы для вас!</p>
                </div>
            </Tool>
            <Tool background={"linear-gradient(135deg, #3cc, #39c)"} uri={"/dashboard/finance"}>
                <AccountBalanceIcon sx={{
                    width: 80,
                    height: 80,
                    color: 'white'
                }} />
                <div className={style.tool__info}>
                    <h4 className={style.info__title}>Финансы</h4>
                    <p className={style.info__description}>Управляйте денежными средствами</p>
                </div>
            </Tool>
            <Tool background={"linear-gradient(135deg, #fc9, #f69)"} uri={"/dashboard/task-tracker"}>
                <TaskAltIcon sx={{
                    width: 80,
                    height: 80,
                    color: 'white'
                }} />
                <div className={style.tool__info}>
                    <h4 className={style.info__title}>Менеджер задач</h4>
                    <p className={style.info__description}>Ваш прогресс по заданиям</p>
                </div>
            </Tool>
            <Tool background={"linear-gradient(135deg, #ffd7f0 , #e11a53)"}  uri={"/dashboard/schedule"}>
                <ScheduleIcon sx={{
                    width: 80,
                    height: 80,
                    color: 'white'
                }} />
                <div className={style.tool__info}>
                    <h4 className={style.info__title}>Расписание</h4>
                    <p className={style.info__description}>Распоряжаться временем? Запросто!</p>
                </div>
            </Tool>
            <Tool background={"linear-gradient(135deg, #ffc1c1, #db3f34)"} uri={"/dashboard/partnership"}>
                <GroupAddIcon sx={{
                    width: 80,
                    height: 80,
                    color: 'white'
                }} />
                <div className={style.tool__info}>
                    <h4 className={style.info__title}>Партнёрская программа</h4>
                    <p className={style.info__description}>Сотрудничество</p>
                </div>
            </Tool>
        </div>
    </div>
}

export default observer(Dashboard)