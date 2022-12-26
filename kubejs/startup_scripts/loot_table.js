onEvent('entity.loot_tables', event => {

  event.addEntity('minecraft:ender_dragon', table => {
    table.addPool(pool => {
      pool.rolls = [2, 6]
      pool.addItem('mysticalagriculture:supremium_essence')
    })
    table.addPool(pool => {
      pool.addItem('minecraft:dragon_egg')
    })
  })
  event.addEntity('minecraft:wither', table => {
    table.addPool(pool => {
      pool.rolls = [1, 3]
      pool.addItem('mysticalagriculture:supremium_essence')
    })
  })
  event.modifyEntity('minecraft:blaze', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('minecraft:blaze_rod')
    })
  })
  event.addEntity('dungeonsmod:crawler', table => {
    table.addPool(pool => {
      pool.rolls = [1, 2]
      pool.addItem('draconicevolution:awakened_draconium_block')
    })
    table.addPool(pool => {
      pool.rolls = [28, 36]
      pool.addItem('draconicevolution:draconium_block')
    })
    table.addPool(pool => {
      pool.rolls = [12, 20]
      pool.addItem('farmersdelight:hamburger')
    })
    table.addPool(pool => {
      pool.rolls = [4, 6]
      pool.addItem('allthemodium:unobtainium_ingot')
    })
  })
  event.addEntity('dungeonsmod:ironslime', table => {
    table.addPool(pool => {
      pool.rolls = 64
      pool.addItem('minecraft:iron_block')
      pool.addItem('minecraft:iron_ore')
      pool.addItem('minecraft:iron_ingot')
      pool.addItem('minecraft:slime_block')
    })
  })
  event.addEntity('dungeonsmod:deserted', table => {
    table.addPool(pool => {
      pool.rolls = 64
      pool.addItem('farmersdelight:bacon_sandwich')
      pool.addItem('thermal:oil_sand')
      pool.addItem('resourcefulbees:sandy_honeycomb')
    })
    table.addPool(pool => {
      pool.rolls = 4
      pool.addItem('allthecompressed:sand_block_3x')
    })
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('create:sand_paper')
    })
  })
  event.addEntity('dungeonsmod:king', table => {
    table.addPool(pool => {
      pool.rolls = 64
      pool.addItem('minecraft:gold_ingot')
      pool.addItem('minecraft:gold_block')
      pool.addItem('betteranimalsplus:golden_goose_egg')
    })
    table.addPool(pool => {
      pool.rolls = 4
      pool.addItem('quark:golden_apple_crate', 4, 1)
    })
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('artifacts:golden_hook', 1, 1)
    })
  })
  event.addEntity('dungeonsmod:kraken', table => {
    table.addPool(pool => {
      pool.rolls = 64
      pool.addItem('outvoted:kraken_tooth')
      pool.addItem('minecraft:sea_lantern')
    })
    table.addPool(pool => {
      pool.rolls = 4
      pool.addItem('outvoted:kraken_spawn_egg')
      pool.addItem('minecraft:heart_of_the_sea')
    })
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('botania:water_rod', 1, 1)
    })
  })
  event.addEntity('dungeonsmod:sun', table => {
    table.addPool(pool => {
      pool.rolls = 3
      pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:refined_glowstone"}'))
      pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lumium"}'))
    })
  })
  event.addEntity('dungeonsmod:voidmaster', table => {
    table.addPool(pool => {
      pool.rolls = 64
      pool.addItem('extendedcrafting:enhanced_ender_ingot')
      pool.addItem('extendedcrafting:crystaltine_ingot')
      pool.addItem('draconicevolution:infused_obsidian')
      pool.addItem('mekanismadditions:obsidian_tnt')
    })
    table.addPool(pool => {
      pool.rolls = 3
      pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:refined_obsidian"}'))
    })
  })
  event.addEntity('cataclysm:netherite_monstrosity', table => {
    table.addPool(pool => {
      pool.rolls = [32, 48]
      pool.addItem('minecraft:netherite_block')
    })
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('nethers_delight:hoglin_mount')
    })
    table.addPool(pool => {
      pool.rolls = [2, 6]
      pool.addItem('nethers_delight:stuffed_hoglin_item')
      pool.addItem('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot')
    })
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('comfortable_nether:baleen_pouch', 1)
      pool.addItem('comfortable_nether:curioof_passion', 1)
      pool.addItem('comfortable_nether:spectral_lantern', 1)
    })
  })
  event.addEntity('cataclysm:ender_guardian', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('powah:ender_cell_nitro')
      pool.addItem('allthecompressed:enderium_block_2x')
    })
    table.addPool(pool => {
      pool.rolls = [2, 6]
      pool.addItem('extendedcrafting:ender_star')
      pool.addItem('upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot')
    })
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('artifacts:shock_pendant', 1)
      pool.addItem('artifacts:flame_pendant', 1)
      pool.addItem('artifacts:thorn_pendant', 1)
    })
  })
})