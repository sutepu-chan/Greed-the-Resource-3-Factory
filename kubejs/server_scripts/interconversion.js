onEvent('recipes', e => {
  //===== marble =====//
  e.shapeless('astralsorcery:marble_raw', 'chisel:marble/raw').id('kubejs:marble/astral_to_chisel')
  e.shapeless('chisel:marble/raw', 'astralsorcery:marble_raw').id('kubejs:marble/chisel_to_astral')
  //===== limestone =====//
  e.shapeless('create:limestone', 'create:weathered_limestone').id('kubejs:limestone/create_to_create')
  e.shapeless('create:weathered_limestone', 'chisel:limestone/raw').id('kubejs:limestone/create_to_chisel')
  e.shapeless('chisel:limestone/raw', 'create:limestone').id('kubejs:limestone/chisel_to_create')
  //===== basalt =====//
  e.shapeless('chisel:basalt/raw', 'minecraft:basalt')
  e.shapeless('minecraft:basalt', 'chisel:basalt/raw')
  //===== wood related items =====//
  e.shapeless('minecraft:oak_boat', '#minecraft:boats')
  e.shapeless('minecraft:chest', '#forge:chests/wooden')
  e.shapeless('minecraft:bookshelf', '#forge:bookshelves')
  e.shapeless('minecraft:crafting_table', '#forge:workbench')
  e.shapeless('minecraft:oak_sign', '#minecraft:signs')
  e.shapeless('minecraft:barrel', '#forge:barrels')
  //===== creative items =====//
  e.shapeless('createaddition:creative_energy', 'draconicevolution:creative_op_capacitor')
  e.shapeless('draconicevolution:creative_op_capacitor', 'powah:energy_cell_creative')
  e.shapeless('powah:energy_cell_creative', Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'))
  e.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'), 'createaddition:creative_energy')

  //===== interconversion of colour variants =====//
  //===== remove recipes =====//
  colors.forEach(color => {
    if (color !== 'white') {
      removeRecipeByID(e, [
        `minecraft:${color}_wool`,
        `minecraft:${color}_carpet_from_white_carpet`
      ])
    }
  })
  //===== color variants conversion =====//
  colors.forEach(a => {
    //array initialise
    let wool = []
    let carpet = []
    let bed = []
    colors.forEach(b => {
      //add specific color items into array
      if (a !== b) {
        wool.push(`minecraft:${b}_wool`)
        carpet.push(`minecraft:${b}_carpet`)
        bed.push(`minecraft:${b}_bed`)
      }
    })
    //add recipes using arrays
    e.shapeless(`minecraft:${a}_wool`, [`#forge:dyes/${a}`, wool]).id(`kubejs:minecraft/${a}_wool`)
    e.shapeless(`minecraft:${a}_bed`, [`#forge:dyes/${a}`, bed]).id(`kubejs:minecraft/${a}_bed`)
    e.shaped(`8x minecraft:${a}_carpet`, ['CCC', 'CDC', 'CCC'], {
      D: `#forge:dyes/${a}`,
      C: carpet
    }).id(`kubejs:minecraft/${a}_carpet`)
    
  })
})
