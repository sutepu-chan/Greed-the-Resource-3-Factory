onEvent('recipes', e => {
  function isBlackList(slab) {
    let blacklist = [
      'absentbydesign:slab_snow',
      'botania:mana_quartz_slab',
      'botania:blaze_quartz_slab',
      'botania:lavender_quartz_slab',
      'botania:red_quartz_slab',
      'botania:elf_quartz_slab',
      'botania:sunny_quartz_slab',
      'botania:livingwood_slab',
      'botania:livingwood_planks_slab',
      'botania:livingrock_slab',
      'botania:livingrock_bricks_slab',
      'botania:mossy_livingrock_bricks_slab',
      'botania:dreamwood_slab',
      'botania:dreamwood_planks_slab',
      'botania:dark_quartz_slab',
      'botania:metamorphic_forest_stone_slab',
      'botania:metamorphic_forest_bricks_slab',
      'botania:metamorphic_forest_cobblestone_slab',
      'botania:metamorphic_plains_stone_slab',
      'botania:metamorphic_plains_bricks_slab',
      'botania:metamorphic_mountain_stone_slab',
      'botania:metamorphic_mountain_bricks_slab',
      'botania:metamorphic_mountain_cobblestone_slab',
      'botania:metamorphic_fungal_stone_slab',
      'botania:metamorphic_fungal_bricks_slab',
      'botania:metamorphic_fungal_cobblestone_slab',
      'botania:metamorphic_swamp_stone_slab',
      'botania:metamorphic_swamp_bricks_slab',
      'botania:metamorphic_desert_stone_slab',
      'botania:metamorphic_swamp_cobblestone_slab',
      'botania:metamorphic_desert_bricks_slab',
      'botania:metamorphic_desert_cobblestone_slab',
      'botania:metamorphic_taiga_stone_slab',
      'botania:metamorphic_taiga_bricks_slab',
      'botania:metamorphic_taiga_cobblestone_slab',
      'botania:metamorphic_mesa_stone_slab',
      'botania:metamorphic_mesa_bricks_slab',
      'botania:metamorphic_mesa_cobblestone_slab',
      'botania:white_pavement_slab',
      'botania:black_pavement_slab',
      'botania:blue_pavement_slab',
      'botania:yellow_pavement_slab',
      'botania:red_pavement_slab',
      'botania:green_pavement_slab',
      'botania:shimmerrock_slab',
      'botania:shimmerwood_planks_slab'
    ];
    let k = 0;
    blacklist.forEach(element => {
      if (slab === element) k++;
    });
    if (k == 0) return false;
    else return true;
  }
  e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, slabs => {
    if (slabs.inputItems.length == 1 && (isBlackList(slabs.outputItems[0].withCount(1)) == false)) {
      e.shaped(slabs.inputItems[0], ['S', 'S'], {
        S: slabs.outputItems[0].withCount(1)
      });
    };
  });
  //===== recipe crash =====//
  removeRecipeByID(e, [
    'cataclysm:chiseled_end_stone_bricks',
    'endergetic:chiseled_end_stone_bricks'
  ]);
});