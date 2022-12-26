onEvent('recipes', e => {
//===== add compatibility to other mods =====//
  //===== fix duplicating recipes =====//
  e.remove([
    {output: 'minecraft:emerald_ore', input: '5x #forge:dusts/emerald'},
    {output: 'minecraft:diamond_ore', input: '5x #forge:dusts/diamond'},
    {output: 'minecraft:ancient_debris', input:'2x #forge:dusts/netherite'}
  ])

  function oreRecover(oreList) {
    oreList.forEach(([ore, ingredient, count, block]) => {
      e.recipes.mekanism.combining(ore, Item.of(ingredient, count), block).id(`kubejs:combiner/${ore.replace(':', '/')}`)
    })
  }
  oreRecover([
    ['minecraft:diamond_ore', '#forge:dusts/diamond', 9, '#forge:cobblestone'],
    ['minecraft:emerald_ore', '#forge:dusts/emerald', 9, '#forge:cobblestone'],
    ['minecraft:ancient_debris', '#forge:dusts/netherite', 9, '#chisel:basalt'],
    ['draconicevolution:end_draconium_ore', 'draconicevolution:draconium_dust', 9, '#chisel:end_stone'],
    ['draconicevolution:nether_draconium_ore', 'draconicevolution:draconium_dust', 9, '#forge:netherrack'],
    ['draconicevolution:overworld_draconium_ore', 'draconicevolution:draconium_dust', 9, '#forge:cobblestone']
  ])
  e.recipes.mekanism.crushing('9x minecraft:bone_meal', 'minecraft:bone_block')
  e.recipes.mekanism.enriching('2x alltheores:uranium_ingot', 'powah:uraninite')
  e.recipes.mekanism.crushing('2x betterendforge:endstone_dust', '#forge:end_stones')
  e.recipes.mekanism.enriching('6x draconicevolution:draconium_dust', '#forge:ores/draconium')
  //===== biofuel crushing recipes =====//
  e.recipes.mekanism.crushing('2x mekanism:bio_fuel', '#misctags:biofuel2')
  e.recipes.mekanism.crushing('4x mekanism:bio_fuel', '#misctags:biofuel4')
  e.recipes.mekanism.crushing('5x mekanism:bio_fuel', '#misctags:biofuel5')
  e.recipes.mekanism.crushing('7x mekanism:bio_fuel', '#misctags:biofuel7')
  e.recipes.mekanism.crushing('8x mekanism:bio_fuel', '#misctags:biofuel8')
  //===== sawdust sawing recipes =====//
  function sawdustproduce(modid, treetype) {
      e.recipes.mekanism.sawing(
        `6x ${modid}:${treetype}_planks`,
        [`${modid}:stripped_${treetype}_log`, `${modid}:${treetype}_log`],
        Item.of('thermal:sawdust').withChance(0.25)
      ).id(`kubejs:saw/${modid}_log_${treetype}`)
  }
  sawdustproduce('traverse', 'fir')
  sawdustproduce('upgrade_aquatic', 'driftwood')
  sawdustproduce('upgrade_aquatic', 'river')
  sawdustproduce('environmental', 'willow')
  sawdustproduce('environmental', 'cherry')
  sawdustproduce('environmental', 'wisteria')
  utils.listOf(['mossy_glowshroom', 'lacugrove', 'end_lotus', 'pythadendron', 'dragon_tree', 'tenanea', 'helix_tree', 'umbrella_tree', 'jellyshroom', 'lucernia']).forEach(type => {
    e.recipes.mekanism.sawing(
      `6x betterendforge:${type}_planks`,
      [`betterendforge:${type}_stripped_log`, `betterendforge:${type}_log`],
      Item.of('thermal:sawdust').withChance(0.25)
    ).id(`kubejs:saw/betterendforge${type}`)
  })
  //===== add create mossy stones into crushing/enriching recipes =====//
  e.recipes.mekanism.metallurgic_infusing('create:mossy_granite', 'minecraft:granite', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_diorite', 'minecraft:diorite', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_andesite', 'minecraft:andesite', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_limestone', 'create:limestone', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_weathered_limestone', 'create:weathered_limestone', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_dolomite', 'create:dolomite', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_gabbro', 'create:gabbro', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_scoria', 'create:scoria', 'mekanism:bio', 10)
  e.recipes.mekanism.metallurgic_infusing('create:mossy_dark_scoria', 'create:dark_scoria', 'mekanism:bio', 10)
  //===== steel casing to pity machine frame =====//
  utils.listOf([
    'mekanism:crusher',
    'mekanism:energized_smelter',
    'mekanism:electric_pump',
    'mekanism:chemical_infuser'
  ]).forEach( pityitem =>{
    e.replaceInput({output: pityitem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_pity')
  })
  e.replaceInput({output: 'mekanism:metallurgic_infuser'}, '#forge:ingots/osmium', 'industrialforegoing:machine_frame_pity')
  //===== steel casing to simple machine frame =====//
  utils.listOf([
    'mekanism:electric_pump',
    'mekanism:enrichment_chamber',
    'mekanism:teleporter',
    'mekanism:precision_sawmill',
    'mekanismgenerators:gas_burning_generator',
    'mekanism:osmium_compressor',
    'mekanism:painting_machine',
    'mekanism:chemical_infuser'
  ]).forEach( simpleitem =>{
    e.replaceInput({output: simpleitem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_simple')
  })
  //===== steel casing to advanced machine frame =====//
  utils.listOf([
    'mekanismmatter:scanner',
    'mekanismmatter:matter_analyser',
    'mekanism:laser',
    'mekanism:pigment_mixer',
    'mekanism:security_desk',
    'mekanism:solar_neutron_activator',
    'mekanism:combiner'
  ]).forEach( advanceditem =>{
    e.replaceInput({output: advanceditem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_advanced')
  })
  //===== steel casing to supreme machine frame =====//
  utils.listOf([
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanismgenerators:fusion_reactor_frame',
    'mekanismmatter:antimatter_synthesizer',
    'mekanismmatter:mass_fabricator',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:chemical_washer',
    'mekanism:modification_station',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:chemical_washer',
    'mekanism:chemical_crystallizer'
  ]).forEach( supremeitem =>{
    e.replaceInput({output: supremeitem}, 'mekanism:steel_casing', 'industrialforegoing:machine_frame_supreme')
  })
//===== balancing =====//
  //atomic disassembler
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "    AAB  ",
      "   ACADE ",
      "   FGAHDB",
      "   FGIAAA",
      "   JFGGCA",
      "  JKJFFA ",
      " JKJ     ",
      "JKJ      ",
      "JJ       "
    ],
    "key": {
      "A": {
        "item": "fluxnetworks:flux_dust"
      },
      "B": {
        "item": "mekanism:ultimate_control_circuit"
      },
      "C": {
        "item": "draconicevolution:wyvern_core"
      },
      "D": {
        "item": "mekanism:alloy_atomic"
      },
      "E": {
        "item": "allthemodium:unobtainium_ingot"
      },
      "F": {
        "item": "mekanism:teleportation_core"
      },
      "G": {
        "item": "mekanism:energy_tablet"
      },
      "H": {
        "type": "forge:nbt",
        "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe",
        "count": 1,
        "nbt": "{Damage:0}"
      },
      "I": {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "J": {
        "item": "mekanism:hdpe_stick"
      },
      "K": {
        "item": "create:electron_tube"
      }
    },
    "result": {
      "item": "mekanism:atomic_disassembler"
    }
  })
  //entangloporter
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBD",
      "BEFGB",
      "CHIHC",
      "BJFKB",
      "ABCBD"
    ],
    "key": {
      "A": {
        "item": "mekanism:ultimate_control_circuit"
      },
      "B": {
        "item": "mekanism:alloy_atomic"
      },
      "C": {
        "item": "mekanism:teleportation_core"
      },
      "D": {
        "item": "mekanism:ultimate_tier_installer"
      },
      "E": {
        "item": "mekanism:ultimate_universal_cable"
      },
      "F": {
        "item": "createaddition:gold_wire"
      },
      "G": {
        "item": "mekanism:ultimate_mechanical_pipe"
      },
      "H": {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "I": {
        "item": "allthemodium:vibranium_ingot"
      },
      "J": {
        "item": "mekanism:ultimate_logistical_transporter"
      },
      "K": {
        "item": "mekanism:ultimate_pressurized_tube"
      }
    },
    "result": {
      "item": "mekanism:quantum_entangloporter"
    }
  })
  //digital miner
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " A A ",
      "ABCBA",
      "DEFED",
      " GHG ",
      " G G "
    ],
    "key": {
      "A": {
        "item": "mekanism:alloy_atomic"
      },
      "B": {
        "item": "create:electron_tube"
      },
      "C": {
        "item": "allthemodium:allthemodium_ingot"
      },
      "D": {
        "item": "mekanism:logistical_sorter"
      },
      "E": {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "F": {
        "item": "mekanism:robit"
      },
      "G": {
        "item": "mekanism:teleportation_core"
      },
      "H": {
        "item": "thermal:enderium_ingot"
      }
    },
    "result": {
      "item": "mekanism:digital_miner"
    }
  })
  //free runners
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " A A ",
      "ABCBA",
      "AD DA",
      "AD DA",
      " E E "
    ],
    "key": {
      "A": {
        "item": "industrialforegoing:plastic"
      },
      "B": {
        "type": "forge:nbt",
        "item": "mekanism:energy_tablet",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"1000000\"}]}}"
      },
      "C": {
        "item": "allthemodium:vibranium_ingot"
      },
      "D": {
        "item": "allthemodium:allthemodium_ingot"
      },
      "E": {
        "item": "mekanism:hdpe_stick"
      }
    },
    "result": {
      "item": "mekanism:free_runners"
    }
  })
  removeRecipeByOutput(e, [
    'mekanism:atomic_disassembler',
    'mekanism:quantum_entangloporter',
    'mekanism:digital_miner',
    'mekanism:free_runners'
  ])
})