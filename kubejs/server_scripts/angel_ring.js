onEvent('recipes', e => {
  //diamond ring
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "BDEDB",
      "FGHGI",
      "BDEDB",
      "ABJBA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond_block"
      },
      "B": {
        "item": "thermal:diamond_dust"
      },
      "C": {
        "item": "minecraft:squid_spawn_egg"
      },
      "D": {
        "item": "create:propeller"
      },
      "E": {
        "item": "mekanism:hdpe_elytra",
      },
      "F": {
        "item": "minecraft:chicken_spawn_egg"
      },
      "G": {
        "item": "minecraft:elytra",
      },
      "H": {
        "item": "allthemodium:allthemodium_ingot"
      },
      "I": {
        "item": "minecraft:blaze_spawn_egg"
      },
      "J": {
        "item": "minecraft:ghast_spawn_egg"
      }
    },
    "result": {
      "item": "angelring:itemdiamondring"
    }
  })
  //angel ring
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AA   AA",
      " AA AA ",
      "  A A  ",
      " BBCBB ",
      " BDEDB ",
      " BBDBB ",
      "  BBB  "
    ],
    "key": {
      "A": {
        "item": "minecraft:feather"
      },
      "B": {
        "item": "create:precision_mechanism"
      },
      "C": {
        "item": "angelring:itemdiamondring"
      },
      "D": {
        "item": "extrabotany:goldcloth"
      },
      "E": {
        "item": "ironjetpacks:unobtainium_jetpack"
      }
    },
    "result": {
      "item": "angelring:itemring"
    }
  })
  removeRecipeByOutput(e, [
    'angelring:itemring',
    'angelring:itemdiamondring'
  ])
})