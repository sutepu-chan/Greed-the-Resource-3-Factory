onEvent('recipes', e=> {
    modifyShaped(e, 'hostilenetworks:deep_learner', 1,['DRT', 'CEC','DID'],{
        D: 'mysticalagradditions:dragon_scale',
        R: 'minecraft:repeater',
        T: 'minecraft:redstone_torch',
        C: 'minecraft:comparator',
        E: 'minecraft:dragon_egg',
        I: 'extendedcrafting:redstone_ingot'
      })
    e.recipes.create.mechanical_crafting('hostilenetworks:blank_data_model', [
        'DBDBD',
        'LPXPL',
        'LPSPL',
        'LPXPL',
        'DBDBD'
      ],
      {
        P: 'hostilenetworks:empty_prediction',
        L: 'minecraft:lapis_lazuli',
        D: '#forge:gems/diamond',
        B: '#forge:storage_blocks/lapis',
        X: 'mob_grinding_utils:solid_xp_baby',
        S: 'industrialforegoing:pink_slime_bucket'
      }
    ).id(`kubejs:hostilenetworks/blank_data_model`)
    e.recipes.create.mechanical_crafting('hostilenetworks:sim_chamber', [
        '  N  ',
        'DGGGD',
        'LECEL',
        'CCCCC',
        ' LLL '
      ],
      {
        G: '#forge:glass_panes',
        L: 'minecraft:lapis_lazuli',
        D: '#forge:gems/diamond',
        E: 'minecraft:ender_eye',
        N: 'upgradednetherite:ender_upgraded_netherite_ingot',
        C: '#chipped:crying_obsidian'
      }
    ).id(`kubejs:hostilenetworks/sim_chamber`)
    e.recipes.create.mechanical_crafting('hostilenetworks:loot_fabricator', [
        '  L  ',
        'GPPPG',
        'EPNPE',
        'GPPPG',
        ' CCC '
      ],
      {
        P: 'hostilenetworks:empty_prediction',
        L: 'minecraft:lapis_lazuli',
        G: 'minecraft:gold_ingot',
        E: 'minecraft:ender_eye',
        N: 'upgradednetherite:gold_upgraded_netherite_ingot',
        C: '#chipped:crying_obsidian'
      }
    ).id(`kubejs:hostilenetworks/loot_fabricator`)
    removeRecipeByOutput(e, [
        'hostilenetworks:blank_data_model',
        'hostilenetworks:sim_chamber',
        'hostilenetworks:loot_fabricator'
    ])
})