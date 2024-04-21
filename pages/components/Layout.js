import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

export default function Layout({children}){
    return(
        <>
            <Head>
                <title>PokeNext</title>
                <meta name="description" content="Pokenext aula teste" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel='shortcut icon' href='/images/favicon.ico'></link>
            </Head>
            <Navbar/>

            <main>{children}</main>

            <Footer/>
        </>
    )
}