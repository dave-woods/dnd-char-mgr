export const characters: DnDCharacter[] = [
    {
      name: 'akma',
      fullName: 'Akma II',
      class: 'Paladin',
      subclass: 'Oath of Vengeance',
      background: 'Soldier',
      level: 3,
      species: 'Warforged',
      alignment: 'Neutral Good',
      stats: {
        Str: 16,
        Dex: 14,
        Con: 12,
        Int: 8,
        Wis: 10,
        Cha: 15
      },
      proficiency: 2,
      proficientSkills: ['Athletics', 'Deception', 'Insight', 'Intimidation', 'Religion'],
      savingThrows: ['Wis', 'Cha']
    },
    {
      name: 'echo',
      fullName: 'Echo Lehane',
      class: 'Rogue',
      subclass: 'Arcane Trickster',
      background: 'Artisan',
      level: 3,
      species: 'Human',
      alignment: 'Chaotic Good',
      stats: {
        Str: 13,
        Dex: 17,
        Con: 13,
        Int: 14,
        Wis: 10,
        Cha: 8
      },
      proficiency: 2,
      proficientSkills: ['Acrobatics', 'Deception', 'Investigation', 'Perception', 'Persuasion', 'Sleight of Hand', 'Stealth'],
      expertiseSkills: ['Perception', 'Stealth'],
      savingThrows: ['Dex', 'Int']
    },
    {
      name: 'thar',
      fullName: 'Tharivol Oracane',
      class: 'Cleric',
      subclass: 'War Domain',
      background: 'Guide',
      level: 3,
      species: 'High Elf',
      alignment: 'Lawful Neutral',
      stats: {
        Str: 12,
        Dex: 14,
        Con: 14,
        Int: 10,
        Wis: 17,
        Cha: 8
      },
      proficiency: 2,
      proficientSkills: ['Insight', 'Medicine', 'Perception', 'Stealth', 'Survival'],
      savingThrows: ['Wis', 'Cha']
    }
  ]