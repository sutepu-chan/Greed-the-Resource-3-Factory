onEvent('recipes', e => {
  //===== some recipes should be existed in vanilla =====//
  e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/decompress/clay`)
  e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/decompress/quartz`)
  e.shapeless('9x minecraft:melon_slice', 'minecraft:melon').id(`kubejs:minecraft/decompress/melon`)
  e.shapeless('9x minecraft:honeycomb', 'minecraft:honeycomb_block').id('kubejs:minecraft/decompress/honeycomb')
  e.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`kubejs:minecraft/decompress/nether_wart`)
  e.shapeless('minecraft:blaze_rod', '2x minecraft:blaze_powder')
  e.shapeless('minecraft:trapped_chest', ['#forge:chests/trapped','minecraft:oak_planks'] )
  e.remove({output:'minecraft:ender_eye', input: 'minecraft:blaze_powder'})
  e.remove({id:'betterendforge:ender_eye_from_amber_gem'})
  e.shaped('16x minecraft:stick', ['L', 'L'], {
    'L': '#minecraft:logs'
  }).id(`kubejs:minecraft/sticks`)
  e.shaped('12x minecraft:grass', [' E ', 'E E'], {
    'E': 'mysticalagriculture:nature_essence'
  }).id('kubejs:minecraft/grass')
  e.shaped('3x minecraft:glass', ['GGG', 'G G', 'GGG',], {
    G: 'minecraft:glass_pane'
  })
  e.shaped('minecraft:diamond_horse_armor', ['D D', 'DDD', 'D D'], {
    D: '#forge:gems/diamond'
  })
  e.shaped('minecraft:golden_horse_armor', ['G G', 'GGG', 'G G'], {
    G: '#forge:ingots/gold'
  })
  e.shaped('minecraft:iron_horse_armor', ['I I', 'III', 'I I'], {
    I: '#forge:ingots/iron' 
  })
  e.shaped('minecraft:totem_of_undying', ['RER', 'GVG', ' E '], {
    E: '#forge:storage_blocks/emerald',
    R: '#forge:storage_blocks/redstone',
    G: '#forge:storage_blocks/gold',
    V: 'minecraft:villager_spawn_egg'
  })
  e.shaped('4x minecraft:ladder', ['S S', 'SPS', 'S S'], {
    S: '#forge:rods',
    P: '#minecraft:planks'
  })
  e.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
    L: '#minecraft:logs',
    I: '#forge:ingots/iron'
  })
  e.shaped('minecraft:brown_mushroom_block', ['MM', 'MM'], {
    M: 'minecraft:brown_mushroom'
  })
  e.shaped('minecraft:red_mushroom_block', ['MM', 'MM'], {
    M: 'minecraft:red_mushroom'
  })
  e.shapeless('minecraft:mushroom_stem', ['#forge:dyes/white', ['minecraft:red_mushroom_block', 'minecraft:brown_mushroom_block']])
  e.shaped('minecraft:bell', ['SSS', 'G G', 'B B'], {
    S: '#forge:rods/wooden',
    G: 'minecraft:gold_ingot',
    B: 'minecraft:gold_block'
  })
  e.shaped('minecraft:crying_obsidian', [' O ', 'OGO', ' O '], {
    O: '#forge:obsidian',
    G: 'minecraft:ghast_tear'
  })
  //===== change specific items into tag recipe =====//
  e.shaped('minecraft:furnace', ['SSS', 'S S', 'SSS'], {
    S: '#forge:stone'
  })
  e.shaped('minecraft:white_wool', ['SS', 'SS'], {
    S: '#forge:string'
  })
  e.replaceInput('minecraft:glass_pane', '#forge:glass_panes')
  modifySmelt(e, 'minecraft:glass', '#forge:sand')
  modifyShaped(e, 'minecraft:dark_prismarine', 1, ['SSS', 'SBS', 'SSS'], {
    S: 'minecraft:prismarine_shard',
    B: '#forge:dyes/black'
  })
  modifyShaped(e, 'minecraft:sticky_piston', 1, ['B', 'P'], {
    B: '#forge:slimeballs',
    P: 'minecraft:piston'
  })
  modifyShaped(e, 'minecraft:daylight_detector', 1, ['GGG', 'QQQ', 'SSS'], {
    G: '#forge:glass',
    Q: '#forge:gems/quartz',
    S: '#minecraft:wooden_slabs'
  })
  modifyShaped(e, 'minecraft:beehive', 1, ['PPP', 'CCC', 'PPP'], {
    P: '#minecraft:planks',
    C: '#resourcefulbees:resourceful_honeycomb'
  })
  modifyShaped(e, 'minecraft:honeycomb_block', 1, ['CCC', 'CCC', 'CCC'], {
    C: 'minecraft:honeycomb'
  })
  removeRecipeByOutput(e, ['minecraft:trident'])
  e.shaped('minecraft:trident', [' ST', ' HS', 'P  '], {
    S: 'progressivebosses:elder_guardian_spike',
    H: 'minecraft:heart_of_the_sea',
    P: 'outvoted:prismarine_rod',
    T: 'outvoted:kraken_tooth'
  })
  colors.forEach(color => {
    //===== accept tag recipes =====//
    e.replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`)
    //===== recycle =====//
    e.shaped(`3x minecraft:${color}_stained_glass`, ['GGG', 'G G', 'GGG',], {
      G: `minecraft:${color}_stained_glass_pane`
    }).id(`kubejs:minecraft/${color}_pane_to_glass`)
    //===== change colour crafting recipes =====//
    modifyShaped(e, `minecraft:${color}_bed`, 1, ['WWW', 'PPP'], {
      P: '#minecraft:planks',
      W: `minecraft:${color}_wool`
    })
    modifyShaped(e, `minecraft:${color}_carpet`, 3, ['WW'], {
      W: `minecraft:${color}_wool` 
    })
    e.shaped(`8x minecraft:${color}_concrete`, ['PPP', 'PWP', 'PPP',], {
      P: `minecraft:${color}_concrete_powder`,
      W: ['resourcefulbees:water_honeycomb', 'mysticalagriculture:water_essence', 'minecraft:water_bucket']
    })
    e.shaped(`2x minecraft:${color}_wool`, ['C', 'C', 'C',], { C: `minecraft:${color}_carpet` })
  })

})
