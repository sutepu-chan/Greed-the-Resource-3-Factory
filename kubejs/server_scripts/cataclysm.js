onEvent('recipes', e => {
    removeRecipeByOutput(e, ['cataclysm:witherite_ingot', 'cataclysm:enderite_ingot'])

    e.shapeless('cataclysm:witherite_block', '9x upgradednetherite:wither_upgraded_netherite_ingot').id(`kubejs:cataclysm/compress/witherite_block`)
    e.shapeless('9x upgradednetherite:wither_upgraded_netherite_ingot', 'cataclysm:witherite_block').id(`kubejs:cataclysm/decompress/witherite_block`)

    e.shapeless('cataclysm:enderite_block', '9x upgradednetherite:ender_upgraded_netherite_ingot').id(`kubejs:cataclysm/compress/enderite_block`)
    e.shapeless('9x upgradednetherite:ender_upgraded_netherite_ingot', 'cataclysm:enderite_block').id(`kubejs:cataclysm/decompress/enderite_block`)

    e.shapeless('cataclysm:ignitium_block', '9x cataclysm:ignitium_ingot').id(`kubejs:cataclysm/compress/ignitium_block`)
    e.shapeless('9x cataclysm:ignitium_ingot', 'cataclysm:ignitium_block').id(`kubejs:cataclysm/decompress/ignitium_block`)

    e.recipes.createDeploying('cataclysm:ignitium_ingot', ['upgradednetherite:fire_upgraded_netherite_ingot', 'botania:blaze_block']).id(`kubejs:cataclysm/ignitium_ingot`)

    e.shaped('cataclysm:ignitium_helmet', ['III', 'I I'], {
        I: 'cataclysm:ignitium_ingot'
    }).id(`kubejs:cataclysm/ignitium_helmet`)
    e.shaped('cataclysm:ignitium_chestplate', ['I I', 'III', 'III'], {
        I: 'cataclysm:ignitium_ingot'
    }).id(`kubejs:cataclysm/ignitium_chestplate`)
    e.shaped('cataclysm:ignitium_leggings', ['III', 'I I', 'I I'], {
        I: 'cataclysm:ignitium_ingot'
    }).id(`kubejs:cataclysm/ignitium_leggings`)
    e.shaped('cataclysm:ignitium_boots', ['I I', 'I I'], {
        I: 'cataclysm:ignitium_ingot'
    }).id(`kubejs:cataclysm/ignitium_boots`)
})