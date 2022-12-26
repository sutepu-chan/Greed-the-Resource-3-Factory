onEvent('recipes', e => {
  removeRecipeByID(e, [
    'tetra:emerald',
    'tetra:lapis',
    'tetra:diamond'
  ])
  e.recipes.astralsorcery.infuser({
    fluidInput: 'astralsorcery:liquid_starlight',
    input: { item: 'minecraft:lapis_lazuli' },
    output: { item: 'tetra:pristine_lapis', count: 1 },
    consumptionChance: 0.2,
    duration: 100,
    consumeMultipleFluids: true,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  })
  e.recipes.astralsorcery.infuser({
    fluidInput: 'astralsorcery:liquid_starlight',
    input: { item: 'minecraft:emerald' },
    output: { item: 'tetra:pristine_emerald', count: 1 },
    consumptionChance: 0.2,
    duration: 100,
    consumeMultipleFluids: true,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  })
  e.recipes.astralsorcery.infuser({
    fluidInput: 'astralsorcery:liquid_starlight',
    input: { item: 'minecraft:diamond' },
    output: { item: 'tetra:pristine_diamond', count: 1 },
    consumptionChance: 0.2,
    duration: 100,
    consumeMultipleFluids: true,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  })
})