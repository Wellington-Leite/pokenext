import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return(
        <nav>
            <div>
                <Image src='/images/pokeball.png' width='40' height='40' alt="Pokenext"/>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/" >
                        {/* <a>Home</a> */}
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" >
                        {/* <a>Sobre</a> */}
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}