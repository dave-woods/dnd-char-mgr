import Link from "next/link";

export default async function CharacterSelect() {
    const knownCharacters: DnDCharacter[] = await fetch('http://localhost:3000/api/character').then(data => data.json())
    return (
        <ul>
            {knownCharacters.map((kc, idx) => {
                return <li key={idx}>
                    <Link href={`/character/${kc.name}`}>{kc.details.fullName}</Link>
                </li>
            })}
        </ul>
    )
}