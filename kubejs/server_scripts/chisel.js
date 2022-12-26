onEvent('recipes', e => {
    removeRecipeByID(e, [
        'chisel:iron_chisel',
        'chisel:diamond_chisel',
        'chisel:hitech_chisel'
    ])
    e.shaped('chisel:iron_chisel', [' I', 'T '], {
        I: '#forge:ingots/iron',
        T: '#forge:terracotta'
    })
    e.shaped('chisel:diamond_chisel', [' D', 'C '], {
        D: '#forge:gems/diamond',
        C: 'chisel:iron_chisel'
    })
    e.shaped('chisel:hitech_chisel', ['  D', ' C ', 'I  '], {
        D: '#forge:gems/diamond',
        I: '#forge:ingots/iron',
        C: 'chisel:diamond_chisel'
    })
})