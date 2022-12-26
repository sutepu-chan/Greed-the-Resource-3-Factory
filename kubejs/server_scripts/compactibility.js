onEvent('recipes', e => {
  //===== functions =====//
  function multicrush(output, input) {
    e.recipes.mekanism.crushing(output, input)
    e.recipes.create.crushing(output, input)
    e.recipes.thermal.pulverizer(output, input)
  }
  //===== crushing recipes for allthemodium =====//
  multicrush('4x minecraft:brick', 'minecraft:bricks')
  multicrush('4x minecraft:magma_cream', 'minecraft:magma_block')
  multicrush('minecraft:snow_block', 'minecraft:ice')
  multicrush('allthemodium:unobtainium_allthemodium_alloy_dust', 'allthemodium:unobtainium_allthemodium_alloy_ingot')
  multicrush('allthemodium:unobtainium_vibranium_alloy_dust', 'allthemodium:unobtainium_vibranium_alloy_ingot')
  multicrush('allthemodium:vibranium_allthemodium_alloy_dust', 'allthemodium:vibranium_allthemodium_alloy_ingot')
  //===== crushing recipes =====//
  multicrush('betterendforge:ender_dust', 'betterendforge:ender_shard')
  multicrush('10x minecraft:bone_meal', 'upgrade_aquatic:thrasher_tooth')
  removeRecipeByID(e, ['create:crushing/andesite', 'create:crushing/granite'])
  multicrush('create:andesite_cobblestone', 'minecraft:andesite')
  multicrush('create:granite_cobblestone', 'minecraft:granite')
  //===== smelting recipes add for @allthemodium =====//
  e.smelting('alltheores:platinum_ingot', 'create:crushed_platinum_ore').xp(1).id('kubejs:smelting/create_platinum')
  e.smelting('allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:vibranium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/vibranium_allthemodium_alloy_dust')
  e.smelting('allthemodium:unobtainium_allthemodium_alloy_ingot', 'allthemodium:unobtainium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_allthemodium_alloy_dust')
  e.smelting('allthemodium:unobtainium_vibranium_alloy_ingot', 'allthemodium:unobtainium_vibranium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_vibranium_alloy_dust')
  //===== thermal to mekanism =====//
  modifyShapeless(e, 'thermal:onion_block', 1, '9x #forge:crops/onion')
  e.recipes.mekanism.crushing('6x thermal:sulfur', 'thermal:sulfur_ore')
  e.recipes.mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond')
  e.recipes.mekanism.crushing('thermal:sulfur_dust', 'thermal:sulfur')
  e.recipes.mekanism.crushing('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
  //===== thermal ore processing =====//
  let smelterCompat = (e, energy, output, count1, input1, count2, input2, count3, input3, count4) => {
    e.remove({ output: output, type: 'thermal:smelter' })
    if (input3 == null) {
      e.recipes.thermal.smelter(Item.of(output, count1), [ingredient.of(input1, count2), ingredient.of(input2, count3)]).energy(`${energy}`).id(`kubejs:thermal/smelter/${output.replace(':', '/')}`)
    } else {
      e.recipes.thermal.smelter(Item.of(output, count1), [ingredient.of(input1, count2), ingredient.of(input2, count3), ingredient.of(input3, count4)]).energy(`${energy}`).id(`kubejs:thermal/smelter/${output.replace(':', '/')}`)
    }
  }
  smelterCompat(e, 6400, 'thermal:bronze_ingot', 4, ['#forge:dusts/tin', '#forge:ingots/tin'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 3)
  smelterCompat(e, 3200, 'thermal:electrum_ingot', 3, ['#forge:dusts/silver', '#forge:ingots/silver'], 1, ['#forge:dusts/gold', '#forge:ingots/gold'], 2)
  smelterCompat(e, 4800, 'thermal:invar_ingot', 3, ['#forge:dusts/nickel', '#forge:ingots/nickel'], 1, ['#forge:dusts/iron', '#forge:ingots/iron'], 2)
  smelterCompat(e, 3200, 'thermal:constantan_ingot', 2, ['#forge:dusts/nickel', '#forge:ingots/nickel'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 2)
  smelterCompat(e, 12000, 'thermal:signalum_ingot', 4, ['#forge:dusts/silver', '#forge:ingots/silver'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 3, '#forge:dusts/redstone', 2)
  smelterCompat(e, 12000, 'thermal:lumium_ingot', 4, ['#forge:dusts/silver', '#forge:ingots/silver'], 1, ['#forge:dusts/tin', '#forge:ingots/tin'], 3, '#forge:dusts/glowstone', 2)
  smelterCompat(e, 16000, 'thermal:enderium_ingot', 2, ['#forge:dusts/diamond', '#forge:gems/diamond'], 1, ['#forge:dusts/lead', '#forge:ingots/lead'], 3, ['#forge:dusts/ender_pearl', '#forge:ender_pearls'], 2)
  smelterCompat(e, 3200, 'create:brass_ingot', 2, ['#forge:dusts/zinc', '#forge:ingots/zinc'], 1, ['#forge:dusts/copper', '#forge:ingots/copper'], 1)
  smelterCompat(e, 50000, 'allthemodium:vibranium_allthemodium_alloy_ingot', 1, ['allthemodium:allthemodium_ingot', 'allthemodium:allthemodium_dust'], 1, ['allthemodium:vibranium_ingot','allthemodium:vibranium_dust'], 1)
  smelterCompat(e, 50000, 'allthemodium:unobtainium_vibranium_alloy_ingot', 1, ['allthemodium:unobtainium_ingot', 'allthemodium:unobtainium_dust'], 1, ['allthemodium:vibranium_ingot','allthemodium:vibranium_dust'], 1)
  smelterCompat(e, 50000, 'allthemodium:unobtainium_allthemodium_alloy_ingot', 1, ['allthemodium:allthemodium_ingot', 'allthemodium:allthemodium_dust'], 1, ['allthemodium:unobtainium_ingot','allthemodium:unobtainium_dust'], 1)

  //====== mekanism =====//
  e.recipes.mekanism.crushing('4x minecraft:blaze_powder', '#forge:rods/blaze')
  e.recipes.mekanism.enriching('4x minecraft:blaze_powder', 'minecraft:blaze_rod').id('kubejs:minecraft/enriching/blaze_powder')
  //===== betterendforge =====//
  e.shapeless('betterendforge:emerald_ice', ['minecraft:emerald', 'minecraft:ice'])
  //===== upgraded aquatic =====//
  e.shapeless('upgrade_aquatic:ochre_kelp', ['minecraft:kelp', '#forge:dyes/yellow'])
  e.shapeless('upgrade_aquatic:polar_kelp', ['minecraft:kelp', '#forge:dyes/cyan'])
  e.shapeless('upgrade_aquatic:thorny_kelp', ['minecraft:kelp', '#forge:dyes/brown'])
  e.shapeless('upgrade_aquatic:tongue_kelp', ['minecraft:kelp', '#forge:dyes/red'])
  //===== storage drawers tag recipe =====//
  e.replaceInput({ output: 'storagedrawers:compacting_drawers_3', type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone')
  e.replaceInput({ output: 'storagedrawers:controller', type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone')
  e.replaceInput({ output: 'storagedrawers:controller_slave', type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone')
})

