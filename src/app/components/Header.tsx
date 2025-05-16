import Link from "next/link";
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <Link href={'/'}>Home</Link>
                <Link href={'/character'}>Characters</Link>
            </nav>
        </header>
    )
}