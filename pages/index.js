import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sorvteria Diniz</title>
            </Head>
            <div className="container">
                <h1>Home</h1>
                <Link href="./cardapio">
                    <a>Cardapio</a>
                </Link>
            </div>
        </>
    )
}
