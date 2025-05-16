'use client'

import { skillToStat, scoreToModi } from "@/_lib/util"

export default function SkillTableRow({character, skill}: {
    character: DnDCharacter,
    skill: DnDSkill
}) {
    const stat = skillToStat[skill] as DnDStatName
    const { scores, proficiency, proficientSkills, expertiseSkills} = character.stats
    const calculatedBonus = scoreToModi(scores[stat]) + (proficientSkills.includes(skill) ? proficiency : 0) + (expertiseSkills?.includes(skill) ? proficiency : 0)
    return (
        <tr className={proficientSkills.includes('Acrobatics') ? 'proficient' : ''}>
            <td>{stat}</td>
            <td>{skill}</td>
            <td>{calculatedBonus >= 0 ? '+' : ''}{calculatedBonus}</td>
        </tr>
    )
}