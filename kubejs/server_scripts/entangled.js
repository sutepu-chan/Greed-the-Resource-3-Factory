onEvent('recipes', e => {
	removeRecipeByOutput(e, ['entangled:block'])
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
			"ABCBD",
			"EFGFE",
			"HIJIH",
			"EFGFE",
			"KBCBL"
		],
		"key": {
			"A": {
				"item": "mekanism:ultimate_mechanical_pipe"
			},
			"B": {
				"item": "draconicevolution:draconium_core"
			},
			"C": {
				"item": "createaddition:iron_wire"
			},
			"D": {
				"item": "mekanism:ultimate_universal_cable"
			},
			"E": {
				"item": "mekanism:block_refined_obsidian"
			},
			"F": {
				"item": "mekanism:teleportation_core"
			},
			"G": {
				"item": "pipez:advanced_upgrade"
			},
			"H": {
				"item": "createaddition:gold_spool"
			},
			"I": {
				"item": "industrialforegoing:machine_frame_supreme"
			},
			"J": {
				"item": "allthemodium:vibranium_ingot"
			},
			"K": {
				"item": "mekanism:ultimate_pressurized_tube"
			},
			"L": {
				"item": "mekanism:ultimate_logistical_transporter"
			}
		},
		"result": {
			"item": "entangled:block"
		}
	})
})