onEvent('recipes', e => {
  removeRecipeByOutput(e, [
    'industrialforegoing:machine_frame_pity',
    'bloodmagic:altar',
    'botania:alfheim_portal',
    'botania:diluted_pool',
    'botania:mana_pool',
    'botania:fabulous_pool',
    'botania:apothecary_default',
    'botania:runic_altar',
    'create:andesite_alloy',
    'thermal:redstone_servo',
    'thermal:rf_coil',
    'thermal:machine_frame'
  ])

  //===== Blood Magic to Botania =====//
  e.recipes.astralsorcery.block_transmutation({
    input: { block: 'quark:nether_wart_sack', },
    output: { block: 'bloodmagic:altar' },
    starlight: 1000.0
  }).id(`kubejs:astralsorcery/block_transmutation/blood_altar`)

  //===== Botania to Industrial Foregoing =====//
  e.recipes.botania.runic_altar({
    output: { item: 'industrialforegoing:machine_frame_pity' },
    mana: 200,
    ingredients: [
      { tag: 'forge:storage_blocks/redstone' },
      { tag: 'forge:storage_blocks/redstone' },
      { tag: 'forge:storage_blocks/redstone' },
      { tag: 'forge:storage_blocks/redstone' },
      { tag: 'minecraft:logs' },
      { tag: 'minecraft:logs' },
      { tag: 'minecraft:logs' },
      { tag: 'minecraft:logs' },
      { tag: 'forge:ingots/iron' },
    ]
  }).id('kubejs:botania/runic_altar/machine_frame_pity')

  e.recipes.botania.runic_altar({
    output: { item: 'botania:alfheim_portal' },
    mana: 200,
    ingredients: [
      { tag: 'forge:nuggets/terrasteel' },
      { tag: 'forge:nuggets/terrasteel' },
      { tag: 'forge:nuggets/terrasteel' },
      { tag: 'botania:livingwood' },
      { tag: 'botania:livingwood' },
      { tag: 'botania:livingwood' },
      { tag: 'botania:livingwood' },
      { tag: 'botania:livingwood' },
      { tag: 'botania:livingwood' }
    ]
  }).id('kubejs:botania/runic_altar/alfheim_portal')

  e.recipes.botania.petal_apothecary({
    output: { item: 'botania:diluted_pool' },
    ingredients: [
      { item: 'botania:livingrock' },
      { item: 'botania:livingrock' },
      { item: 'botania:livingrock' },
      { item: 'botania:livingrock' },
      { item: 'botania:livingrock' }
    ]
  }).id('kubejs:botania/petal_apothecary/diluted_pool')

  e.recipes.botania.petal_apothecary({
    output: { item: 'botania:mana_pool' },
    ingredients: [
      { item: 'botania:diluted_pool' },
      { item: 'minecraft:ender_pearl' },
      { item: 'minecraft:grass' },
      { item: 'minecraft:dandelion' },
      { item: 'minecraft:poppy' }
    ]
  }).id('kubejs:botania/petal_apothecary/mana_pool')

  e.recipes.botania.petal_apothecary({
    output: { item: 'botania:fabulous_pool' },
    ingredients: [
      { item: 'botania:mana_pool' },
      { item: 'botania:bifrost_perm' },
      { item: 'botania:bifrost_perm' },
      { item: 'botania:bifrost_perm' },
      { item: 'botania:bifrost_perm' },
      { item: 'botania:bifrost_perm' }
    ]
  }).id('kubejs:botania/petal_apothecary/fabulous_pool')

  e.recipes.bloodmagic.altar('botania:apothecary_default', 'minecraft:stone_bricks').upgradeLevel(1).altarSyphon(200)
  e.recipes.bloodmagic.altar('botania:runic_altar', 'botania:livingrock').upgradeLevel(1).altarSyphon(500)
  //===== Mekanism to Create =====//
  e.recipes.mekanism.combining('create:andesite_alloy', 'minecraft:andesite', ['#forge:nuggets/iron', '#forge:nuggets/zinc'])
  modifyShaped(e, 'create:mechanical_crafter', 3, [' E ', 'PRG', 'BCB'], {
    C: 'craftingstation:crafting_station',
    B: 'createaddition:brass_rod',
    G: 'createaddition:gold_spool',
    E: 'create:electron_tube',
    P: 'create:precision_mechanism',
    R: 'createsupercharged:raw_essence'
  })
  //===== Create to Thermal=====//
  e.recipes.create.mechanical_crafting('thermal:redstone_servo', [
    'RZR',
    ' Z ',
    'RZR'
  ],
    {
      R: '#forge:dusts/redstone',
      Z: '#forge:ingots/zinc'
    })
  e.recipes.create.mechanical_crafting('thermal:rf_coil', [
    '    G',
    '   R ',
    '  B  ',
    ' R   ',
    'G    '
  ],
    {
      R: '#forge:dusts/redstone',
      B: '#forge:rods/brass',
      G: '#forge:ingots/gold'
    })
  e.recipes.create.mechanical_crafting('thermal:machine_frame', [
    '  I  ',
    ' G G ',
    'I T I',
    ' G G ',
    '  I  '
  ],
    {
      I: '#forge:ingots/iron',
      G: '#forge:glass',
      T: '#forge:gears/tin'
    })
  utils.listOf([
    'thermal:dynamo_stirling',
    'thermal:dynamo_compression',
    'thermal:dynamo_magmatic',
    'thermal:dynamo_numismatic',
    'thermal:dynamo_lapidary',
    'thermal:dynamo_disenchantment',
    'thermal:dynamo_gourmand'
  ]).forEach(dynamoitem => {
    e.replaceInput({ output: dynamoitem }, 'thermal:rf_coil', 'extendedcrafting:redstone_ingot')
  })
  //===== Thermal to Bee =====//
  modifyShaped(e, 'resourcefulbees:mechanical_centrifuge', 1, ['I ', 'SL', 'I '], {
    I: 'minecraft:iron_trapdoor',
    S: 'thermal:signalum_glass',
    L: 'minecraft:lever'
  })
  modifyShaped(e, 'resourcefulbees:centrifuge', 1, ['III', 'WMW', 'SLS'], {
    M: 'resourcefulbees:mechanical_centrifuge',
    L: 'thermal:lumium_glass',
    I: 'minecraft:iron_ingot',
    W: 'resourcefulbees:wax',
    S: 'minecraft:smooth_stone'
  })
})
