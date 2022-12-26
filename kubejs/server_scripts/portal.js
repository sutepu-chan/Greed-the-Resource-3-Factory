onEvent('recipes', e=> {
    removeRecipeByOutput(e, [
        'javd:portal_block',
        'jamd:mine_portal_block',
        'allthemodium:teleport_pad'
    ])
    e.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 50000,
        "input": {
          "item": "minecraft:flint_and_steel"
        },
        "ingredients": [
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:blaze_rod"
          },
          {
            "item": "minecraft:ghast_tear"
          },
          {
            "item": "minecraft:ender_eye"
          },
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:end_rod"
          },
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:blaze_rod"
          },
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:end_rod"
          },
          {
            "item": "mekanism:teleportation_core"
          },
          {
            "item": "minecraft:ghast_tear"
          },
          {
            "item": "minecraft:crying_obsidian"
          },
          {
            "item": "minecraft:crying_obsidian"
          }
        ],
        "result": {
          "item": "javd:portal_block"
        }
      })
    e.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
          "item": "minecraft:diamond_pickaxe"
        },
        "ingredients": [
          {
            "item": "mekanism:teleportation_core"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:diamond_block"
          },
          {
            "item": "allthemodium:allthemodium_ingot"
          },
          {
            "item": "minecraft:ender_pearl"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:ender_pearl"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "mekanism:teleportation_core"
          },
          {
            "item": "industrialforegoing:infinity_drill"
          },
          {
            "item": "minecraft:diamond_block"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "minecraft:ender_pearl"
          },
          {
            "item": "minecraft:ender_pearl"
          }
        ],
        "result": {
          "item": "jamd:mine_portal_block"
        }
    })
})