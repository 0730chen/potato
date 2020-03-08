import Link from "next/link";
import NavCss from "../style/NavCss";
import Icon from '../component/Icon'
export default function Nav() {
    return (
        <NavCss className="Nav">
            <Link href="/"><a><Icon iconClass="wait"/>代办</a></Link>
            <Link href="/about"><a><Icon iconClass="document"/>待办板</a></Link>
            <Link href="/blank"><a><Icon iconClass="stc"/>数据统计</a></Link>
            <Link href="/my"><a><Icon iconClass="my"/>我的</a></Link>
        </NavCss>
    )
}