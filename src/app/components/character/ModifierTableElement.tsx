'use client'

import { scoreToModi } from "@/_lib/util"

export default function ModifierTableElement({character, stat, savingThrow = false}: {
    character: DnDCharacter,
    stat: DnDStatName,
    savingThrow?: boolean
}) {
    const { scores, savingThrows, proficiency } = character.stats
    const calculatedBonus = scoreToModi(scores[stat]) + (savingThrow && savingThrows.includes(stat) ? proficiency : 0)
    return (
        <td>{calculatedBonus >= 0 ? '+' : ''}{calculatedBonus}</td>
    )
}