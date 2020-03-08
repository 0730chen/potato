import Link from "next/link";
import NavCss from "../style/NavCss";
import Icon from '../component/Icon'

export default function Nav() {
    return (
        <NavCss className="Nav">
            <Link href="/"><a><Icon iconClass="my"/>代办</a></Link>
            <Link href="/about"><a>待办板</a></Link>
            <Link href="/blank"><a>数据统计</a></Link>
            <Link href="/my"><a>我的</a></Link>
        </NavCss>
    )
}