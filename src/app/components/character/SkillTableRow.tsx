'use client'

import { skillToStat, statToModi } from "@/_lib/util"

export default function SkillTableRow({character, skill}: {
    character: DnDCharacter,
    skill: DnDSkill
}) {
    const stat = skillToStat[skill] as DnDStatName
    const calculatedBonus = statToModi(character.stats[stat]) + (character.proficientSkills.includes(skill) ? character.proficiency : 0) + (character.expertiseSkills?.includes(skill) ? character.proficiency : 0)
    return (
        <tr className={character.proficientSkills.includes('Acrobatics') ? 'proficient' : ''}>
            <td>{stat}</td>
            <td>{skill}</td>
            <td>{calculatedBonus >= 0 ? '+' : ''}{calculatedBonus}</td>
        </tr>
    )
}