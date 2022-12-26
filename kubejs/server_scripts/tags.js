//priority: 1000
// ===== items tag =====//
onEvent('item.tags', e => {
  // ===== constants =====//
  let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
  let allthemodiumores = ['allthemodium', 'vibranium', 'unobtainium']

  // ===== add tag =====//
  // ===== 5x tag =====//
  allthemodiumores.forEach(item => {
    e.add(`mekanism:clumps/${item}`, `allthemodium:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    e.add(`mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    e.add(`mekanism:shards/${item}`, `allthemodium:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    e.add(`mekanism:crystals/${item}`, `allthemodium:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })
  alltheores.forEach(item => {
    e.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    e.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    e.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    e.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })
  //===== chisel tag =====//
  e.add('chisel:marble', ['astralsorcery:marble_raw'])
  e.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone'])
  e.add('chisel:basalt', ['minecraft:basalt', 'minecraft:polished_basalt'])
  e.add('chisel:sandstone', ['minecraft:sandstone', 'minecraft:chiseled_sandstone', 'minecraft:cut_sandstone', 'minecraft:smooth_sandstone'])
  e.add('chisel:metals/aluminum', 'alltheores:aluminum_block')
  e.add('chisel:metals/bronze', 'thermal:bronze_block')
  e.add('chisel:emerald', 'minecraft:emerald_block')
  e.add('chisel:redstone', 'minecraft:redstone_block')
  e.add('chisel:coal', 'minecraft:coal_block')
  e.add('chisel:charcoal', 'thermal:charcoal_block')
  e.add('chisel:end_stone', 'minecraft:end_stone')
  //===== stones tag =====//
  e.add('forge:marble', '#chisel:marble')
  //===== woods tag =====//
  e.add('minecraft:logs_unstripped', '/^.+:(?!stripped_).+_log$/')
  e.add('minecraft:boats', ['/.+_boat/'])
  e.add('forge:workbench', ['/.+crafting_table/'])
  e.add('forge:barrels', ['/.+barrel/'])
  //===== tools tag =====//
  e.add('forge:swords', ['allthemodium:alloy_paxel', 'allthemodium:alloy_sword'])
  e.add('forge:pickaxes', 'allthemodium:alloy_pick')
  e.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
  e.add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])
  e.add('curios:angelring', 'botania:flight_tiara')
  e.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/'])
  e.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
  e.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
  e.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
  e.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])
  //===== ingots tag =====//
  e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  e.add('forge:ores', ['#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
  e.add('forge:plastic', ['#pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet'])
  e.add('forge:ingots', ['#forge:ingots/unobtainium_allthemodium_alloy', '#forge:ingots/vibranium_unobtainium_alloy', '#forge:ingots/vibranium_allthemodium_alloy'])
  e.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')
  e.add('forge:gems', '#forge:gems/dimensionalshard')
  e.add('forge:silicon', 'projectred-core:silicon')
  //===== plants tag =====// 
  e.add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
  e.add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'minecraft:dead_bush', 'environmental:cattail', 'atmospheric:passion_vine', 'atmospheric:arid_sprouts'])
  e.add('misctags:biofuel5', ['environmental:tall_dead_bush', 'environmental:tall_cattail', '#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:small_flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
  e.add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
  e.add('misctags:biofuel8', ['#forge:cakes', 'minecraft:pumpkin_pie', '#minecraft:tall_flowers'])
  e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  e.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  e.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  e.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus'])
  //===== blocks tag =====// 
  e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
  e.add('forge:storage_blocks', '#forge:storage_blocks/uraninite')
  e.add('forge:storage_blocks/nether_star', ['extendedcrafting:nether_star_block', 'allthecompressed:nether_star_block'])
  e.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])
  e.add('dankstorage:blacklisted_usage', '/^backpack/')
  e.add('minecraft:wart_blocks', '/.+_wart_block/')
  e.add('forge:simple_honeycombs', '/^.+:(?!(catnip|rgbee)_).*honeycomb$/')
  e.add('forge:simple_honeycomb_blocks', '/^.+:(?!(catnip|rgbee)_).*honeycomb_block$/')
  e.add('forge:dirt', ['mob_grinding_utils:dreadful_dirt', 'mob_grinding_utils:delightful_dirt', 'minecraft:mycelium', 'minecraft:dirt', 'minecraft:grass_block', 'minecraft:grass_path'])
  e.add('quark:vertical_slab', ['#quark:wooden_vertical_slabs', '#quark:vertical_slabs', '/.+_vertical_slab/'])
  //===== misc tag =====//
  e.add('misctags:water/items', ['#forge:water', 'minecraft:water_bucket', 'create:honey_bucket', 'create:chocolate_bucket', 'mysticalagriculture:water_essence', 'resourcefulbees:honey_fluid_bucket'])
  e.add('forge:xp_bucket', ['industrialforegoing:essence_bucket', 'mob_grinding_utils:fluid_xp_bucket'])
  e.add('forge:cakes', ['minecraft:cake', 'create:blaze_cake_base', 'createaddition:chocolate_cake', 'createaddition:honey_cake', 'createaddition:cake_base', 'createaddition:cake_base_baked', 'farmersdelight:sweet_berry_cheesecake', 'thermal:carrot_cake', 'thermal:chocolate_cake', 'thermal:potion_cake', 'thermal:spice_cake'])
  e.add('forge:creative_energy_source', ['powah:energy_cell_creative', 'createaddition:creative_energy', 'draconicevolution:creative_op_capacitor'])
  //===== remove tag =====//
  e.remove(`minecraft:small_flowers`, `#botania:special_flowers`)
  e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
  e.remove('curios:charm', 'angelring:itemring')
  e.remove('curios:ring', 'angelring:itemring')
  e.remove('curios:head', 'botania:flight_tiara')
  e.remove('minecraft:beehives', ['resourcefulbees:t1_beehive', 'resourcefulbees:t2_beehive', 'resourcefulbees:t3_beehive', 'resourcefulbees:t4_beehive'])
  e.remove('forge:chests/personal', 'mekanism:personal_chest')
  e.remove('forge:chests/electric', 'mekanism:personal_chest')
  e.remove('forge:chests', 'mekanism:personal_chest')
})

// ===== blocks tag =====//
onEvent('block.tags', e => {
  //===== add tag =====//
  //===== stone tag =====//
  e.add('forge:marble', '#chisel:marble')
  //===== ingots tag =====//
  e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  e.add('forge:ores', ['#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
  //===== misc tag =====//
  e.add('misctags:no_moving', ['#minecraft:wither_immune', /^refinedstorage:/, /^waystones:/])
  e.add('mekanism:cardboard_blacklist', '#misctags:no_moving')
  e.add('create:brittle', '#misctags:no_moving')
  //===== plants tag =====//
  e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  e.add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  e.add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  e.add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus'])
  //===== blocks tag =====//
  e.add('resourcefulbees:valid_apiary', ['glassential:glass_dark_ethereal', 'glassential:glass_dark_ethereal_reverse', 'glassential:glass_ethereal', 'glassential:glass_ethereal_reverse', 'glassential:glass_ghostly'])
  e.add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum', '#forge:storage_blocks/nether_star'])
  e.add('forge:storage_blocks/nether_star', ['extendedcrafting:nether_star_block', 'allthecompressed:nether_star_block'])
  e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
  e.add('mcwwindows:window', '/mcwwindows:.+_win/')
  e.add('misctags:concrete', '/minecraft:.+_concrete/')
  e.add('buildinggadgets:blacklist/copy_paste', /^refinedstorage:.+$/)
  e.add('buildinggadgets:blacklist/building', /^refinedstorage:.+$/)
  //===== remove tag =====//
  e.removeAll('minecraft:enderman_holdable')
  e.remove('forge:chests/personal', 'mekanism:personal_chest')
  e.remove('forge:chests/electric', 'mekanism:personal_chest')
  e.remove('forge:chests', 'mekanism:personal_chest')
})

onEvent('entity_type.tags', e => {
  e.add('industrialforegoing:mob_imprisonment_tool_blacklist', [/resourcefulbees:.+_bee/, 'cataclysm:ender_guardian', 'cataclysm:netherite_monstrosity', 'dungeonsmod:voidmaster', 'dungeonsmod:sun', 'dungeonsmod:kraken', 'dungeonsmod:king', 'dungeonsmod:deserted', 'dungeonsmod:ironslime', 'dungeonsmod:crawler'])
  e.add('mob_grinding_utils:noswab', [/resourcefulbees:.+_bee/, 'cataclysm:ender_guardian', 'cataclysm:netherite_monstrosity', 'dungeonsmod:voidmaster', 'dungeonsmod:sun', 'dungeonsmod:kraken', 'dungeonsmod:king', 'dungeonsmod:deserted', 'dungeonsmod:ironslime', 'dungeonsmod:crawler'])
})

//===== fluid tag =====//
onEvent('fluid.tags', e => {
  let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
  alltheores.forEach(material => {
    e.add(`forge:molten_${material}`, [`alltheores:molten_${material}`, `#tconstruct:molten_${material}`])
  })
  e.add('forge:essence', 'pneumaticcraft:memory_essence')
  e.add('minecraft:water', ['cofh_core:honey', 'resourcefulbees:catnip_honey', 'resourcefulbees:honey', 'resourcefulbees:rainbow_honey_flowing', 'resourcefulbees:rainbow_honey'])
})

