onEvent('recipes', e => {
  utils.listOf([
    'lacugrove',
    'pythadendron',
    'dragon_tree',
    'tenanea',
    'helix_tree',
    'umbrella_tree',
    'jellyshroom',
    'lucernia',
    'end_lotus',
    'mossy_glowshroom'
  ]).forEach(ingredient => {
    e.shaped(Item.of(`betterendforge:${ingredient}_chest`, 4), ['AAA', 'A A', 'AAA'], {
      A: [`betterendforge:${ingredient}_log`, `betterendforge:${ingredient}_stripped_log`]
    })
  })
})