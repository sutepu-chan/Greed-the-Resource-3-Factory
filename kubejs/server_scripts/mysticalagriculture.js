onEvent('recipes', e => {
  //===== logicalization of recipe =====//
    modifyShaped(e, 'mysticalagriculture:witherproof_block', 1, ['OIO', 'IOI', 'OIO'], {
        O: 'allthecompressed:obsidian_block_2x',
        I: 'minecraft:iron_bars'
    })
    modifyShaped(e, 'mysticalagriculture:witherproof_bricks', 4, ['WW', 'WW'], {
        W: 'mysticalagriculture:witherproof_block'
    })
    modifyShaped(e, 'mysticalagriculture:witherproof_glass', 8, ['GGG', 'GWG', 'GGG'], {
        G: 'mysticalagriculture:soul_glass',
        W: 'mysticalagriculture:witherproof_block'
    })
    modifyShaped(e, 'mysticalagriculture:tinkering_table', 1, ['IGI', 'BSB', 'SSS'], {
      B: '#chisel:stone_bricks',
      S: 'mysticalagriculture:soulium_block',
      I: '#forge:storage_blocks/iron',
      G: 'mysticalagriculture:soulium_gemstone_block'
    })
  //===== creative solium dagger =====//
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "      A",
          "    AA ",
          "   AAA ",
          " BBAA  ",
          " BCB   ",
          " DBB   ",
          "D      "
        ],
        "key": {
          "A": {
            "item": "allthemodium:unobtainium_ingot"
          },
          "B": {
            "item": "bloodmagic:throwing_dagger_syringe"
          },
          "C": {
            "item": "bloodmagic:daggerofsacrifice"
          },
          "D": {
            "item": "mekanism:ingot_refined_obsidian"
          }
        },
        "result": {
          "item": "mysticalagriculture:creative_soulium_dagger"
        }
      })

})