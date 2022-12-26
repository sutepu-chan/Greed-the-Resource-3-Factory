onEvent('recipes', e => {
    function tomeCrafting(types) {
        types.forEach(([modName, level, enchantment]) => {
            enchantment.forEach(enchant => {
                energize(e, [
                    Item.of(`minecraft:enchanted_book`).withNBT(`{StoredEnchantments:[{lvl:${level}s,id:\"${modName}:${enchant}\"}]}`),
                    Item.of(`minecraft:enchanted_book`).withNBT(`{StoredEnchantments:[{lvl:${level}s,id:\"${modName}:${enchant}\"}]}`),
                ], Item.of('quark:ancient_tome', `{StoredEnchantments:[{lvl:${level}s,id:"${modName}:${enchant}"}]}`), 1000000, 1)
            })
        })
    }
    tomeCrafting([
        [
            'minecraft', 4, [
                'protection',
                'blast_protection',
                'projectile_protection',
                'fire_protection',
                'feather_falling',
                'piercing'
            ]
        ],
        [
            'cofh_core', 4, [
                'holding'
            ]
        ],
        [
            'minecraft', 3, [
                'luck_of_the_sea',
                'fortune',
                'unbreaking',
                'sweeping',
                'looting',
                'soul_speed',
                'depth_strider',
                'thorns',
                'respiration',
                'lure',
                'loyalty',
                'riptide',
                'quick_charge'
            ]
        ],
        [
            'create', 3, [
                'potato_recovery',
                'capacity'
            ]
        ],
        [
            'minecraft', 2, [
                'punch',
                'fire_aspect',
                'knockback',
                'frost_walker'
            ]
        ],
        [
            'minecraft', 5, [
                'power',
                'impaling',
                'efficiency',
                'bane_of_arthropods',
                'smite',
                'sharpness'
            ]
        ],
        [
            'tombstone', 5, [
                'magic_siphon',
                'shadow_step',
                'curse_of_bones',
                'plague_bringer'
            ]
        ],
        [
            'farmersdelight', 3, ['backstabbing']
        ],
        [
            'draconicevolution', 5, ['reaper_enchantment']
        ],
        [
            'mythicbotany', 5, ['hammer_mobility']
        ]
    ])
})