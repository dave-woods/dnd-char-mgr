type DnDCharacter = {
    name: string,
    fullName: string,
    level: number,
    class: string,
    subclass: string,
    background: string,
    species: string,
    alignment: 'Lawful Good' | 'Lawful Neutral' | 'Lawful Evil' | 'Neutral Good' | 'Neutral' | 'Neutral Evil' | 'Chaotic Good' | 'Chaotic Neutral' | 'Chaotic Evil',
    appearance?: string,
    backstory?: string,
    stats: DnDScores,
    proficiency: number,
    proficientSkills: DnDSkill[],
    expertiseSkills?: DnDSkill[],
    savingThrows: DnDStatName[]
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