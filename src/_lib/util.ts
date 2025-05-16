export const skillToStat = {
    'Acrobatics': 'Dex',
    'Animal Handling': 'Wis',
    'Arcana': 'Int',
    'Athletics': 'Str',
    'Deception': 'Cha',
    'History': 'Int',
    'Insight': 'Wis',
    'Intimidation': 'Cha',
    'Investigation': 'Int',
    'Medicine': 'Wis',
    'Nature': 'Int',
    'Perception': 'Wis',
    'Performance': 'Cha',
    'Persuasion': 'Cha',
    'Religion': 'Int',
    'Sleight of Hand': 'Dex',
    'Stealth': 'Dex',
    'Survival': 'Wis'
}

export const statToModi = (stat: number) => {
    return Math.floor((stat - 10) / 2)
}