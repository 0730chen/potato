import Link from "next/link";

export default function Index() {
    return (
        <div>
            <Link href='/next'>
                <a>next</a>
            </Link>
            <p>About</p>
        </div>
    );
}