onEvent('recipes', e => {
  //===== mob grinding utils null sword =====//
  e.shaped(Item.of('mob_grinding_utils:null_sword'), ['G', 'G', 'A'], {
    G: 'mob_grinding_utils:golden_egg',
    A: 'allthemodium:allthemodium_ingot'
  }).id(`kubejs:mob_grinding_utils/null_sword`)
  //===== recipe disappear =====//
  //crafting sulfur dust using sulfur essence
  e.shaped('8x thermal:sulfur_dust', ['SSS', 'S S', 'SSS'], {
    S: 'mysticalagriculture:sulfur_essence'
  }).id(`kubejs:thermal/sulfur_dust`)
  //cutting board from sushi go crafting
  e.shaped('sushigocrafting:cutting_board', ['SSS', 'LLL'], {
    S: '#minecraft:wooden_slabs',
    L: '#minecraft:logs'
  }).id(`kubejs:sushigocrafting/cutting_board`)
  //sequenced assembly from create
  e.recipes.createSequencedAssembly([
    Item.of('create:precision_mechanism').withChance(120.0),
    Item.of('create:golden_sheet').withChance(8.0),
    Item.of('create:andesite_alloy').withChance(8.0),
    Item.of('create:cogwheel').withChance(5.0),
    Item.of('create:shaft').withChance(2.0),
    Item.of('create:crushed_gold_ore').withChance(2.0),
    Item.of('minecraft:gold_nugget').withChance(2.0),
    'minecraft:iron_ingot',
    'minecraft:clock'
  ], 'create:brass_ingot', [
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron']),
  ]).transitionalItem('create:incomplete_precision_mechanism').loops(5).id(`kubejs:create/sequencedassembly/precision_mechanism`)
  //===== tombstone =====//
  e.shaped('tombstone:soul_receptacle', ['ABA', 'CDC', 'AEA'], {
    A: 'tombstone:dust_of_vanishing',
    B: 'tombstone:ankh_of_pray',
    C: 'minecraft:totem_of_undying',
    D: 'tombstone:familiar_receptacle',
    E: 'tombstone:voodoo_poppet'
  }).id('kubejs:tombstone/soul_receptacle')
  //===== crafting station =====//
  e.remove({ output: 'craftingstation:crafting_station' }) //cannot use removeRecipeByOutput as it will remove all shaped recipes
  e.shaped('craftingstation:crafting_station', ['PPP', 'LCL', 'L L'], {
    P: '#minecraft:planks',
    L: '#minecraft:logs',
    C: '#forge:workbench'
  })
  //===== dank storage =====//
  e.replaceInput({ output: 'dankstorage:dank_1' }, 'minecraft:barrel', '#forge:barrels')
  e.replaceInput({ output: 'dankstorage:dank_1' }, 'minecraft:coal', '#minecraft:coals')
  //===== snad balancing =====//
  modifyShaped(e, 'snad:snad', 1, ['M', 'B', 'M'], {
    M: 'minecraft:sand',
    B: '#forge:fertilizer'
  })
  modifyShaped(e, 'snad:red_snad', 1, ['M', 'B', 'M'], {
    M: 'minecraft:red_sand',
    B: '#forge:fertilizer'
  })
  modifyShaped(e, 'snad:soul_snad', 1, ['M', 'B', 'M'], {
    M: 'minecraft:soul_sand',
    B: '#forge:fertilizer'
  })
  //===== maid scroll =====//
  e.custom({
    "type": "touhou_little_maid:altar_crafting",
    "output": {
      "type": "minecraft:item",
      "nbt": {
        "Item": {
          "id": "touhou_little_maid:smart_slab_empty",
          "Count": 1
        }
      }
    },
    "power": 1.0,
    "ingredients": [
      {
        "item": "touhou_little_maid:item_magnet_bauble"
      },
      {
        "item": "minecraft:paper"
      },
      {
        "item": "minecraft:shulker_box"
      },
      {
        "item": "minecraft:yellow_wool"
      },
      {
        "item": "minecraft:feather"
      },
      {
        "item": "minecraft:ink_sac"
      }
    ]
  })
  //===== shield =====//
  modifyShaped(e, 'bettershields:gold_shield', 1, ['GSG', ' G '], {
    G: '#forge:ingots/gold',
    S: 'bettershields:iron_shield'
  })
  modifyShaped(e, 'bettershields:diamond_shield', 1, ['GSG', ' G '], {
    G: '#forge:gems/diamond',
    S: 'bettershields:gold_shield'
  })
  //===== vanilla charcoal to chisel =====//
  e.remove({ input: 'minecraft:charcoal', output: 'chisel:charcoal/raw', type: 'minecraft:crafting_shapeless' })
  //===== wither proof glass from mob grinding utils =====//
  modifyShaped(e, 'mob_grinding_utils:tinted_glass', 8, ['GGG', 'GWG', 'GGG'], {
    G: 'connectedglass:borderless_glass',
    W: 'mysticalagriculture:witherproof_block'
  })

  //===== nature's compass =====//
  e.replaceInput({ output: 'naturescompass:naturescompass' }, '#minecraft:saplings', 'naturesaura:infused_iron')
  //===== storage drawer =====//
  e.shaped('storagedrawers:creative_storage_upgrade', ['AAA', 'BCB', 'AAA'], {
    A: '#forge:rods/wooden',
    B: 'minecraft:nether_star',
    C: 'storagedrawers:upgrade_template'
  }).id(`kubejs:storagedrawers/creative_storage_upgrade`)

  //===== quarry plus =====//
  modifyShaped(e, 'quarryplus:workbenchplus', 1, ['AVA', 'GSG', 'RBR'], {
    B: 'extendedcrafting:redstone_ingot_block',
    R: 'extendedcrafting:redstone_ingot',
    G: 'upgradednetherite:gold_upgraded_netherite_ingot',
    S: 'thermal:machine_crafter',
    V: 'allthemodium:vibranium_ingot',
    A: 'allthemodium:allthemodium_nugget'
  })
  //===== end portal =====//
  removeRecipeByOutput(e, [
    'minecraft:end_portal_frame'
  ])
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "A   A",
      "B C B",
      "BDEDB",
      "BFDFB",
      "GGGGG"
    ],
    "key": {
      "A": {
        "item": "minecraft:end_crystal"
      },
      "B": {
        "item": "allthecompressed:end_stone_block_3x"
      },
      "C": {
        "item": "ironchest:obsidian_chest"
      },
      "D": {
        "item": "extendedcrafting:enhanced_ender_ingot"
      },
      "E": {
        "item": "draconicevolution:dragon_heart"
      },
      "F": {
        "item": "minecraft:ender_eye"
      },
      "G": {
        "item": "minecraft:crying_obsidian"
      }
    },
    "result": {
      "item": "minecraft:end_portal_frame",
      "count": 12
    }
  })
  //===== waystone =====//
  modifyShapeless(e, 'waystones:warp_dust', 1, ['#forge:dusts/emerald', 'minecraft:ender_pearl', '#forge:dusts/diamond', '#forge:rods/blaze'])
  modifyShaped(e, 'waystones:warp_stone', 1, ['WPW', 'EGE', 'WPW'], {
    W: 'waystones:warp_dust',
    G: '#forge:gems/emerald',
    E: 'minecraft:ender_eye',
    P: 'minecraft:ender_pearl'
  })
  //===== powah =====//
  removeRecipeByOutput(e, [
    'powah:binding_card',
    'powah:blank_card'
  ])
  e.shaped('powah:blank_card', ['HHH', 'VPV', 'HHH'], {
    H: 'powah:dielectric_rod_horizontal',
    V: 'powah:dielectric_rod',
    P: 'powah:photoelectric_pane'
  }).id(`kubejs:powah/blank_card`)
  //binding_card
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAA",
      "ABCBA",
      "ADEDA",
      "ADDDA",
      "AAAAA"
    ],
    "key": {
      "A": {
        "item": "powah:blank_card"
      },
      "B": {
        "item": "projectred-core:red_ingot"
      },
      "C": {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      "D": {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:enderman\"}}"
      },
      "E": {
        "item": "projectred-core:pointer"
      }
    },
    "result": {
      "item": "powah:binding_card"
    }
  })
  //===== tool leveling + =====//
  e.remove({ output: 'toolleveling:tool_leveling_table' })
  e.recipes.create.mechanical_crafting('toolleveling:tool_leveling_table', [
    '    A    ',
    '   BAB   ',
    '  CDEFG  ',
    '  HIJIH  ',
    '  KLMLK  ',
    '  NNNNN  ',
    ' OPQQQPO ',
    'OORRRRROO',
  ], {
    A: 'botania:gaia_pylon',
    B: 'botania:gaia_ingot',
    C: Item.of('quark:ancient_tome', '{StoredEnchantments:[{lvl:5s,id:"minecraft:power"}]}'),
    D: Item.of('quark:ancient_tome', '{StoredEnchantments:[{lvl:4s,id:"minecraft:feather_falling"}]}'),
    E: Item.of('quark:ancient_tome', '{StoredEnchantments:[{lvl:4s,id:"minecraft:protection"}]}'),
    F: Item.of('quark:ancient_tome', '{StoredEnchantments:[{lvl:3s,id:"minecraft:thorns"}]}'),
    G: Item.of('quark:ancient_tome', '{StoredEnchantments:[{lvl:5s,id:"minecraft:sharpness"}]}'),
    H: 'allthecompressed:diamond_block_3x',
    I: 'allthecompressed:allthemodium_block_2x',
    J: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherstar"}'),
    K: 'allthecompressed:emerald_block_3x',
    L: 'allthecompressed:vibranium_block_2x',
    M: 'allthecompressed:unobtainium_block_2x',
    N: 'allthecompressed:iron_block_3x',
    O: 'mekanism:block_refined_obsidian',
    P: 'allthecompressed:honey_block_5x',
    Q: 'extendedcrafting:black_iron_block',
    R: 'minecraft:crying_obsidian'
  })
  //===== time in a bottle =====//
  e.recipes.thermal.smelter('tiab:timeinabottle', ['minecraft:clock', '4x minecraft:gold_block', 'minecraft:quartz']).id(`kubejs:induction_smelter/tiab/tiab`)
  e.remove({ output: 'tiab:timeinabottle' })

  //===== spawner =====//
  e.recipes.thermal.smelter('minecraft:spawner', ['2x allthemodium:vibranium_allthemodium_alloy_ingot', 'allthecompressed:iron_block_3x', '8x hostilenetworks:nether_prediction']).id(`kubejs:induction_smelter/minecraft/spawner`)

  //===== construction wand =====//
  modifyShaped(e, 'constructionwand:stone_wand', 1, ['  M', ' S ', 'S  '], {
    S: '#forge:rods/wooden',
    M: 'allthecompressed:cobblestone_block_1x'
  })
  modifyShaped(e, 'constructionwand:iron_wand', 1, ['  M', ' S ', 'S  '], {
    S: '#forge:rods/wooden',
    M: 'minecraft:iron_block'
  })
  modifyShaped(e, 'constructionwand:diamond_wand', 1, ['  M', ' S ', 'S  '], {
    S: '#forge:rods/wooden',
    M: 'minecraft:diamond_block'
  })
  modifyShaped(e, 'constructionwand:infinity_wand', 1, ['  M', ' S ', 'S  '], {
    S: '#forge:rods/wooden',
    M: 'allthecompressed:nether_star_block'
  })
})