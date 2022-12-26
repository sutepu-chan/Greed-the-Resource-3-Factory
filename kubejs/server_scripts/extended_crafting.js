onEvent('recipes', e => {
  e.recipes.create.mechanical_crafting('extendedcrafting:crafting_core', [
    '    E    ',
    '  ECFCE  ',
    '  BFBFB  ',
    '  EBFBE  ',
    ' BBTIMBB ',
    'BBIGGGIBB'
  ],
  {
    C: 'craftingstation:crafting_station',
    E: 'extendedcrafting:elite_component',
    G: 'extendedcrafting:elite_catalyst',
    B: 'extendedcrafting:black_iron_ingot',
    F: 'extendedcrafting:frame',
    T: 'prettypipes:crafting_terminal',
    I: 'extendedcrafting:black_iron_block',
    M: 'prettypipes:high_crafting_module'
  }).id(`kubejs:extendedcrafting/mechanical_crafting/crafting_core`)
  e.recipes.bloodmagic.altar('extendedcrafting:pedestal', 'extendedcrafting:black_iron_block').upgradeLevel(4).altarSyphon(2000)
    draconicFusion(e, 'extendedcrafting:compressor', 3, 1000000, 'mekanism:ultimate_compressing_factory', [
      'pneumaticcraft:compressed_iron_gear',
      'extendedcrafting:elite_catalyst',
      'extendedcrafting:elite_catalyst',
      'extendedcrafting:elite_component',
      'extendedcrafting:elite_component',
      'pneumaticcraft:thermal_compressor',
      'pneumaticcraft:flux_compressor',
      'pneumaticcraft:electrostatic_compressor',
      'pneumaticcraft:advanced_liquid_compressor',
      'pneumaticcraft:advanced_liquid_compressor'
    ])
    e.recipes.createCompacting('extendedcrafting:elite_catalyst', [
      'extendedcrafting:elite_component',
      'extendedcrafting:elite_component',
      'extendedcrafting:elite_component',
      'extendedcrafting:elite_component',
      'extendedcrafting:black_iron_ingot'
  ]).heated()
  e.recipes.createCompacting('extendedcrafting:ultimate_catalyst', [
    'extendedcrafting:ultimate_component',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:ultimate_component',
    'extendedcrafting:black_iron_ingot'
  ]).superheated()
    //elite table
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "  A  ",
          " AAA ",
          "BBCBB",
          "DEFED",
          "DDFDD"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:elite_catalyst"
          },
          "B": {
            "item": "extendedcrafting:advanced_table"
          },
          "C": {
            "item": "minecraft:diamond_block"
          },
          "D": {
            "item": "extendedcrafting:elite_component"
          },
          "E": {
            "item": "minecraft:diamond"
          },
          "F": {
            "item": "extendedcrafting:black_iron_slate"
          }
        },
        "result": {
          "item": "extendedcrafting:elite_table"
        }
      })
    //ultimate ingot
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          "AAAAAAAAA",
          "ABCBCBCBA",
          "ACBCBCBCA",
          "ABCBCBCBA",
          "AAAAAAAAA",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "B": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "C": {
            "item": "extendedcrafting:black_iron_ingot"
          }
        },
        "result": {
          "item": "extendedcrafting:the_ultimate_ingot"
        }
      })
    //ultimate table
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   A   ",
          "BBACABB",
          "BDCCCDB",
          "DDDCDDD",
          " CCCCC ",
          "BBEEEBB",
          " BEEEB "
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ultimate_catalyst"
          },
          "B": {
            "item": "extendedcrafting:ultimate_component"
          },
          "C": {
            "item": "minecraft:emerald_block"
          },
          "D": {
            "item": "extendedcrafting:elite_table"
          },
          "E": {
            "item": "extendedcrafting:black_iron_slate"
          }
        },
        "result": {
          "item": "extendedcrafting:ultimate_table"
        }
      })
    //recipe bug of ultimate singularity
    e.custom({
      "type": "extendedcrafting:shapeless_table",
      "tier": 4,
      "ingredients": [
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:bronze\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:invar\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:electrum\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:compressed_iron\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:uranium\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:coal\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:terrasteel\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:redstone\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:wood\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:dirt\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:platinum\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:diamond\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:sand\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:iron\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:lumium\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:nickel\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:glowstone\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:stone\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:refined_obsidian\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:steel\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:enderium\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:emerald\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:gravel\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:netherite\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:constantan\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:draconium\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:aluminum\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:silver\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:netherstar\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:tin\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:manasteel\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:brass\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:elementium\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:copper\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:signalum\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:graphite\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:cobblestone\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:refined_glowstone\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:lead\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:forge_energy\"}"
        },
        {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:mushroom\"}"
        }
      ],
      "result": {
        "item": "extendedcrafting:ultimate_singularity"
      }
    })
    removeRecipeByOutput(e, [
        'extendedcrafting:compressor',
        'extendedcrafting:crafting_core',
        'extendedcrafting:ultimate_table',
        'extendedcrafting:elite_table',
        'extendedcrafting:the_ultimate_ingot',
        'extendedcrafting:ultimate_singularity',
        'extendedcrafting:pedestal'
    ])

})