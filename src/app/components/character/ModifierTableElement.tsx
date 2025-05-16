'use client'

import { statToModi } from "@/_lib/util"

export default function ModifierTableElement({character, stat, savingThrow = false}: {
    character: DnDCharacter,
    stat: DnDStatName,
    savingThrow?: boolean
}) {
    const calculatedBonus = statToModi(character.stats[stat]) + (savingThrow && character.savingThrows.includes(stat) ? character.proficiency : 0)
    return (
        <td>{calculatedBonus >= 0 ? '+' : ''}{calculatedBonus}</td>
    )
}