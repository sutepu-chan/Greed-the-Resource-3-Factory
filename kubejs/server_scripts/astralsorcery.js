onEvent('recipes', e => {
  e.recipes.thermal.pulverizer(
    [
      Item.of('astralsorcery:aquamarine').withChance(6),
      Item.of('minecraft:sand').withChance(0.2)
    ],
    [{ item: 'astralsorcery:aquamarine_sand_ore' }]
  )
  removeRecipeByOutput(e, [
    'torchmaster:megatorch',
    'biggerreactors:reactor_terminal',
    'biggerreactors:turbine_terminal'
  ])
  e.recipes.astralsorcery.infuser({
    fluidInput: 'astralsorcery:liquid_starlight',
    input: { item: 'minecraft:torch' },
    output: { item: 'torchmaster:megatorch', count: 1 },
    consumptionChance: 0.1,
    duration: 100,
    consumeMultipleFluids: false,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  }).id(`kubejs:astralsorcery/infuser/megatorch`)
  e.recipes.astralsorcery.infuser({
    fluidInput: 'allthemodium:molten_bluelava',
    input: { tag: 'forge:storage_blocks/uranium' },
    output: { item: 'biggerreactors:reactor_terminal', count: 1 },
    consumptionChance: 1.0,
    duration: 100,
    consumeMultipleFluids: true,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  }).id(`kubejs:astralsorcery/infuser/reactor_terminal`)
  e.recipes.astralsorcery.infuser({
    fluidInput: 'allthemodium:molten_bluelava',
    input: { item: 'biggerreactors:blutonium_block' },
    output: { item: 'biggerreactors:turbine_terminal', count: 1 },
    consumptionChance: 1.0,
    duration: 100,
    consumeMultipleFluids: true,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  }).id(`kubejs:astralsorcery/infuser/turbine_terminal`)
  removeRecipeByID(e, [
    'astralsorcery:infuser/ancient_debris',
  ])
  e.recipes.astralsorcery.infuser({
    fluidInput: 'astralsorcery:liquid_starlight',
    input: { item: 'minecraft:ancient_debris' },
    output: { item: 'minecraft:netherite_scrap', count: 5 },
    consumptionChance: 0.2,
    duration: 100,
    consumeMultipleFluids: true,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  }).id(`kubejs:astralsorcery/infuser/netherite_scrap`)
})
