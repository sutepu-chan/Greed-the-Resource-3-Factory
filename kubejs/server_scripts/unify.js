//priority: 997
onEvent('recipes', e => {
  //===== unify metals =====//
    function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
      e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
      e.replaceOutput(`#forge:dusts/${name}`, dustItem)
      e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
      e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

      e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
      e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })

      if (name !== 'iron' && name !== 'gold') {
        e.remove({ input: `#forge:ores/${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
        e.remove({ input: `mekanism:dirty_dust_${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
        e.remove({ input: `#mekanism:clumps/${name}`, output: `mekanism:dirty_dust_${name}`, type: 'mekanism:crushing' })
        e.remove({ input: `#forge:ores/${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
        e.remove({ input: `mekanism:shard_${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
        e.remove({ input: `#forge:ores/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
        e.remove({ input: `#mekanism:crystals/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
      }

      e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
      e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)

      if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
        e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
        e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
        e.recipes.mekanism.enriching(Item.of(dustItem, 2), `#forge:ores/${name}`)
      }

      e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
      e.replaceInput(dustItem, `#forge:dusts/${name}`)
      e.replaceInput(ingotItem, `#forge:ingots/${name}`)
      e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
    }
    function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
      e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
      e.replaceInput(dustItem, `#forge:dusts/${name}`)
      e.replaceInput(ingotItem, `#forge:ingots/${name}`)
      e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

      e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
      e.replaceOutput(`#forge:dusts/${name}`, dustItem)
      e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
      e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
    }
    //===== unify vanilla =====//
    unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
    unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')
    //===== unify mod =====//
    unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget')
    unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget')
    unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
    unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
    unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
    unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
    unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
    unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
    unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')
    unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')
    //===== unify alloy =====//
    unifyCraftMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel')
    unifyCraftMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
    unifyCraftMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
    unifyCraftMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')
    //===== misc ore processing =====//
      //netherite
      e.replaceOutput('#forge:dusts/netherite', 'thermal:netherite_dust')
      e.replaceInput('mekanism:dust_netherite', '#forge:dusts/netherite')
      //coal dust
      e.replaceInput('bloodmagic:coalsand', '#forge:dusts/coal')
      e.replaceOutput('#forge:dusts/coal', 'mekanism:dust_coal')
      //sulfur
      e.replaceInput('mekanism:dust_sulfur', '#forge:dusts/sulfur')
      e.replaceInput('bloodmagic:sulfur', '#forge:dusts/sulfur')
      e.replaceOutput('#forge:dusts/sulfur', 'thermal:sulfur_dust')
  //===== unify metal plate =====//
    function plateProcessing(types) {
      types.forEach(([material, result]) => {
        e.replaceInput(`thermal:${material}_plate`, `#forge:plates/${material}`)
        e.replaceInput(material === 'gold' ? `create:${material}en_sheet` : `create:${material}_sheet`, `#forge:plates/${material}`)
        result = result ? result : `thermal:${material}_plate`
        e.remove({ id: `create:pressing/${material}_ingot` })
        e.remove({ id: `createaddition:pressing/${material}_ingot` })
        e.recipes.create.pressing(result, `#forge:ingots/${material}`).id(`kubejs:pressing/${material}_ingot`)
        e.remove({ id: `thermal:machine/press/press_${material}_ingot_to_plate` })
        e.recipes.thermal.press(result, `#forge:ingots/${material}`).id(`kubejs:machine/press/press_${material}_ingot_to_plate`)
      })
    }
    plateProcessing([
      ['iron'],
      ['gold'],
      ['copper'],
      ['tin'],
      ['lead'],
      ['silver'],
      ['nickel'],
      ['bronze'],
      ['electrum'],
      ['invar'],
      ['constantan'],
      ['signalum'],
      ['lumium'],
      ['enderium'],
      ['brass', 'create:brass_sheet'],
      ['zinc', 'createaddition:zinc_sheet'],
    ])
  //===== unify sawdust =====//
  e.replaceOutput('mekanism:sawdust', 'thermal:sawdust')
  //===== unify xp =====//
    let liquidxp = ['industrialforegoing:essence_bucket', 'mob_grinding_utils:fluid_xp_bucket']
    liquidxp.forEach( bucketxp => {
      e.replaceInput(bucketxp, '#forge:xp_bucket')
    })
  //===== netherstar block =====// 
    e.replaceInput('extendedcrafting:nether_star_block', '#forge:storage_blocks/nether_star')
    e.replaceInput('allthecompressed:nether_star_block', '#forge:storage_blocks/nether_star')
    removeRecipeByOutput(e, ['extendedcrafting:nether_star_block'])
    e.replaceOutput('#forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
  //===== unify honey =====//
    let normalHoney = ['cofh_core:honey', 'resourcefulbees:honey', 'create:honey']
    let beeHoney = ['resourcefulbees:catnip_honey', 'resourcefulbees:rainbow_honey', 'resourcefulbees:starry_honey']
    function createHoneyMixing(entries) {
      entries.forEach(([output, amount, honey, inputs, id]) => {
        let honeyMixingRecipe = { type: 'create:mixing', results: [{ item: output, amount: amount }] }
        let honeyMixingInputs = [{ fluidTag: 'forge:honey', amount: honey }]
        inputs.forEach(([input, type]) => honeyMixingInputs.push(type == 0 ? { item: input } : { tag: input }))
        honeyMixingRecipe = Object.assign({ ingredients: honeyMixingInputs }, honeyMixingRecipe)
        e.custom(honeyMixingRecipe).id(
          id
            ? `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}/${id}`
            : `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}`
        )
      })
    }
    //===== thermal =====//
      e.recipes.thermal.centrifuge(Fluid.of('resourcefulbees:honey', 100), '#forge:simple_honeycombs').id(`kubejs:thermal/centrifuge/centrifuge_honeycomb`)
      e.recipes.thermal.centrifuge(Fluid.of('resourcefulbees:honey', 900), '#forge:simple_honeycomb_blocks').id(`kubejs:thermal/centrifuge/centrifuge_honeycomb_block`)
      e.recipes.thermal.crucible(Fluid.of('resourcefulbees:honey', 1000), 'minecraft:honey_block').id('kubejs:thermal/crucible/crucible_honey_block_to_honey')
      normalHoney.forEach((honey, index) => {
        e.recipes.thermal.chiller('minecraft:honey_block', Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/honey_block/${index}`)
        e.recipes.thermal.bottler('minecraft:honey_bottle', [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/honey_bottle/${index}`)
      })
      beeHoney.forEach(honey => {
        e.recipes.thermal.chiller(`${honey}_block`, Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/chiller_honey_to_honey_block/${honey.substring(honey.indexOf(':') + 1)}`)
        e.recipes.thermal.bottler(`${honey}_bottle`, [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/bottler_honey_bottle/${honey.substring(honey.indexOf(':') + 1)}`)
        e.recipes.thermal.centrifuge(Fluid.of(honey, 100), honey.includes('rainbow') ? 'resourcefulbees:rgbee_honeycomb' : `${honey}comb`).id(`kubejs:thermal/centrifuge/centrifuge_honeycomb/${honey.substring(honey.indexOf(':') + 1)}`)
        e.recipes.thermal.centrifuge(Fluid.of(honey, 900), honey.includes('rainbow') ? 'resourcefulbees:rgbee_honeycomb_block' : `${honey}comb_block`).id(`kubejs:thermal/centrifuge/centrifuge_honeycomb_block/${honey.substring(honey.indexOf(':') + 1)}`)
        e.recipes.thermal.crucible(Fluid.of(honey, 1000), `${honey}_block`).id(`kubejs:thermal/crucible/crucible_honey_block_to_honey/${honey.substring(honey.indexOf(':') + 1)}`)
      })
    //===== create =====//
      e.recipes.create.emptying(['minecraft:glass_bottle', Fluid.of('resourcefulbees:honey', 250)], 'minecraft:honey_bottle').id('kubejs:emptying/honey_bottle')
      createHoneyMixing([
        [
          'minecraft:bee_nest', 1, 1000, [
            ['resourcefulbees:resourceful_honeycomb_block', 1],
            ['resourcefulbees:resourceful_honeycomb', 1],
            ['resourcefulbees:resourceful_honeycomb_block', 1]
          ]
        ],
        [
          'minecraft:cookie', 16, 50, [
            ['minecraft:wheat', 0],
            ['minecraft:cocoa_beans', 0],
            ['minecraft:wheat', 0]
          ]
        ],
        [
          'minecraft:glistering_melon_slice', 2, 100, [
            ['minecraft:melon_slice', 0],
            ['forge:nuggets/gold', 1],
            ['minecraft:melon_slice', 0]
          ]
        ],
        [
          'minecraft:beehive', 3, 100, [
            ['forge:chests', 1],
            ['resourcefulbees:resourceful_honeycomb', 1],
            ['forge:rods/wooden', 1]
          ]
        ],
        [
          'minecraft:honeycomb_block', 1, 100, [
            ['resourcefulbees:resourceful_honeycomb', 1],
            ['resourcefulbees:resourceful_honeycomb', 1],
            ['resourcefulbees:resourceful_honeycomb', 1]
          ]
        ],
        [
          'minecraft:honey_block', 1, 1000, [
            ['forge:rods/wooden', 1],
            ['forge:rods/wooden', 1],
            ['forge:rods/wooden', 1]
          ],
          1
        ],
        [
          'minecraft:pumpkin_pie', 1, 100, [
            ['minecraft:egg', 0],
            ['minecraft:pumpkin', 0],
            ['minecraft:egg', 0]
          ]
        ],
        [
          'minecraft:cake', 1, 500, [
            ['minecraft:egg', 0],
            ['minecraft:wheat', 0],
            ['minecraft:egg', 0]
          ]
        ],
        [
          'minecraft:golden_carrot', 2, 100, [
            ['minecraft:carrot', 0],
            ['forge:nuggets/gold', 1],
            ['minecraft:carrot', 0]
          ]
        ],
        [
          'minecraft:honey_bottle', 3, 750, [
            ['minecraft:glass_bottle', 0],
            ['minecraft:glass_bottle', 0],
            ['minecraft:glass_bottle', 0]
          ]
        ],
        ['minecraft:honey_block', 1, 1000, [['forge:rods/wooden', 1]], 2]
      ])
  //===== unify crude =====//
  e.recipes.thermal.centrifuge([Fluid.of('pneumaticcraft:oil', 100), 'minecraft:sand', 'thermal:bitumen', 'thermal:tar'], 'thermal:oil_sand').id('kubejs:machine/centrifuge/centrifuge_oil_sand')
  e.recipes.thermal.centrifuge([Fluid.of('pneumaticcraft:oil', 100), 'minecraft:red_sand', 'thermal:bitumen', 'thermal:tar'], 'thermal:oil_red_sand').id('kubejs:machine/centrifuge/centrifuge_oil_red_sand')
  e.custom({
    type: 'thermal:refinery',
    ingredient: { fluid: 'pneumaticcraft:oil', amount: 100 },
    result: [
      { fluid: 'thermal:heavy_oil', amount: 40 },
      { fluid: 'thermal:light_oil', amount: 60 },
      { item: 'thermal:bitumen', chance: 0.1 }
    ],
    energy: 6000
  }).id('kubejs:machine/refinery/pneumatic_crude_oil')
  e.custom({
    type: 'pneumaticcraft:amadron',
    input: { type: 'FLUID', id: 'thermal:crude_oil', amount: 5000 },
    output: { type: 'ITEM', id: 'minecraft:emerald', amount: 1 },
    static: true,
    level: 0
  }).id('kubejs:amadron/thermal/oil_to_emerald')

  //===== unify shield =====//
  removeRecipeByOutput(e, [
    'bettershields:netherite_shield',
    'upgradednetherite:netherite_shield'
  ])
  e.smithing('upgradednetherite:netherite_shield', 'bettershields:diamond_shield', '#forge:ingots/netherite')
  //===== unify silicon =====//
  removeRecipeByOutput(e, [
    'projectred-core:boule',
    'projectred-core:sand_coal_comp'
  ])
  e.replaceInput('projectred-core:silicon', '#forge:silicon')
  e.replaceOutput('#forge:silicon', 'refinedstorage:silicon')
  //===== unify obsidian =====//
  removeRecipeByOutput(e, [
    'nourished_nether:obsidian_bricks',
    'nourished_nether:obsidian_brick_slab',
    'nourished_nether:obsidian_brick_stairs',
    'nourished_nether:obsidian_brick_wall'
  ])
  removeRecipeByInput(e, [
    'nourished_nether:obsidian_bricks',
    'nourished_nether:obsidian_brick_slab',
    'nourished_nether:obsidian_brick_stairs',
    'nourished_nether:obsidian_brick_wall'
  ])
  //===== remove duplicated items =====//
  removeRecipeByID(e, [
    'mekanism:block_charcoal',
    'titanium:iron_gear',
    'titanium:gold_gear',
    'titanium:diamond_gear',
    'biggerreactors:crafting/yellorium_block'
  ])
  removeRecipeByOutput(e, [
    'mekanism:block_charcoal',
    'titanium:iron_gear',
    'titanium:gold_gear',
    'titanium:diamond_gear',
    'moreminecarts:minecart_with_chunk_loader',
    'moreminecarts:chunk_loader',
    'naturesaura:chunk_loader',
    'draconicmachinery:chunk_loader',
    'mekanism:upgrade_anchor',
    'createaddition:diamond_grit',
    'biggerreactors:yellorite_ore',
    'biggerreactors:yellorium_dust',
    'thermal:beetroot_block',
    'thermal:potato_block',
    'thermal:carrot_block',
    'allthecompressed:atm_star_block',
    /allthecompressed:atm_star_block_.+/,
    'extradisks:infinite_fluid_storage_block',
    'extradisks:infinite_fluid_storage_part',
    'extradisks:infinite_fluid_storage_disk',
    'extradisks:infinite_storage_block',
    'extradisks:infinite_storage_part',
    'extradisks:infinite_storage_disk'
  ])
})

