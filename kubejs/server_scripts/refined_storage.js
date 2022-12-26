onEvent('recipes', e => {
    //===== remove recipes =====//
    removeRecipeByOutput(e, [
      'cabletiers:ultra_exporter',
      'cabletiers:ultra_importer',
      'cabletiers:ultra_destructor',
      'cabletiers:ultra_constructor',
      'cabletiers:ultra_disk_manipulator',
      'cabletiers:ultra_requester',
      'cabletiers:creative_disk_manipulator',
      'cabletiers:creative_requester',
      'cabletiers:creative_importer',
      'cabletiers:creative_constructor',
      'cabletiers:creative_destructor',
      'cabletiers:creative_exporter'
    ])
    //===== ultra tier cables =====//
    let ultracrafting = (output) => {
        output.forEach( m=> {
          e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": [
              "  A  ",
              " BCB ",
              "CDEDC",
              "BFBFB",
              " BCB "
            ],
            "key": {
              "A": {
                "item": "allthecompressed:nether_star_block"
              },
              "B": {
                "item": "minecraft:diamond_block"
              },
              "C": {
                "item": m.replace('ultra','elite')
              },
              "D": {
                "item": "refinedstorage:advanced_processor"
              },
              "E": {
                "item": "allthecompressed:nether_star_block"
              },
              "F": {
                "item": "refinedstorage:improved_processor"
              }
            },
            "result": {
              "item": m
            }
          })
        })
    }
    ultracrafting(['cabletiers:ultra_exporter', 'cabletiers:ultra_importer', 'cabletiers:ultra_destructor', 'cabletiers:ultra_constructor', 'cabletiers:ultra_disk_manipulator', 'cabletiers:ultra_requester'])
    //===== creative tier cables =====//
    let creativecrafting = (output) => {
        output.forEach(m => {
            e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 2,
                "pattern": [
                  "  A  ",
                  " BCB ",
                  "ADEFA",
                  "BCACB",
                  " AAA "
                ],
                "key": {
                  "A": {
                    "item": "minecraft:netherite_block"
                  },
                  "B": {
                    "item": m.replace('creative','ultra')
                  },
                  "C": {
                    "item": "minecraft:dragon_head"
                  },
                  "D": {
                    "item": "refinedstorage:advanced_processor"
                  },
                  "E": {
                    "item": "draconicevolution:awakened_draconium_block"
                  },
                  "F": {
                    "item": "refinedstorage:improved_processor"
                  }
                },
                "result": {
                  "item": m
                }
              })
        })
    }
    creativecrafting(['cabletiers:creative_disk_manipulator', 'cabletiers:creative_requester', 'cabletiers:creative_importer', 'cabletiers:creative_constructor', 'cabletiers:creative_destructor', 'cabletiers:creative_exporter'])
    //===== crafter recipe =====//
    utils.listOf([
      'extrastorage:gold_crafter',
      'extrastorage:diamond_crafter',
      'extrastorage:netherite_crafter'
    ]).forEach(crafter => {
      e.replaceInput({output:crafter}, 'extrastorage:neural_processor', 'extradisks:withering_processor')
    })
    //===== fix disappear requestor recipe =====//
    e.shaped('cabletiers:elite_requester', ['BCB', 'IPE', 'BCB'], {
      B: 'minecraft:iron_block',
      I: 'refinedstorage:importer',
      E: 'refinedstorage:exporter',
      P: 'refinedstorage:advanced_processor',
      C: 'minecraft:chest'
    }).id(`kubejs:cabletiers/elite_requester`)
    e.shaped('cabletiers:elite_requester', ['BCB', 'EPI', 'BCB'], {
      B: 'minecraft:iron_block',
      I: 'refinedstorage:importer',
      E: 'refinedstorage:exporter',
      P: 'refinedstorage:advanced_processor',
      C: 'minecraft:chest'
    }).id(`kubejs:cabletiers/reflect/elite_requester`)

})