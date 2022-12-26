onEvent('recipes', e => {
  function igneousExtruder(fluid, bottom, output) {
    e.custom({
        "type": "thermal:rock_gen",
        "adjacent": fluid,
        "below": bottom,
        "result": {"item": output}
      })
  }
  removeRecipeByID(e, [
    'thermal:machine/press/packing2x2/press_honeycomb_packing',
    'thermal:machine/press/unpacking/press_honeycomb_unpacking',
    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:machine/centrifuge/centrifuge_oil_red_sand',
    'thermal:machine/pyrolyzer/pyrolyzer_coal',
    'thermal:machine/pyrolyzer/pyrolyzer_logs',
    'thermal:compat/astralsorcery/pulverizer_astralsorcery_aquamarine_ore',
    'thermal:machine/chiller/chiller_honey_to_honey_block',
    'thermal:machine/bottler/bottler_honey_bottle',
    'thermal:machine/centrifuge/centrifuge_honeycomb',
    'thermal:machine/crucible/crucible_honey_block_to_honey',
  ])
  igneousExtruder('minecraft:water', 'minecraft:red_sandstone', 'minecraft:red_sand')
  igneousExtruder('minecraft:water', 'minecraft:nether_bricks', 'minecraft:netherrack')
  igneousExtruder('minecraft:water', 'minecraft:soul_soil', 'minecraft:soul_sand')
  igneousExtruder('minecraft:water', 'minecraft:polished_andesite', 'minecraft:andesite')
  igneousExtruder('minecraft:water', 'minecraft:polished_diorite', 'minecraft:diorite')
  igneousExtruder('minecraft:water', 'minecraft:polished_granite', 'minecraft:granite')
  igneousExtruder('minecraft:water', 'create:polished_gabbro', 'create:gabbro')
  igneousExtruder('minecraft:water', 'create:polished_dolomite', 'create:dolomite')
  igneousExtruder('minecraft:water', 'create:polished_limestone', 'create:limestone')
  igneousExtruder('minecraft:water', 'create:polished_scoria', 'create:scoria')
  igneousExtruder('minecraft:water', 'create:polished_dark_scoria', 'create:dark_scoria')
  igneousExtruder('minecraft:water', 'minecraft:end_stone_bricks', 'minecraft:end_stone')
  igneousExtruder('astralsorcery:liquid_starlight', 'astralsorcery:marble_runed', 'astralsorcery:marble_raw')
  igneousExtruder('astralsorcery:liquid_starlight', 'minecraft:sandstone', 'minecraft:sand')
  igneousExtruder('industrialforegoing:pink_slime', 'minecraft:slime_block', 'minecraft:slime_ball')
  removeIngotBlend = (type, amount) => {
    removeRecipeByID(e, [
      `thermal:fire_charge/${type}_ingot_${amount}`,
      `thermal:fire_charge/${type}_dust_${amount}`
    ])
  }
  removeIngotBlend('bronze', 4)
  removeIngotBlend('electrum', 2)
  removeIngotBlend('invar', 3)
  removeIngotBlend('constantan', 2)
  removeIngotBlend('signalum', 4)
  removeIngotBlend('lumium', 4)
  removeIngotBlend('enderium', 2)
  e.recipes.create.mechanical_crafting('4x thermal:invar_ingot',[
    'II',
    'NF'
  ], 
  {
    I: 'minecraft:iron_ingot',
    N: 'alltheores:nickel_ingot',
    F: 'minecraft:fire_charge'
  })
  removeRecipeByID(e, [
    'thermal:fire_charge/obsidian_glass_2',
    'thermal:fire_charge/lumium_glass_2',
    'thermal:fire_charge/signalum_glass_2',
    'thermal:fire_charge/enderium_glass_2'
  ])
})
