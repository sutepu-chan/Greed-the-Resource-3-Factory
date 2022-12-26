onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'draconicevolution:basic_crafting_injector',
        'draconicevolution:wyvern_crafting_injector',
        'draconicevolution:awakened_crafting_injector'
    ])
    energize(e, [
        'draconicevolution:draconium_ingot',
        'minecraft:diamond',
        'mekanism:ingot_steel',
        'powah:capacitor_blazing',
        'resourcefulbees:centrifuge'
    ],
    'draconicevolution:basic_crafting_injector', 120000, 1)
    draconicFusion(e, 'draconicevolution:wyvern_crafting_injector', 1, 800000, 'draconicevolution:basic_crafting_injector', [
        'botania:mana_diamond',
        'botania:mana_diamond',
        'botania:mana_diamond',
        'botania:mana_diamond',
        'draconicevolution:draconium_block',
        'draconicevolution:draconium_block',
        'powah:crystal_niotic',
        'powah:crystal_spirited'
    ])
    draconicFusion(e, 'draconicevolution:awakened_crafting_injector', 1, 40960000, 'draconicevolution:wyvern_crafting_injector', [
        'mythicbotany:alfsteel_armor_upgrade',
        'powah:crystal_nitro',
        'powah:crystal_nitro',
        'powah:crystal_nitro',
        'draconicevolution:awakened_draconium_block',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core',
        'minecraft:diamond_block',
        'minecraft:diamond_block'
    ])
})