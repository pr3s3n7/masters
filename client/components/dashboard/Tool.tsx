import style from './tool.module.scss'
import Link from "next/link";

const Tool = ({ children, background, uri }) => {

    return <Link href={uri}>
        <div className={style.tool} style={{ background }}>
        {children}
    </div>
    </Link>
}

export default Tool
