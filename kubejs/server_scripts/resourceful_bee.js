onEvent('recipes', e => {
    //===== comb recipes =====//
    let craftingShapes = [
      //vertical
      ['  C', '  C', '  C'],
      [' C ', ' C ', ' C '],
      ['C  ', 'C  ', 'C  '],
      //horizontal
      ['CCC', '   ', '   '],
      ['   ', 'CCC', '   '],
      ['   ', '   ', 'CCC'],
      //diagonal
      ['  C', ' C ', 'C  '],
      ['C  ', ' C ', '  C'],
      //misc
      ['  C', ' C ', ' C '],
      [' C ', 'C  ', 'C  '],
      ['  C', 'CC ', '   '],
      ['   ', '  C', 'CC '],
      ['  C', '  C', ' C '],
      [' C ', ' C ', 'C  '],
      ['C C', ' C ', '   '],
      ['   ', 'C C', ' C '],
      [' C ', ' C ', '  C'],
      ['C  ', 'C  ', ' C '],
      ['   ', ' C ', 'C C'],
      [' C ', 'C C', '   '],
      ['  C', ' C ', '  C'],
      [' C ', 'C  ', ' C '],
      ['   ', 'CC ', '  C'],
      ['CC ', '  C', '   ']
    ] // 25 now
    let dyes = []
    function shapedRecipe(results, craftingItem, itemCount) {
      let maxLength = Math.min(craftingShapes.length, results.length)
      for (let i = 0; i < maxLength; i++) {
        let recipe = {
          pattern: craftingShapes[i],
          key: { C: { item: craftingItem } },
          result: {
            item: results[i].match(/^([a-z\-_0-9]+:[a-z\-_0-9]+)(?:{[^}]*})?$/)[1],
            count: itemCount
          }
        }
        if (results[i].match(/{.+}/)) recipe.result['nbt'] = results[i].match(/{.+}/)[0]
        e.recipes.cucumber.shaped_no_mirror(recipe)
      }
    }
    colors.forEach(color => {
      dyes.push(`minecraft:${color}_dye`)
    })
    shapedRecipe(dyes, 'resourcefulbees:rainbow_honey_block', 32)
    shapedRecipe(['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'create:gabbro', 'create:dolomite', 'create:weathered_limestone', 'create:limestone', 'create:scoria', 'create:dark_scoria', 'astralsorcery:marble_raw'], 'resourcefulbees:stan_honeycomb', 1)
    shapedRecipe(['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'create:gabbro', 'create:dolomite', 'create:weathered_limestone', 'create:limestone', 'create:scoria', 'create:dark_scoria', 'astralsorcery:marble_raw'], 'resourcefulbees:stan_honeycomb_block', 9)
    shapedRecipe(['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log', 'minecraft:crimson_stem', 'minecraft:warped_stem'], 'resourcefulbees:lumber_honeycomb', 1)
    shapedRecipe(['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log', 'minecraft:crimson_stem', 'minecraft:warped_stem'], 'resourcefulbees:lumber_honeycomb_block', 9)
    //===== fix tier 1 beehive recipe =====//
    e.shaped('resourcefulbees:t1_beehive', ['GGG', 'GBG', 'GGG'], {
        G: 'minecraft:grass',
        B: [/.+bee_nest/,'atmospheric:rosewood_beehive', 'atmospheric:morado_beehive', 'atmospheric:yucca_beehive', 'atmospheric:kousa_beehive', 'atmospheric:aspen_beehive', 'atmospheric:grimwood_beehive', 'autumnity:maple_beehive', 'environmental:willow_beehive', 'environmental:cherry_beehive', 'environmental:wisteria_beehive', 'buzzier_bees:spruce_beehive', 'buzzier_bees:birch_beehive', 'buzzier_bees:jungle_beehive', 'buzzier_bees:acacia_beehive', 'buzzier_bees:dark_oak_beehive', 'buzzier_bees:crimson_beehive', 'buzzier_bees:warped_beehive', 'minecraft:beehive', 'endergetic:poise_beehive', 'upgrade_aquatic:driftwood_beehive', 'upgrade_aquatic:river_beehive']
    }).id(`kubejs:resourcefulbees/t1_beehive`) 
    //===== water and lava comb recipe =====//
    e.shaped('minecraft:water_bucket', [' C ', 'CBC', ' C '], {
        C: 'resourcefulbees:water_honeycomb',
        B: 'minecraft:bucket'
    }).id(`kubejs:minecraft/water_bucket`)
    e.shaped('minecraft:lava_bucket', [' C ', 'CBC', ' C '], {
        C: 'resourcefulbees:lava_honeycomb',
        B: 'minecraft:bucket'
    }).id(`kubejs:minecraft/lava_bucket`)
    //===== accepting tag recipes =====//
    modifyShaped(e, 'resourcefulbees:bee_jar', 16, [' G ', 'G G', 'GGG'], {
        G: '#forge:glass'
    })
    //===== balancing recipes =====//
    modifyShaped(e, 'creativeapiary:tcreative_apiary', 1, ['MTM', 'THT', 'ATB'], {
        H: 'allthecompressed:honey_block_6x',
        M: 'mekanism:pellet_antimatter',
        T: 'resourcefulbees:t4_apiary',
        A: 'allthecompressed:ua_alloy_block_4x',
        B: 'allthecompressed:uv_alloy_block_4x'
    })
    modifyShaped(e, 'creativeapiary:creative_apiary_storage', 1, ['HNH', 'CAC', 'NHN'], {
        H: 'allthecompressed:honey_block_3x',
        N: 'allthecompressed:nether_star_block_2x',
        C: 'mekanism:personal_chest',
        A: 'resourcefulbees:apiary_storage'
    })
    modifyShaped(e, 'creativeapiary:creative_apiary_breeder', 1, ['BNB', 'NBN', 'BNB'], {
        B: 'resourcefulbees:apiary_breeder',
        N: 'allthecompressed:nether_star_block_2x'
    })
    modifyShaped(e, 'ctiers:centrifuge_casing_tier_creative', 1, ['IRG', 'RTR', 'DRE'], {
        I: 'allthecompressed:iron_block_4x',
        R: 'allthecompressed:redstone_block_6x',
        G: 'allthecompressed:gold_block_4x',
        T: 'ctiers:centrifuge_casing_tier_5',
        D: 'allthecompressed:diamond_block_4x',
        E: 'allthecompressed:emerald_block_4x'
    })
    modifyShaped(e, 'ctiers:centrifuge_controller_tier_creative', 1, ['ICG', 'HSH', 'DHE'], {
        I: 'allthecompressed:iron_block_6x',
        C: 'ctiers:centrifuge_casing_tier_creative',
        G: 'allthecompressed:gold_block_6x',
        S: 'upgradednetherite_creative:creative_upgraded_netherite_ingot',
        D: 'allthecompressed:diamond_block_6x',
        E: 'allthecompressed:emerald_block_6x',
        H: 'allthecompressed:honey_block_6x'
    })
    modifyShaped(e, 'resourcefulbees:elite_centrifuge_casing', 3, ['NBN', 'BNB', 'NRN'], {
        B: 'resourcefulbees:centrifuge_casing',
        N: 'minecraft:netherite_ingot',
        R: 'minecraft:redstone'
    })
    modifyShaped(e, 'resourcefulbees:elite_centrifuge_controller', 1, ['BNB', 'NCN', 'BNB'], {
        B: 'resourcefulbees:elite_centrifuge_casing',
        N: 'minecraft:netherite_block',
        C: 'resourcefulbees:centrifuge_controller'
    })
    modifyShaped(e, 'resourcefulbees:centrifuge_controller', 1, ['ICI', 'BAB', 'IRI'], {
        I: 'resourcefulbees:centrifuge_casing',
        C: 'resourcefulbees:centrifuge',
        B: 'minecraft:iron_bars',
        A: 'minecraft:comparator',
        R: '#forge:storage_blocks/redstone'
    })
    modifyShaped(e, 'ctiers:centrifuge_casing_tier_3', 1, ['GRG', 'RCR', 'GRG'], {
        G: 'allthecompressed:gold_block_2x',
        R: 'minecraft:redstone',
        C: 'resourcefulbees:elite_centrifuge_casing',
    })
    modifyShaped(e, 'ctiers:centrifuge_controller_tier_3', 1 , ['GCG', 'EDE', 'GPG'], {
        G: 'allthecompressed:gold_block_2x',
        E: 'minecraft:ender_eye',
        C: 'ctiers:centrifuge_casing_tier_3',
        D: 'resourcefulbees:elite_centrifuge_controller',
        P: 'minecraft:ender_pearl'
    })
    modifyShaped(e, 'ctiers:centrifuge_casing_tier_5', 1, ['GRG', 'RCR', 'GRG'], {
        G: 'allthecompressed:emerald_block_4x',
        R: 'minecraft:redstone',
        C: 'ctiers:centrifuge_casing_tier_4',
    })
    modifyShaped(e, 'ctiers:centrifuge_controller_tier_5', 1 , ['GCG', 'EDE', 'GPG'], {
        G: 'allthecompressed:emerald_block_4x',
        E: 'minecraft:ender_eye',
        C: 'ctiers:centrifuge_casing_tier_5',
        D: 'ctiers:centrifuge_controller_tier_4',
        P: 'minecraft:ender_pearl'
    })
    //===== remove recipes =====//
    removeRecipeByOutput(e, [
        'resourcefulbees:t1_beehive',
        'creativeapiary:tcreative_apiary'
    ])
})
  