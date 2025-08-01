// priority: 0

StartupEvents.registry("item", (event) => {
  Platform.mods.kubejs.name = 'CrafTech'
  event.create("coin").texture("kubejs:item/coin");

  event
    .create("dimensional_gem")
    .texture("kubejs:item/dimensional_gem")
    .glow(true)
    .rarity("rare")
    .fireResistant(true)
    .tag("forge:gems")
    .tag("forge:gems/dimensional");
});
  