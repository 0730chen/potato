import Link from "next/link";
import NavCss from "../style/NavCss";
import Icon from '../component/Icon'
import {useRouter} from "next/router";

export default function Nav() {
    const router = useRouter();
    return (
        <NavCss className="Nav">
            <Link href="/"><a className={router.pathname === "/" ? "active" : ""} ><Icon iconClass="wait"/>代办</a></Link>
            <Link href="/about"><a className={router.pathname === "/about" ? "active" : ""}><Icon iconClass="document"/>待办板</a></Link>
            <Link href="/blank"><a className={router.pathname === "/blank" ? "active" : ""}><Icon iconClass="stc"/>数据统计</a></Link>
            <Link href="/my"><a className={router.pathname === "/my" ? "active" : ""}><Icon iconClass="my"/>我的</a></Link>
        </NavCss>
    )
}