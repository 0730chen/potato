import Nav from "../component/Nav";
import Button from "../style/aboutCss";
export default function Index() {
    return (
        <div className="container">
            <Nav/>
            <main>
                <div>一个添加事件的按钮</div>
                <Button>添加事件</Button>
            </main>
        </div>
    );
}