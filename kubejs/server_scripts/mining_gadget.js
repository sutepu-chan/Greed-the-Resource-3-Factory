onEvent('recipes', e => {
    removeRecipeByID(e, [
        'mininggadgets:mininggadget_simple', //MK1
        'mininggadgets:mininggadget_fancy',  //MK2
        'mininggadgets:mininggadget', //MK3
        'mininggadgets:modificationtable',
    ])
    //MK1
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "  AA ",
          "AABBC",
          " DEBF",
          " DDFF",
          "   F "
        ],
        "key": {
          "A": {
            "item": "mininggadgets:upgrade_empty"
          },
          "B": {
            "item": "minecraft:gold_ingot"
          },
          "C": {
            "item": "minecraft:redstone"
          },
          "D": {
            "item": "minecraft:diamond"
          },
          "E": {
            "item": "allthemodium:vibranium_ingot"
          },
          "F": {
            "item": "minecraft:iron_ingot"
          }
        },
        "result": {
          "item": "mininggadgets:mininggadget_simple"
        }
    })
    //MK2
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   AA",
          " AABB",
          "CDEBB",
          " CCF ",
          "   F "
        ],
        "key": {
          "A": {
            "item": "mininggadgets:upgrade_empty"
          },
          "B": {
            "item": "minecraft:iron_ingot"
          },
          "C": {
            "item": "minecraft:diamond"
          },
          "D": {
            "item": "minecraft:redstone"
          },
          "E": {
            "item": "allthemodium:vibranium_ingot"
          },
          "F": {
            "item": "minecraft:gold_ingot"
          }
        },
        "result": {
          "item": "mininggadgets:mininggadget_fancy"
        }
    })
    //MK3  
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   A ",
          "BBCD ",
          "EEEFD",
          "BBCCD",
          "   C "
        ],
        "key": {
          "A": {
            "item": "minecraft:redstone"
          },
          "B": {
            "item": "mininggadgets:upgrade_empty"
          },
          "C": {
            "item": "minecraft:iron_ingot"
          },
          "D": {
            "item": "minecraft:gold_ingot"
          },
          "E": {
            "item": "minecraft:diamond"
          },
          "F": {
            "item": "allthemodium:vibranium_ingot"
          }
        },
        "result": {
          "item": "mininggadgets:mininggadget"
        }
    })
    //modification table
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          " AAA ",
          " ABA ",
          "CDDDC",
          "CEDEC",
          "CCCCC"
        ],
        "key": {
          "A": {
            "item": "mininggadgets:upgrade_empty"
          },
          "B": {
            "item": "rftoolsutility:screen"
          },
          "C": {
            "item": "minecraft:iron_ingot"
          },
          "D": {
            "item": "biggerreactors:graphite_ingot"
          },
          "E": {
            "item": "minecraft:redstone"
          }
        },
        "result": {
          "item": "mininggadgets:modificationtable"
        }
    })
})