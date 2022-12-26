onEvent('recipes', e => {
    global.recipe_disable.forEach(item => {
        e.remove({output: item})
    })
})