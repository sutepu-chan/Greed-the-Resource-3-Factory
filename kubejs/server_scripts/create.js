onEvent('recipes', e => {
  //===== plant processing =====//
  let betterEndWoodTypes = [
    'dragon_tree',
    'end_lotus',
    'helix_tree',
    'jellyshroom',
    'lacugrove',
    'lucernia',
    'mossy_glowshroom',
    'pythadendron',
    'tenanea',
    'umbrella_tree'
  ]
  betterEndWoodTypes.forEach(betterEndWoodType => {
    e.recipes.create.cutting(`betterendforge:${betterEndWoodType}_stripped_log`, `betterendforge:${betterEndWoodType}_log`)
    e.recipes.create.cutting(`betterendforge:${betterEndWoodType}_stripped_bark`, `betterendforge:${betterEndWoodType}_bark`)
    e.recipes.create.cutting(`betterendforge:${betterEndWoodType}_log`, `betterendforge:${betterEndWoodType}_bark`)
    e.recipes.create.cutting(`6x betterendforge:${betterEndWoodType}_planks`, `betterendforge:${betterEndWoodType}_stripped_log`)
    e.recipes.create.cutting(`6x betterendforge:${betterEndWoodType}_planks`, `betterendforge:${betterEndWoodType}_stripped_bark`)
  })
  e.recipes.create.milling(['9x farmersdelight:rice', '9x farmersdelight:straw'], 'farmersdelight:rice_bale')
  e.recipes.create.milling(['18x minecraft:sugar', Item.of('minecraft:sugar', 5).withChance(0.5), Item.of('minecraft:sugar', 4).withChance(0.25), Item.of('minecraft:sugar', 2).withChance(0.1)], '#forge:storage_blocks/sugar_cane')

  //===== ore processing =====//
  e.remove({input:'minecraft:ancient_debris', type:'create:crushing'})
  e.recipes.create.crushing([Item.of('minecraft:netherite_scrap', 3).withChance(0.5), Item.of('minecraft:netherite_scrap', 2).withChance(0.2), '3x minecraft:netherite_scrap'], 'minecraft:ancient_debris')
  e.recipes.create.crushing(['4x draconicevolution:draconium_dust', Item.of('draconicevolution:draconium_dust', 3).withChance(0.33)], '#forge:ores/draconium')
  e.recipes.create.milling('2x minecraft:netherite_scrap', 'minecraft:ancient_debris')
  
  e.recipes.createSplashing([
    '10x alltheores:platinum_nugget',
    Item.of('alltheores:platinum_nugget', 5).withChance(0.5)
  ], 'create:crushed_platinum_ore')

  e.recipes.create.crushing(['2x astralsorcery:stardust', Item.of('astralsorcery:stardust', 2).withChance(0.2)], 'astralsorcery:starmetal_ore')

  //===== disable and remove items =====//
  removeRecipeByID(e, [
    'create:crafting/materials/copper_block_from_compacting',
    'create:crafting/materials/zinc_block_from_compacting',
    'create:emptying/honey_bottle',
    'createsupercharged:cgp',
    'createsupercharged:cgs'
  ])
})
