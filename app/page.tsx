import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl font-bold">Drive Insight</h1>
            <div className="flex flex-row gap-4 text-secondary">
                <Link href="/about">About</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/guides">Guides</Link>
                <Link href="/support">Support</Link>
                <Link href="/store">Store</Link>
            </div>
        </div>
    );
}
