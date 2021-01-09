import Head from 'next/head';
import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <Head>
                <title>Sorvteria Diniz</title>
            </Head>
            <div className="container">
                <h1>Cardapio</h1>
                <Link href="./">
                    <a>Inicio</a>
                </Link>
            </div>
        </>
    )
}