import '../style/reset.scss'
import Nav from "../component/Nav";

export default function Index() {
    return (
        <div className="container">
            <Nav/>
            <main>Hello Next.js</main>
        </div>
    );
}