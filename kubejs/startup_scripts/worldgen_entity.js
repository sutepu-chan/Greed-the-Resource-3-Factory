onEvent('worldgen.add', (event) => {
    event.addSpawn((spawn) => {
        spawn.category = 'creature';
        spawn.entity = 'minecraft:turtle';
        spawn.weight = 80;
        spawn.minCount = 1;
        spawn.maxCount = 3;
        spawn.biomes.blacklist = false;
        spawn.biomes.values = ['#beach', '#ocean', '#river'];
    });
    event.addSpawn((spawn) => {
        spawn.category = 'creature';
        spawn.entity = 'minecraft:slime';
        spawn.weight = 80;
        spawn.minCount = 1;
        spawn.maxCount = 3;
        spawn.biomes.blacklist = false;
        spawn.biomes.values = ['#desert', '#jungle', '#plain'];
    });
});
