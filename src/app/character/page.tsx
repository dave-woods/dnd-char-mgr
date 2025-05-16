import Link from "next/link";

export default async function CharacterSelect() {
    return (
        <ul>
            <li><Link href={'/character/akma'}>Akma</Link></li>
            <li><Link href={'/character/echo'}>Echo</Link></li>
            <li><Link href={'/character/thar'}>Thar</Link></li>
        </ul>
    )
}