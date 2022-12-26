onEvent('recipes', e => {
  //===== draconic evolution =====//    
  draconicFusion(e, 'draconicevolution:creative_capacitor', 4, 123456789, 'draconicevolution:chaotic_capacitor', [
    'draconicevolution:creative_op_capacitor',
    'draconicevolution:draconic_capacitor',
    'draconicevolution:wyvern_capacitor',
    'draconicevolution:wyvern_capacitor'
  ])
  //===== botanita =====//
  e.shaped(Item.of('botania:mana_tablet', '{mana:500000,creative:1b}'), ['LPL', 'DED', 'LPL'], {
    L: 'botania:livingrock',
    P: 'botania:mana_pearl',
    D: 'botania:mana_diamond',
    E: 'botania:creative_pool'
  })
  //creative pool
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "         ",
      "    A    ",
      "BCDDDDDCB",
      "BEDFFFDGB",
      "HIJJJJJIH",
      "HIKKKKKIH",
      "LLLMMMLLL"
    ],
    "key": {
      "A": {
        "item": "extrabotany:supercrown"
      },
      "B": {
        "item": "extrabotany:photonium"
      },
      "C": {
        "item": "mythicbotany:alfsteel_armor_upgrade"
      },
      "D": {
        "type": "forge:nbt",
        "item": "mythicbotany:mana_ring_greatest",
        "count": 1,
        "nbt": "{mana:4000000}"
      },
      "E": {
        "item": "extrabotany:elementrune"
      },
      "F": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "G": {
        "item": "extrabotany:sinrune"
      },
      "H": {
        "item": "extrabotany:shadowium"
      },
      "I": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "J": {
        "item": "botania:gaia_pylon"
      },
      "K": {
        "item": "botania:gaia_ingot"
      },
      "L": {
        "item": "botania:mana_pool"
      },
      "M": {
        "item": "botania:fabulous_pool"
      }
    },
    "result": {
      "item": "botania:creative_pool"
    }
  })
  //creative mana battery
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAA",
      "ABCBA",
      "ABDBA",
      "AE EA",
      "EE EE"
    ],
    "key": {
      "A": {
        "item": "botania:manasteel_ingot"
      },
      "B": {
        "item": "botanicalmachinery:mana_battery"
      },
      "C": {
        "item": "botania:creative_pool"
      },
      "D": {
        "item": "mythicbotany:rune_holder"
      },
      "E": {
        "item": "botania:livingwood_twig"
      }
    },
    "result": {
      "item": "botanicalmachinery:mana_battery_creative"
    }
  })
  //===== create =====//
  e.recipes.create.mixing('create:creative_blaze_cake', [
    '32x createsupercharged:creative_mechanism',
    'createaddition:chocolate_cake',
    'createaddition:honey_cake',
    'create:blaze_cake',
    '16x createsupercharged:refined_shell',
    '2x extendedcrafting:the_ultimate_ingot'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')
  e.recipes.create.mechanical_crafting('create:creative_motor', [
    'CCCCCCCCC',
    'NNNRSRNNN',
    'MMMSMSMMM',
    'CCCRSRCCC',
    'NNNHHHNNN',
    'CCCHHHCCC',
    '   HHH   '],
    {
      S: 'extendedcrafting:ultimate_singularity',
      H: 'create:shaft',
      M: 'createsupercharged:creative_mechanism',
      C: 'create:chromatic_compound',
      R: 'createsupercharged:refined_shell',
      N: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
    })
  //===== bee =====//
  e.shaped(Item.of('resourcefulbees:beepedia', '{Creative:1b}'), [' A ', 'VBN', ' U '], {
    B: 'resourcefulbees:beepedia',
    A: '#forge:storage_blocks/allthemodium',
    V: '#forge:storage_blocks/vibranium',
    U: '#forge:storage_blocks/unobtainium',
    N: '#forge:storage_blocks/nether_star'
  })
  //===== pipez =====//
  e.shaped('pipez:infinity_upgrade', ['SNS', 'NUN', 'SNS'], {
    S: 'minecraft:nether_star',
    N: 'minecraft:netherite_block',
    U: 'pipez:advanced_upgrade'
  })
  //===== refined storage =====//
  //creative controller
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCBAA",
      "ADBCBDA",
      "BBBBBBB",
      "CCEFGCC",
      "BBBBBBB",
      "ADBCBDA",
      "AABCBAA"
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      "B": {
        "item": "chisel:futura/controller"
      },
      "C": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:forge_energy\"}"
      },
      "D": {
        "item": "extendedcrafting:ender_star"
      },
      "E": {
        "item": "extradisks:1048576k_fluid_storage_disk",
      },
      "F": {
        "item": "refinedstorage:controller"
      },
      "G": {
        "item": "extradisks:1048576k_storage_disk",
      }
    },
    "result": {
      "item": "refinedstorage:creative_controller"
    }
  })
  //infinity card
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABBBBBA",
      "ACCDCCA",
      "ADDCDDA",
      "ADDEDDA",
      "ACCDCCA",
      "AFFFFFA",
      "ABBBBBA"
    ],
    "key": {
      "A": {
        "item": "minecraft:netherite_block"
      },
      "B": {
        "item": "refinedstorage:range_upgrade"
      },
      "C": {
        "item": "mekanism:teleportation_core"
      },
      "D": {
        "item": "minecraft:ender_eye"
      },
      "E": {
        "item": "draconicevolution:draconic_wireless_crystal"
      },
      "F": {
        "item": "allthecompressed:nether_star_block"
      }
    },
    "result": {
      "item": "rsinfinitybooster:infinity_card"
    }
  })
  //dimension card
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABABAA",
      "CDEFEDC",
      "CGEFEGC",
      "CGEHEGC",
      "CGEFEGC",
      "CDEFEDC",
      "AABIBAA"
    ],
    "key": {
      "A": {
        "item": "draconicevolution:draconium_block"
      },
      "B": {
        "type": "forge:nbt",
        "item": "quark:ancient_tome",
        "count": 1,
        "nbt": "{StoredEnchantments:[{lvl:3s,id:\"minecraft:soul_speed\"}]}"
      },
      "C": {
        "item": "allthecompressed:nether_star_block"
      },
      "D": {
        "item": "rsinfinitybooster:infinity_card"
      },
      "E": {
        "item": "botania:mana_diamond_block"
      },
      "F": {
        "item": "naturesaura:sky_ingot"
      },
      "G": {
        "item": "draconicevolution:awakened_core"
      },
      "H": {
        "item": "draconicevolution:module_core"
      },
      "I": {
        "type": "forge:nbt",
        "item": "naturesaura:effect_powder",
        "count": 1,
        "nbt": "{effect:\"naturesaura:animal\"}"
      }
    },
    "result": {
      "item": "rsinfinitybooster:dimension_card"
    }
  })
  //===== thermal =====//
  //thermal:fluid_tank_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "AB     BA",
      "ABCCDCCBA",
      "ABEEEEEBA",
      "ABFFFFFBA",
      "ABGGGGGBA",
      "ABHHHHHBA",
      "ABIIIIIBA",
      "ABJJJJJBA"
    ],
    "key": {
      "A": {
        "item": "thermal:enderium_glass"
      },
      "B": {
        "item": "thermal:fluid_tank_augment"
      },
      "C": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "D": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "E": {
        "item": "pneumaticcraft:huge_tank"
      },
      "F": {
        "item": "mob_grinding_utils:jumbo_tank"
      },
      "G": {
        "item": "mob_grinding_utils:tank_sink"
      },
      "H": {
        "item": "thermal:fluid_cell"
      },
      "I": {
        "item": "moreminecarts:transport_tank"
      },
      "J": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      }
    },
    "result": {
      "item": "thermal:fluid_tank_creative_augment"
    }
  })
  //thermal:machine_catalyst_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "    A    ",
      "BCDAAADCB",
      "BCDEAEDCB",
      "BCDEFEDCB",
      "DDDEGEDDD",
      "BCDEFEDCB",
      "BCDEAEDCB",
      "BCDAAADCB",
      "    A    "
    ],
    "key": {
      "A": {
        "item": "thermal:enderium_gear"
      },
      "B": {
        "item": "extendedcrafting:ultimate_catalyst"
      },
      "C": {
        "item": "thermal:enderium_plate"
      },
      "D": {
        "item": "thermal:machine_catalyst_augment"
      },
      "E": {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      "F": {
        "item": "extendedcrafting:redstone_ingot_block"
      },
      "G": {
        "item": "extendedcrafting:the_ultimate_catalyst"
      }
    },
    "result": {
      "item": "thermal:machine_catalyst_creative_augment"
    }
  })
  //thermal:machine_efficiency_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       AA",
      "     BBA ",
      "     BB  ",
      "  CCCDC  ",
      "  CDEDC  ",
      "  CDCCC  ",
      "  BB     ",
      " ABB     ",
      "AA       "
    ],
    "key": {
      "A": {
        "item": "thermal:enderium_plate"
      },
      "B": {
        "item": "thermal:enderium_gear"
      },
      "C": {
        "item": "thermal:machine_efficiency_augment"
      },
      "D": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "E": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
    },
    "result": {
      "item": "thermal:machine_efficiency_creative_augment"
    }
  })
  //thermal:rf_coil_creative_augment
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "BBCBBBDBB",
      "EEEFGEEEE",
      "EHFEGEIJI",
      "EFEFKEEEE",
      "EELFGEMFI",
      "EIEFGENNO",
      "EIIEPEONN",
      "EIIEOEOOO"
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "mekanism:energy_tablet",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"1000000\"}]}}"
      },
      "B": {
        "item": "thermal:enderium_plate"
      },
      "C": {
        "item": "thermal:dynamo_lapidary"
      },
      "D": {
        "item": "thermal:dynamo_numismatic"
      },
      "E": {
        "item": "thermal:signalum_ingot"
      },
      "F": {
        "item": "thermal:redstone_servo"
      },
      "G": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H": {
        "item": "thermal:dynamo_magmatic"
      },
      "I": {
        "item": "thermal:rf_coil"
      },
      "J": {
        "item": "thermal:dynamo_compression"
      },
      "K": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "L": {
        "item": "thermal:dynamo_gourmand"
      },
      "M": {
        "item": "thermal:dynamo_disenchantment"
      },
      "N": {
        "item": "thermal:enderium_ingot"
      },
      "O": {
        "item": "thermal:upgrade_augment_3"
      },
      "P": {
        "item": "thermal:dynamo_stirling"
      }
    },
    "result": {
      "item": "thermal:rf_coil_creative_augment"
    }
  })
  //===== maid =====//
  e.custom({
    "type": "touhou_little_maid:altar_crafting",
    "output": {
      "type": "minecraft:item",
      "nbt": {
        "Item": {
          "id": "touhou_little_maid:substitute_jizo",
          "Count": 1
        }
      }
    },
    "power": 5.0,
    "ingredients": [
      {
        "item": "touhou_little_maid:drown_protect_bauble"
      },
      {
        "item": "touhou_little_maid:explosion_protect_bauble"
      },
      {
        "item": "touhou_little_maid:fire_protect_bauble"
      },
      {
        "item": "touhou_little_maid:projectile_protect_bauble"
      },
      {
        "item": "touhou_little_maid:magic_protect_bauble"
      },
      {
        "item": "touhou_little_maid:fall_protect_bauble"
      }
    ]
  })
  //===== mekanism =====//
  //creative energy cube
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCCCCCBA",
      "DEFGHGFED",
      "IIFGJGFII",
      "KKFLGLFMM",
      "KKHNNNHMM",
      "KKOPQPOMM",
      "RRSTUTSRR",
      "DEVVHVVED",
      "WXYZ1Z2XW"
    ],
    "key": {
      "A": {
        "item": "astralsorcery:shifting_star"
      },
      "B": {
        "item": "createsupercharged:shadow_charm"
      },
      "C": {
        "item": "astralsorcery:resonating_gem"
      },
      "D": {
        "item": "create:refined_radiance"
      },
      "E": {
        "item": "createsupercharged:creative_mechanism"
      },
      "F": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "G": {
        "item": "extendedcrafting:crystaltine_ingot"
      },
      "H": {
        "item": "draconicmachinery:chaos_heart"
      },
      "I": {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "J": {
        "item": "mythicbotany:fimbultyr_tablet"
      },
      "K": {
        "item": "mekanism:ultimate_induction_provider"
      },
      "L": {
        "item": "naturesaura:token_euphoria"
      },
      "M": {
        "item": "mekanism:ultimate_induction_cell"
      },
      "N": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "O": {
        "item": "mythicbotany:alfsteel_armor_upgrade"
      },
      "P": {
        "item": "extendedcrafting:black_iron_ingot"
      },
      "Q": {
        "item": "draconicevolution:chaotic_chestpiece"
      },
      "R": {
        "item": "mekanism:pellet_polonium"
      },
      "S": {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      "T": {
        "item": "draconicevolution:reactor_stabilizer"
      },
      "U": {
        "item": "draconicevolution:reactor_core"
      },
      "V": {
        "item": "draconicevolution:chaotic_capacitor"
      },
      "W": {
        "item": "extendedcrafting:ender_star"
      },
      "X": {
        "item": "createsupercharged:refined_charm"
      },
      "Y": {
        "item": "draconicevolution:nether_draconium_ore"
      },
      "Z": {
        "item": "draconicevolution:infused_obsidian"
      },
      "1": {
        "item": "draconicevolution:end_draconium_ore"
      },
      "2": {
        "item": "draconicevolution:overworld_draconium_ore"
      }
    },
    "result": {
      "item": "mekanism:creative_energy_cube"
    }
  })
  //===== remove recipe =====//
  removeRecipeByOutput(e, [
    'create:creative_motor',
    'create:creative_blaze_cake',
    'botanicalmachinery:mana_battery_creative',
    'botania:creative_pool',
    'entangled:block',
    'rsinfinitybooster:infinity_card',
    'rsinfinitybooster:dimension_card',
    'thermal:fluid_tank_creative_augment',
    'thermal:machine_catalyst_creative_augment',
    'thermal:machine_efficiency_creative_augment',
    'thermal:rf_coil_creative_augment'
  ])
})
