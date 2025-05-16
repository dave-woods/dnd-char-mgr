import { skillToStat } from "@/_lib/util";
import SkillTableRow from "@/app/components/character/SkillTableRow";
import styles from './character.module.css'
import { scoreToModi } from "@/_lib/util";
import ModifierTableElement from "@/app/components/character/ModifierTableElement";

export default async function Character({
    params
}: {
    params: Promise<{charName: string}>
}) {
    const { charName } = await params
    const character: DnDCharacter = await fetch(`http://localhost:3000/api/character/${charName}`).then(data => data.json())

    if (!character) {
        return (
            <div>Error. Character not known.</div>
        )
    }

    return (
    <main>
        <div className={styles.card}>
            {/* <h1 className="shortname">{character.name}</h1> */}
            <h2 className="longname">{character.details.fullName}</h2>
            <section className="details">
                <h3>Details</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Class</th>
                            <th>Subclass</th>
                            <th>Background</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{character.details.level}</td>
                            <td>{character.details.class}</td>
                            <td>{character.details.subclass}</td>
                            <td>{character.details.background}</td>
                            <td>{character.details.species}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="description">
                <h3>Description</h3>
                <div>
                    <h4>Alignment</h4>
                    <p>{character.description.alignment}</p>
                </div>
                {character.description.appearance ? <div>
                    <h4>Appearance</h4>
                    <p>{character.description.appearance}</p>
                </div> : ''}
                {character.description.backstory ? <div>
                    <h4>Background</h4>
                    <p>{character.description.backstory}</p>
                </div> : ''}
            </section>
            <section className="stats">
                <h3>Stats</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Str</th>
                            <th>Dex</th>
                            <th>Con</th>
                            <th>Int</th>
                            <th>Wis</th>
                            <th>Cha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="score">
                            <th>Score</th>
                            <td>{character.stats.scores.Str}</td>
                            <td>{character.stats.scores.Dex}</td>
                            <td>{character.stats.scores.Con}</td>
                            <td>{character.stats.scores.Int}</td>
                            <td>{character.stats.scores.Wis}</td>
                            <td>{character.stats.scores.Cha}</td>
                        </tr>
                        <tr className="modifier">
                            <th>Modifier</th>
                            {Object.keys(character.stats.scores).map((stat, idx) => {
                                return <ModifierTableElement key={idx} character={character} stat={stat as DnDStatName} />
                            })}
                        </tr>
                        <tr className="saving-throw">
                            <th>Saving Throw</th>
                            {Object.keys(character.stats.scores).map((stat, idx) => {
                                return <ModifierTableElement key={idx} character={character} stat={stat as DnDStatName} savingThrow/>
                            })}
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h3>Skills</h3>
                <table className={styles.table}>
                    <tbody>
                        {Object.keys(skillToStat).map((skillName, idx) => {
                            return <SkillTableRow key={idx} character={character} skill={skillName as DnDSkill}/>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    </main>
        )
}