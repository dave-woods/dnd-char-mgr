import Link from "next/link";

const knownCharacters = ['thar', 'echo', 'akma', 'nib']

export default async function Character({
    params
}: {
    params: Promise<{charName: string}>
}) {
    const { charName } = await params
    if (!knownCharacters.includes(charName)) {
        return (
            <div>Error. Character not known.</div>
        )
    }
    return (
    <main>
        <div className="character-card">
            <h1 className="shortname">{charName}</h1>
            <h2 className="longname">{charName}</h2>
            <section className="details">
                <h3>Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Class</th>
                            <th>Subclass</th>
                            <th>Background</th>
                            <th>Species</th>
                            <th>Alignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>_</td>
                            <td>_</td>
                            <td>_</td>
                            <td>_</td>
                            <td>_</td>
                            <td>_</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="description">
                <h3>Description</h3>
                <h4>Appearance</h4>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolorem corporis magnam, aliquid fuga temporibus iusto est perferendis voluptate consequuntur accusamus libero esse, sapiente autem. Quo ex ipsam modi nemo.</p>
                </div>
                <h4>Background</h4>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ipsum praesentium officiis eaque aliquam, ea minus eius, odit, ex quaerat architecto temporibus molestiae magni numquam aperiam ullam adipisci ut saepe.</p>
                </div>
            </section>
            <section className="stats">
                <h3>Stats</h3>
                <table>
                    <thead>
                        <tr>
                            <td></td>
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
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                        <tr className="modifier">
                            <th>Modifier</th>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                        </tr>
                        <tr className="saving-throw">
                            <th>Saving Throw</th>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                            <td>+0</td>
                        </tr>
                    </tbody>
                </table>
                <table className="skills">
                    <tr className="acrobatics">
                        <td>Dex</td>
                        <td>Acrobatics</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="animal-handling">
                        <td>Wis</td>
                        <td>Animal Handling</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="arcana">
                        <td>Int</td>
                        <td>Arcana</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="athletics">
                        <td>Str</td>
                        <td>Athletics</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="deception">
                        <td>Cha</td>
                        <td>Deception</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="history">
                        <td>Int</td>
                        <td>History</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="insight">
                        <td>Wis</td>
                        <td>Insight</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="intimidation">
                        <td>Cha</td>
                        <td>Intimidation</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="investigation">
                        <td>Int</td>
                        <td>Investigation</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="medicine">
                        <td>Wis</td>
                        <td>Medicine</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="nature">
                        <td>Int</td>
                        <td>Nature</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="perception">
                        <td>Wis</td>
                        <td>Perception</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="performance">
                        <td>Cha</td>
                        <td>Performance</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="persuasion">
                        <td>Cha</td>
                        <td>Persuasion</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="religion">
                        <td>Int</td>
                        <td>Religion</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="sleight-of-hand">
                        <td>Dex</td>
                        <td>Slight Of Hand</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="stealth">
                        <td>Dex</td>
                        <td>Stealth</td>
                        <td className="modifier">+0</td>
                    </tr><tr className="survival">
                        <td>Wis</td>
                        <td>Survival</td>
                        <td className="modifier">+0</td>
                    </tr>
                </table>
            </section>
        </div>
    </main>
        )
}