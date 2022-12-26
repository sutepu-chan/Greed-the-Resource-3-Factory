onEvent('item.modification', e => {
  let colors = [`white`, `light_gray`, `gray`, `black`, `red`, `orange`, `yellow`, `lime`, `green`, `light_blue`, `cyan`, `blue`, `purple`, `magenta`, `pink`, `brown`]

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach(item => {
      e.modify(item, item => item.maxStackSize = countPerStack)
    })
  }

  
/* =====stack to 64===== */
  modifyStack([
    /^industrialforegoing:.*addon.*/,
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:honey_bottle',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:birch_sign',
    'minecraft:acacia_sign',
    'minecraft:jungle_sign',
    'minecraft:dark_oak_sign',
    'minecraft:crimson_sign',
    'minecraft:warped_sign',
    'upgrade_aquatic:driftwood_sign',
    'upgrade_aquatic:river_sign',
    'powah:charged_snowball',
    'upgrade_aquatic:mulberry_jam_bottle',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_filter',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_gas',
    'mekanism:upgrade_anchor',
    'thermal:explosive_grenade',
    'thermal:slime_grenade',
    'thermal:redstone_grenade',
    'thermal:glowstone_grenade',
    'thermal:ender_grenade',
    'thermal:earth_grenade',
    'thermal:fire_grenade',
    'thermal:ice_grenade',
    'thermal:lightning_grenade',
    'bloodmagic:voidsigil',
    'mob_grinding_utils:golden_egg',
    'mob_grinding_utils:rotten_egg',
    'extendedcrafting:ultimate_singularity'
  ], 64)

  colors.forEach(color => {
    e.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })

  /* =====stack to 16===== */
  modifyStack([
    'ironchest:iron_to_gold_chest_upgrade',
    'ironchest:gold_to_diamond_chest_upgrade',
    'ironchest:copper_to_silver_chest_upgrade',
    'ironchest:silver_to_gold_chest_upgrade',
    'ironchest:copper_to_iron_chest_upgrade',
    'ironchest:diamond_to_crystal_chest_upgrade',
    'ironchest:wood_to_iron_chest_upgrade',
    'ironchest:wood_to_copper_chest_upgrade',
    'ironfurnaces:upgrade_iron',
    'ironfurnaces:upgrade_gold',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_emerald',
    'ironfurnaces:upgrade_obsidian',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_netherite', 
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_silver2',
    'ironfurnaces:upgrade_allthemodium',
    'ironfurnaces:upgrade_vibranium',
    'ironfurnaces:upgrade_unobtainium',
  ], 16)

  //===== stack to 1 =====//
  modifyStack([
    'minecraft:mushroom_stew',
    'minecraft:beetroot_soup'
  ], 1)

})

