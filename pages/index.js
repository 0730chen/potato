import '../style/reset.scss'
import Nav from "../component/Nav";
import Tags from "../component/Tags";

export default function Index() {
    return (
        <div className="container">
            <Nav/>
            <main>
                <Tags name="代办是指需要专注的事" tag="25分钟"/>
                <Tags name="点击添加按钮添加代办事项" tag="10分钟"/>
                <Tags name="点击代办编辑或删除" tag="5分钟"/>
                <Tags name="点击开始按钮，开始计时" tag="1分钟"/>
            </main>
        </div>
    );
}