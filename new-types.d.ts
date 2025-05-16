type DnDCharacter = {
    name: string,
    details: DnDCharacterDetails,
    description: DnDCharacterDescription,
    stats: DnDCharacterStats
}
type DnDCharacterDetails = {
    fullName: string,
    level: number,
    class: string,
    subclass: string,
    background: string,
    species: string
}
type DnDCharacterDescription = {
    alignment: 'Lawful Good' | 'Lawful Neutral' | 'Lawful Evil' | 'Neutral Good' | 'Neutral' | 'Neutral Evil' | 'Chaotic Good' | 'Chaotic Neutral' | 'Chaotic Evil',
    appearance?: string,
    backstory?: string
}
type DnDCharacterStats = {
    scores: DnDScores,
    proficiency: number,
    proficientSkills: DnDSkill[],
    expertiseSkills?: DnDSkill[],
    savingThrows: DnDStatName[]
    hp: DnDHitPoints,
    ac: number
}
type DnDCharacterEquipment = {
    items: DnDItem[]
}
type DnDHitPoints = {
    current: number,
    temp?: number,
    max: number,
    dice: `${number}${DnDDice}`
}
type DnDScores = {
    Str: number,
    Dex: number,
    Con: number,
    Int: number,
    Wis: number,
    Cha: number
}
type DnDStatName = 'Str' | 'Dex' | 'Con' | 'Int' | 'Wis' | 'Cha'
type DnDSkill = 'Acrobatics' | 'Animal Handling' | 'Arcana' | 'Athletics' | 'Deception' | 'History' | 'Insight' | 'Intimidation' | 'Investigation' | 'Medicine' | 'Nature' | 'Perception' | 'Performance' | 'Persuasion' | 'Religion' | 'Sleight of Hand' | 'Stealth' | 'Survival'
type DnDDice = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100'
type DnDAction = {
    type: string,
    description: string
}
interface DnDItem {
    name: string,
    magical: boolean,
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary' | 'Artifact'
    type: string,
    description: string,
    effect?: string,
    weight: number,
    use: 'Passive' | 'Action' | 'Bonus Action' | 'Reaction'
}
interface DnDArmour extends DnDItem {
    type: 'Armour',
    acBonus: number
}
interface DnDWeapon extends DnDItem {
    type: 'Weapon',
    mastery: string,
    properties: string[],
    damage: DnDDamage[],
    reach: `${number} ft` | `${number}/${number} ft`,
    targets: string
}
type DnDDamage = {
    damageType: string,
    fixedDamage: number,
    diceDamage: `${number}${DnDDice}`
}