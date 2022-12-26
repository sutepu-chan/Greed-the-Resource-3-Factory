onEvent('jei.hide.items', e => {
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']

  function hideMetal(mod, name, types) {
    types.forEach(type => {
      e.hide(`${mod}:${name}_${type}`)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      e.hide(`${mod}:${name}_${type}`)
    })
  }
  //===== hide color items =====//
  colors.forEach(color => {
    refined.forEach(refin => e.hide(`refinedstorage:${color}_${refin}`))
    e.hide([
      `creativewirelesstransmitter:${color}_creative_wireless_transmitter`
    ])
    if (color !== 'white') {
      e.hide([
        `minecraft:${color}_bed`,
        `minecraft:${color}_wool`,
        `thermal:${color}_rockwool`,
        `minecraft:${color}_concrete_powder`,
        `minecraft:${color}_concrete`,
        `minecraft:${color}_carpet`,
        `minecraft:${color}_wool`,
        `minecraft:${color}_stained_glass`,
        `minecraft:${color}_stained_glass_pane`,
        `quark:${color}_quilted_wool`,
        `quark:${color}_framed_glass`,
        `quark:${color}_framed_glass_pane`,
        `connectedglass:borderless_glass_${color}`,
        `connectedglass:clear_glass_${color}`,
        `connectedglass:scratched_glass_${color}`,
        `connectedglass:tinted_borderless_glass_${color}`,
        `connectedglass:borderless_glass_${color}_pane`,
        `connectedglass:clear_glass_${color}_pane`,
        `connectedglass:scratched_glass_${color}_pane`,
        `absentbydesign:slab_glass_${color}`,
        `absentbydesign:stairs_glass_${color}`,
        `absentbydesign:wall_glass_${color}`,
        `absentbydesign:stairs_wool_${color}`,
        `absentbydesign:slab_wool_${color}`,
        `botanypotstiers:elite_${color}_botany_pot`,
        `botanypotstiers:ultra_${color}_botany_pot`,
        `botanypotstiers:creative_${color}_botany_pot`,
        `botanypots:${color}_botany_pot`,
        `botanypotstiers:creative_hopper_${color}_botany_pot`,
        `botanypotstiers:elite_hopper_${color}_botany_pot`,
        `botanypotstiers:ultra_hopper_${color}_botany_pot`,
        `botanypots:hopper_${color}_botany_pot`
      ])
    }
  })
  //===== hide ftblib =====//
  e.hide(Item.of('ftblibrary:fluid_container').ignoreNBT())
  e.hide(Item.of('mekanism:creative_fluid_tank').ignoreNBT())
  e.hide(Item.of('mekanism:creative_chemical_tank').ignoreNBT())
  //===== hide unified ore =====//
  hideStuff('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideStuff('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideStuff('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideStuff('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideStuff('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideStuff('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideStuff('mekanism', 'ore', ['copper', 'tin', 'osmium', 'uranium', 'lead'])
  hideMetal('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideMetal('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideMetal('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideMetal('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideMetal('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('bno', 'aluminum', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'copper', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'lead', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'tin', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'silver', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'osmium', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'uranium', ['ingot', 'nugget', 'block'])
  hideMetal('bno', 'nickel', ['ingot', 'nugget', 'block'])
  //===== hide repeated or weird items =====//
  let thingstohide = [
    //unify
    'cataclysm:witherite_ingot',
    'cataclysm:enderite_ingot',
    'bettershields:netherite_shield',
    'mekanism:sawdust',
    'mekanism:block_charcoal',
    'biggerreactors:yellorium_block',
    'biggerreactors:yellorium_ingot',
    'create:honey_bucket',
    'createaddition:diamond_grit',
    'biggerreactors:yellorite_ore',
    'biggerreactors:yellorium_dust',
    'extendedcrafting:nether_star_block',
    'bloodmagic:sulfur',
    'mekanism:dust_sulfur',
    'projectred-core:copper_ingot',
    'projectred-core:tin_ingot',
    'projectred-core:silver_ingot',
    'projectred-core:silicon',
    'projectred-core:boule',
    'projectred-core:sand_coal_comp',
    /resourcefulbees:.+_spawn_egg/,
    'nourished_nether:obsidian_bricks',
    'nourished_nether:obsidian_brick_slab',
    'nourished_nether:obsidian_brick_stairs',
    'nourished_nether:obsidian_brick_wall',
    'mekanism:dust_netherite',

    //decoration variants
    '@cb_microblock',
    '@chipped',
    '@chisel',

    //weird items
    'notenoughwands:light',
    'mininggadgets:minerslight',

    //library items
    'kubejs:dummy_fluid_item',
    'rftoolsutility:teleport_probe',
    'ftbquests:custom_icon',
    'ftbquests:barrier',
    'ftbquests:missing_item',
    'ftbquests:stage_barrier',
    'ftbquests:detector',
    Item.of('minecraft:enchanted_book').enchant('charm:acquisition', 1),
    Item.of('minecraft:enchanted_book').enchant('charm:tinted', 1),
    
    '@itemfilters',
    '@theoneprobe',
    '@titanium',
    '@phosphophyllite',
    '@curios',
  ]
  thingstohide.forEach(things => {
    e.hide(things)
  })

  global.recipe_disable.forEach(item => {
    e.hide(item)
  })

  //===== hide mod-specific disabled item =====//
  let guidebookitems = [
    'astralsorcery:tome',
    Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'),
    'botania:lexicon',
    Item.of('patchouli:guide_book', '{"patchouli:book":"engineersdecor:engineersdecor_manual"}'),
    'ftbquests:book',
    Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"modularrouters:book"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"naturesaura:book"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'),
    'powah:book',
    Item.of('patchouli:guide_book', '{"patchouli:book":"resourcefulbees:fifty_shades_of_bees"}'),
    'rftoolsbase:manual', 'solpotato:food_book',
    Item.of('patchouli:guide_book', '{"patchouli:book":"sushigocrafting:sushigocrafting"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"touhou_little_maid:memorizable_gensokyo"}')
  ]
  guidebookitems.forEach(guidebookitem => {
    e.hide(guidebookitem)
  })

})

onEvent('jei.add.items', e => {
  e.add([
    'minecraft:dragon_egg',
    'minecraft:spawner',
    'touhou_little_maid:smart_slab_empty',
    'cb_microblock:stone_rod',
    'cb_microblock:stone_saw',
    'cb_microblock:iron_saw',
    'cb_microblock:diamond_saw',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank',
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:mechanist_workbench',
    'chisel:factory/dots',
    'chisel:futura/screen_metallic',
    'chisel:iron_chisel',
    'chisel:diamond_chisel',
    'chisel:hitech_chisel',
    'chisel:offset_tool',
    'chisel:auto_chisel',
    'chisel:antiblock/white'
  ])
})
