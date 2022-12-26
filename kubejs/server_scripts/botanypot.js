onEvent('recipes', e => {
    //===== Remove recipes =====//
    removeRecipeByOutput(e, [
        'botanypots:botany_pot',
        /botanypots:.+_botany_pot/,
        'botanypotstiers:elite_botany_pot',
        /botanypotstiers:elite_.+_botany_pot/,
        'botanypotstiers:ultra_botany_pot',
        /botanypotstiers:ultra_.+_botany_pot/,
        'botanypotstiers:creative_botany_pot',
        /botanypotstiers:creative_.+_botany_pot/,
    ])
    //===== No colour =====//
    //===== tier basic =====//
    e.shaped('botanypots:botany_pot', ['T T', 'TPT', ' I '], {
        T: 'minecraft:terracotta',
        P: 'minecraft:flower_pot',
        I: '#forge:storage_blocks/iron'
    }).id(`kubejs:botanypots/botany_pot`)
    e.shaped('botanypots:hopper_botany_pot', ['THT', 'TPT', ' I '], {
        T: 'minecraft:terracotta',
        P: 'minecraft:flower_pot',
        I: '#forge:storage_blocks/iron',
        H: 'minecraft:hopper'
    }).id(`kubejs:botanypots/hopper_botany_pot`)
    //===== tier elite =====//
    e.shaped('botanypotstiers:elite_botany_pot', ['BPB', 'PCP', 'BPB'], {
        B: '#forge:storage_blocks/iron',
        P: 'botanypots:botany_pot',
        C: 'industrialforegoing:pink_slime_ingot'
    }).id(`kubejs:botanypots/elite_botany_pot`)
    e.shaped('botanypotstiers:elite_hopper_botany_pot', [' P ', 'IZO', ' U '], {
        P: 'botanypotstiers:elite_botany_pot',
        I: 'cabletiers:elite_importer',
        O: 'cabletiers:elite_exporter',
        U: 'pipez:improved_upgrade',
        Z: 'pipez:item_pipe',
    }).id(`kubejs:botanypots/elite_hopper_botany_pot`)
    //===== tier ultra =====//
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            "A   A",
            "BCDCB",
            "AEEEA",
            "CBBBC"
        ],
        "key": {
            "A": {
                "item": "minecraft:diamond_block"
            },
            "B": {
                "item": "minecraft:terracotta"
            },
            "C": {
                "item": "botanypotstiers:elite_botany_pot"
            },
            "D": {
                "item": "allthecompressed:nether_star_block"
            },
            "E": {
                "item": "mekanism:ultimate_control_circuit"
            }
        },
        "result": {
            "item": "botanypotstiers:ultra_botany_pot"
        }
    })
    e.shaped('botanypotstiers:ultra_hopper_botany_pot', [' P ', 'IZO', ' U '], {
        P: 'botanypotstiers:ultra_botany_pot',
        I: 'cabletiers:ultra_importer',
        O: 'cabletiers:ultra_exporter',
        U: 'pipez:advanced_upgrade',
        Z: 'pipez:item_pipe',
    }).id(`kubejs:botanypots/ultra_hopper_botany_pot`)
    //===== tier creative =====//
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            "A   A",
            "BCDCB",
            "AEEEA",
            "CBBBC"
        ],
        "key": {
            "A": {
                "item": "minecraft:netherite_block"
            },
            "B": {
                "item": "minecraft:terracotta"
            },
            "C": {
                "item": "botanypotstiers:ultra_botany_pot"
            },
            "D": {
                "item": "draconicevolution:awakened_draconium_block"
            },
            "E": {
                "item": "minecraft:dragon_head"
            }
        },
        "result": {
            "item": "botanypotstiers:creative_botany_pot"
        }
    })
    e.shaped('botanypotstiers:creative_hopper_botany_pot', [' P ', 'IZO', ' U '], {
        P: 'botanypotstiers:creative_botany_pot',
        I: 'cabletiers:creative_importer',
        O: 'cabletiers:creative_exporter',
        U: 'pipez:ultimate_upgrade',
        Z: 'pipez:item_pipe',
    }).id(`kubejs:botanypots/creative_hopper_botany_pot`)
    //===== Colour variants =====//
    let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
    colors.forEach(color => {
        //===== tier basic =====//
        e.shaped(`botanypots:${color}_botany_pot`, ['T T', 'TPT', ' I '], {
            T: `minecraft:${color}_terracotta`,
            P: 'minecraft:flower_pot',
            I: '#forge:storage_blocks/iron'
        }).id(`kubejs:botanypots/${color}_botany_pot`)
        e.shaped(`botanypots:hopper_${color}_botany_pot`, ['THT', 'TPT', ' I '], {
            T: `minecraft:${color}_terracotta`,
            P: 'minecraft:flower_pot',
            I: '#forge:storage_blocks/iron',
            H: 'minecraft:hopper'
        }).id(`kubejs:botanypots/hopper_${color}_botany_pot`)
        //===== tier elite =====//
        e.shaped(`botanypotstiers:elite_${color}_botany_pot`, ['BPB', 'PCP', 'BPB'], {
            B: '#forge:storage_blocks/iron',
            P: `botanypots:${color}_botany_pot`,
            C: 'industrialforegoing:pink_slime_ingot'
        }).id(`kubejs:botanypots/elite_${color}_botany_pot`)
        e.shaped(`botanypotstiers:elite_hopper_${color}_botany_pot`, [' P ', 'IZO', ' U '], {
            P: `botanypotstiers:elite_${color}_botany_pot`,
            I: 'cabletiers:elite_importer',
            O: 'cabletiers:elite_exporter',
            U: 'pipez:improved_upgrade',
            Z: 'pipez:item_pipe',
        }).id(`kubejs:botanypots/elite_hopper_${color}_botany_pot`)
        //===== tier ultra =====//
        e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": [
                "     ",
                "A   A",
                "BCDCB",
                "AEEEA",
                "CBBBC"
            ],
            "key": {
                "A": {
                    "item": "minecraft:diamond_block"
                },
                "B": {
                    "item": `minecraft:${color}_terracotta`
                },
                "C": {
                    "item": `botanypotstiers:elite_${color}_botany_pot`
                },
                "D": {
                    "item": "allthecompressed:nether_star_block"
                },
                "E": {
                    "item": "mekanism:ultimate_control_circuit"
                }
            },
            "result": {
                "item": `botanypotstiers:ultra_${color}_botany_pot`
            }
        })
        e.shaped(`botanypotstiers:ultra_hopper_${color}_botany_pot`, [' P ', 'IZO', ' U '], {
            P: `botanypotstiers:ultra_${color}_botany_pot`,
            I: 'cabletiers:ultra_importer',
            O: 'cabletiers:ultra_exporter',
            U: 'pipez:advanced_upgrade',
            Z: 'pipez:item_pipe',
        }).id(`kubejs:botanypots/ultra_hopper_${color}_botany_pot`)
        //===== tier creative =====//
        e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": [
                "     ",
                "A   A",
                "BCDCB",
                "AEEEA",
                "CBBBC"
            ],
            "key": {
                "A": {
                    "item": "minecraft:netherite_block"
                },
                "B": {
                    "item": `minecraft:${color}_terracotta`
                },
                "C": {
                    "item": `botanypotstiers:ultra_${color}_botany_pot`
                },
                "D": {
                    "item": "draconicevolution:awakened_draconium_block"
                },
                "E": {
                    "item": "minecraft:dragon_head"
                }
            },
            "result": {
                "item": `botanypotstiers:creative_${color}_botany_pot`
            }
        })
        e.shaped(`botanypotstiers:creative_hopper_${color}_botany_pot`, [' P ', 'IZO', ' U '], {
            P: `botanypotstiers:creative_${color}_botany_pot`,
            I: 'cabletiers:creative_importer',
            O: 'cabletiers:creative_exporter',
            U: 'pipez:ultimate_upgrade',
            Z: 'pipez:item_pipe',
        }).id(`kubejs:botanypots/creative_hopper_${color}_botany_pot`)
    })

    //===== interconversion of colour variants ======//
    colors.forEach(a => {
        colors.forEach(b => {
            if (a !== b) {
                e.shapeless(`botanypots:${a}_botany_pot`, [`botanypots:${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypots:${a}_botany_pot`, [`botanypots:botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/botany_pot/vanilla_to_${a}`)
                e.shapeless(`botanypots:hopper_${a}_botany_pot`, [`botanypots:hopper_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/hopper_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypots:hopper_${a}_botany_pot`, [`botanypots:hopper_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/hopper_botany_pot/vanilla_to_${a}`)

                e.shapeless(`botanypotstiers:elite_${a}_botany_pot`, [`botanypotstiers:elite_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/elite_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypotstiers:elite_${a}_botany_pot`, [`botanypotstiers:elite_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/elite_botany_pot/vanilla_to_${a}`)
                e.shapeless(`botanypotstiers:elite_hopper_${a}_botany_pot`, [`botanypotstiers:elite_hopper_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/elite_hopper_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypotstiers:elite_hopper_${a}_botany_pot`, [`botanypotstiers:elite_hopper_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/elite_hopper_botany_pot/vanilla_to_${a}`)

                e.shapeless(`botanypotstiers:ultra_${a}_botany_pot`, [`botanypotstiers:ultra_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/ultra_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypotstiers:ultra_${a}_botany_pot`, [`botanypotstiers:ultra_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/ultra_botany_pot/vanilla_to_${a}`)
                e.shapeless(`botanypotstiers:ultra_hopper_${a}_botany_pot`, [`botanypotstiers:ultra_hopper_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/ultra_hopper_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypotstiers:ultra_hopper_${a}_botany_pot`, [`botanypotstiers:ultra_hopper_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/ultra_hopper_botany_pot/vanilla_to_${a}`)

                e.shapeless(`botanypotstiers:creative_${a}_botany_pot`, [`botanypotstiers:creative_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/creative_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypotstiers:creative_${a}_botany_pot`, [`botanypotstiers:creative_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/creative_botany_pot/vanilla_to_${a}`)
                e.shapeless(`botanypotstiers:creative_hopper_${a}_botany_pot`, [`botanypotstiers:creative_hopper_${b}_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/creative_hopper_botany_pot/${b}_to_${a}`)
                e.shapeless(`botanypotstiers:creative_hopper_${a}_botany_pot`, [`botanypotstiers:creative_hopper_botany_pot`, `#forge:dyes/${a}`]).id(`kubejs:botanypots/creative_hopper_botany_pot/vanilla_to_${a}`)
            }
        })
    })
    //===== compactibility =====//
    e.custom({
        type: "botanypots:crop",
        seed: { item: "sushigocrafting:avocado_sapling" },
        categories: ["dirt"],
        growthTicks: 600,
        display: { block: "sushigocrafting:avocado_sapling" },
        results: [
            {
                chance: 0.75,
                output: { item: "sushigocrafting:avocado" },
                minRolls: 1,
                maxRolls: 3
            },
            {
                chance: 0.5,
                output: { item: "sushigocrafting:avocado_log" },
                minRolls: 1,
                maxRolls: 2
            },
            {
                chance: 0.05,
                output: { item: "sushigocrafting:avocado_sapling" },
                minRolls: 1,
                maxRolls: 1
            }
        ]
    })
    e.custom({
        type: "botanypots:crop",
        seed: { item: "sushigocrafting:seaweed" },
        categories: ["water"],
        growthTicks: 1000,
        display: {
            block: "sushigocrafting:seaweed",
            renderFluid: false
        },
        results: [
            {
                chance: 0.75,
                output: { item: "sushigocrafting:seaweed" },
                minRolls: 1,
                maxRolls: 3
            }
        ]
    })
    let seedOnPot = (type, result) => {
        e.custom({
            type: "botanypots:crop",
            seed: { item: `sushigocrafting:${type}_seeds` },
            categories: ["farmland"],
            growthTicks: 1000,
            display: { block: `sushigocrafting:${type}_crop` },
            results: [
                {
                    chance: 0.75,
                    output: { item: result },
                    minRolls: 1,
                    maxRolls: 2
                },
                {
                    chance: 0.5,
                    output: { item: `sushigocrafting:${type}_seeds` },
                    minRolls: 1,
                    maxRolls: 1
                }
            ]
        })
    }
    seedOnPot('cucumber', 'sushigocrafting:cucumber')
    seedOnPot('rice', 'sushigocrafting:rice')
    seedOnPot('soy', 'sushigocrafting:soy_bean')
    seedOnPot('wasabi', 'sushigocrafting:wasabi_root')
})