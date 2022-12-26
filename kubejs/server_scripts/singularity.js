onEvent('recipes', e => {
    e.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 1000000000,
        "powerRate": 1000000000,
        "inputCount": 1,
        "ingredient": {
        "item": "mekanism:ultimate_induction_cell"
        },
        "catalyst": {
            "item": "draconicevolution:chaotic_crafting_injector"
        },
        "result": {
            "item": "extendedcrafting:singularity",
            "nbt": {
                "Id":"extendedcrafting:forge_energy"
            }
        }
    })
})