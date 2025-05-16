export const characters: DnDCharacter[] = [
    {
      name: 'akma',
      details: {
        fullName: 'Akma II',
        class: 'Paladin',
        subclass: 'Oath of Vengeance',
        background: 'Soldier',
        level: 3,
        species: 'Warforged'
      },
      description: {
        alignment: 'Neutral Good',
      },
      stats: {
        scores: {
            Str: 16,
            Dex: 14,
            Con: 12,
            Int: 8,
            Wis: 10,
            Cha: 15
        },
        proficiency: 2,
        proficientSkills: ['Athletics', 'Deception', 'Insight', 'Intimidation', 'Religion'],
        savingThrows: ['Wis', 'Cha'],
        hp: {
            max: 25,
            current: 25,
            dice: '3d10'
        },
        ac: 20
      }
    },
    {
      name: 'echo',
      details: {
          fullName: 'Echo Lehane',
          class: 'Rogue',
          subclass: 'Arcane Trickster',
          background: 'Artisan',
          level: 3,
          species: 'Human',

      },
      description: {
          alignment: 'Chaotic Good',

      },
      stats: {

          scores: {
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
          savingThrows: ['Dex', 'Int'],
          hp: {
            max: 21,
            current: 21,
            dice: '3d8'
          },
          ac: 16
      },
    },
    {
      name: 'thar',
      details: {
          fullName: 'Tharivol Oracane',
          class: 'Cleric',
          subclass: 'War Domain',
          background: 'Guide',
          level: 3,
          species: 'High Elf',
      },
      description: {
          alignment: 'Lawful Neutral',
      },
      stats: {

          scores: {
            Str: 12,
            Dex: 14,
            Con: 14,
            Int: 10,
            Wis: 17,
            Cha: 8
          },
          proficiency: 2,
          proficientSkills: ['Insight', 'Medicine', 'Perception', 'Stealth', 'Survival'],
          savingThrows: ['Wis', 'Cha'],
          hp: {
            max: 24,
            current: 24,
            dice: '3d8'
          },
          ac: 19
      }
    }
  ]